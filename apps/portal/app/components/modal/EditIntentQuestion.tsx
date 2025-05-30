import React, { useState, useEffect, useCallback, useRef } from 'react';
import { IntentQuestion } from '~/@types/app';
import { randomHexString } from '~/utils/random';

interface EditIntentQuestionModalProps {
  questions: IntentQuestion[];
  questionIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onQuestionEdited: (updatedQuestions: IntentQuestion[]) => void;
  onQuestionRemoved: (removedIndex: number) => void;
  maxLength?: number;
}

const EditIntentQuestionModal: React.FC<EditIntentQuestionModalProps> = ({
  questions,
  questionIndex,
  isOpen,
  onClose,
  onQuestionEdited,
  onQuestionRemoved,
  maxLength = 1000
}) => {
  const [input, setInput] = useState<IntentQuestion>({ id: '', question: '' });
  const [isDirty, setIsDirty] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isNewQuestion = questionIndex === -1;

  useEffect(() => {
    if (isOpen) {
      if (isNewQuestion) {
        setInput({ id: randomHexString(8), question: '' });
        setIsDirty(false);
      } else if (questions[questionIndex]) {
        setInput(questions[questionIndex]);
        setIsDirty(false);
      }
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [isOpen, questions, questionIndex, isNewQuestion]);

  // const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const newText = e.target.value.slice(0, maxLength);
  //   setInput({ ...input, question: newText });
  //   setIsDirty(newText.trim() !== (isNewQuestion ? '' : questions[questionIndex]));
  // }, [maxLength, questions, questionIndex, isNewQuestion]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value.slice(0, maxLength);
    setInput({ ...input, question: newText });
    setIsDirty(newText.trim() !== (isNewQuestion ? '' : questions[questionIndex]));
  }

  const handleSave = () => {
    if (!input.question.trim()) {
      onClose();
      return;
    }

    let updatedQuestions: Array<IntentQuestion>;
    if (isNewQuestion) {
      // Split input by new lines and filter out empty lines
      const newQuestions = input.question.split('\n').filter(q => q.trim() !== '').map(q => q.replace("####", "").trim());
      updatedQuestions = newQuestions.map(q => ({ id: randomHexString(8), question: q }));
    } else {
      updatedQuestions = [...questions];
      updatedQuestions[questionIndex] = input
    }

    onQuestionEdited(updatedQuestions);
    onClose();
  };

  const handleRemove = () => {
    if (isNewQuestion) {
      onClose();
      return;
    }

    onQuestionRemoved(questionIndex);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="hs-pro-edit-question-modal"
      className="hs-overlay w-full h-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full max-h-full flex flex-col bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
          <div className="py-3 px-4 flex justify-between items-center border-b">
            <div className='flex items-center gap-2'>
              <h3 className="font-semibold text-gray-800">{isNewQuestion ? 'Add Question(s)' : 'Edit Question'}</h3>
              <div className='text-gray-300 text-sm'>{input.id}</div>
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <div className="p-4">
              <textarea
                ref={textareaRef}
                id="hs-pro-question-text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows={6}
                placeholder={isNewQuestion ? "Enter questions here (one per line)..." : "Enter question here..."}
                value={input.question}
                onChange={handleInputChange}
                maxLength={maxLength}
              />
              <div className="mt-2 text-sm text-gray-500 text-right">
                {input.question.length} / {maxLength}
              </div>
              {isNewQuestion && (
                <p className="mt-2 text-sm text-gray-500">
                  Each line will be added as a separate question.
                </p>
              )}
            </div>
            <div className="p-4 flex justify-between items-center">
              {!isNewQuestion && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-500 bg-white text-red-500 shadow-xs hover:bg-red-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Remove
                </button>
              )}
              <div className={`flex gap-x-2 ${isNewQuestion ? 'ml-auto' : ''}`}>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isNewQuestion ? !input.question.trim() : !isDirty}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isNewQuestion ? 'Add' : 'Save'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditIntentQuestionModal;