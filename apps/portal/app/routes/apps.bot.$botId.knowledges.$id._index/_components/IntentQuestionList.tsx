import { HighlightText } from '@repo/ui';
import React, { useState } from 'react';
import EditIntentQuestionModal from '~/components/modal/EditIntentQuestion';
import { Plus } from 'lucide-react';
import { update } from 'lodash';
import { IntentQuestion } from '~/@types/app';

interface IntentQuestionListProps {
  questions: IntentQuestion[];
  searchText: string;
  onChanged: (updatedQuestions: IntentQuestion[], index: number, action: 'create' | 'update' | 'delete') => void;
}

const IntentQuestionList: React.FC<IntentQuestionListProps> = ({ questions, searchText, onChanged }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(index);
    setIsModalOpen(true);
  };

  const handleAddQuestion = () => {
    setSelectedQuestion(-1);  // -1 indicates a new question
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(-1);
  };

  const handleQuestionRemoved = (removedIndex: number) => {
    const updatedQuestions = questions.filter((_, index) => index !== removedIndex);
    onChanged(updatedQuestions, removedIndex, 'delete');
  };


  return (
    <>
      <div className="pb-3 px-3 flex flex-wrap items-center">
        {questions.map((question, index) => (
          <span
            key={question.id}
            className="inline-flex cursor-pointer me-1 mb-1 items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-500 text-gray-500 dark:text-neutral-400"
            onClick={() => handleQuestionClick(index)}
          >
            <HighlightText text={question.question} highlight={searchText} />
          </span>
        ))}
        <button
          onClick={handleAddQuestion}
          className="inline-flex items-center justify-center w-6 h-6 me-1 mb-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <Plus size={16} />
          <span className="sr-only">Add question</span>
        </button>
      </div>

      <EditIntentQuestionModal
        questions={questions}
        questionIndex={selectedQuestion}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onQuestionEdited={(updatedQuestions) => {
          onChanged(updatedQuestions, selectedQuestion, selectedQuestion === -1 ? 'create' : 'update')
        }}
        onQuestionRemoved={handleQuestionRemoved}
      />
    </>
  );
};

export default IntentQuestionList;