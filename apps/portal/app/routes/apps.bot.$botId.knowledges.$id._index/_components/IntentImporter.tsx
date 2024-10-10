import React, { useState, useRef, ChangeEvent, useCallback } from 'react';
import { read, utils } from 'xlsx';
import Papa from 'papaparse';
import { BotIntent } from '~/@types/app';
import { useDropzone } from 'react-dropzone-esm'
import { randomHexString } from '~/utils/random';

interface ImportStats {
  success: number;
  errors: number;
}

interface IntentImporterProps {
  existingIntents: BotIntent[];
  onImport: (newIntents: BotIntent[]) => void;
}

const IntentImporter: React.FC<IntentImporterProps> = ({ existingIntents, onImport }) => {
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [transformedData, setTransformedData] = useState<any[]>([]);
  const [importStats, setImportStats] = useState<ImportStats>({ success: 0, errors: 0 });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/json': ['.json']
    },
    multiple: false
  });

  const processFile = async (file: File) => {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    let data: any[] = [];

    if (fileExtension === 'csv') {
      const text = await file.text();
      const result = Papa.parse(text, { header: true, skipEmptyLines: true });
      data = result.data as any[];
    } else if (['xlsx', 'xls'].includes(fileExtension || '')) {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = read(arrayBuffer);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      data = utils.sheet_to_json(worksheet);
    } else if (fileExtension === 'json') {
      const text = await file.text();
      data = JSON.parse(text);
    }

    if (data.length === 0) {
      return;
    }

    console.log(data);


    const transformedData = data.map(item => ({
      name: item.name.trim(),
      intent: item.intent.trim(),
      quick_reply: item.quick_reply?.trim(),
      questions: Array.isArray(item.questions)
        ? item.questions.map(q => q.trim()).filter(q => q !== '')
        : item.questions.split('####').map(q => q.trim()).filter(q => q !== ''),
      answers: Array.isArray(item.answers)
        ? item.answers.map(a => a.trim()).filter(a => a !== '')
        : item.answers.split('####').map(a => a.trim()).filter(a => a !== ''),
      tags: Array.isArray(item.tags)
        ? item.tags.map(t => t.trim()).filter(t => t !== '')
        : item.tags.split('####').map(t => t.trim()).filter(t => t !== ''),
    }));
    setPreviewData(transformedData.slice(0, 5));
    setTransformedData(transformedData);
  };


  const handleImport = () => {
    const newIntents: BotIntent[] = [];
    const errors: string[] = [];

    transformedData.forEach((item, index) => {
      if (!item.name || item.questions.length === 0 || item.answers.length === 0) {
        errors.push(`Row ${index + 1}: Missing required fields or all answers/questions are empty`);
        return;
      }

      const isDuplicate = existingIntents.some(
        (intent) => intent.name.toLowerCase() === item.name.toLowerCase()
      );

      if (isDuplicate) {
        errors.push(`Row ${index + 1}: Duplicate intent "${item.name}"`);
        return;
      }

      newIntents.push({ id: randomHexString(8), ...item });
    });

    setImportStats({
      success: newIntents.length,
      errors: errors.length,
    });
    setErrorMessages(errors);

    if (newIntents.length > 0) {
      onImport(newIntents);
    }
  };

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="cursor-pointer">
        <div className="flex items-center justify-center w-full p-12 bg-white border border-dashed border-gray-300 rounded-xl">
          <input {...getInputProps()} />
          <div className="text-center">
            <svg
              className="w-16 text-gray-400 mx-auto"
              width={70}
              height={46}
              viewBox="0 0 70 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                className="fill-white stroke-gray-400"
              />
              <path
                d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                className="fill-white stroke-gray-400"
              />
              <rect
                x="17.0656"
                y="1.62305"
                width="35.8689"
                height="42.7541"
                rx={5}
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                className="fill-white stroke-gray-400"
              />
              <path
                d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z"
                stroke="currentColor"
                strokeWidth={2}
                className="stroke-gray-400"
              />
              <circle
                cx="39.5902"
                cy="14.9672"
                r="4.16393"
                stroke="currentColor"
                strokeWidth={2}
                className="stroke-gray-400"
              />
            </svg>
            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
              <span className="pe-1 font-medium text-gray-800">
                {isDragActive ? "Drop the files here" : "Drop your files here or"}
              </span>
              {!isDragActive && (
                <span className="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
                  browse
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-400">CSV, Excel, or JSON</p>
          </div>
        </div>
      </div>

      {previewData.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Preview</h3>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Intent</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Quick Reply</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tags</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Questions</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Answers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {previewData.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.intent}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.quick_reply}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.tags.join(",")}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.questions.join(', ')}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.answers.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={handleImport}
          >
            Import
          </button>
        </>
      )}

      {importStats.success > 0 || importStats.errors > 0 ? (
        <div className="bg-blue-50 border border-blue-200 text-sm text-blue-600 rounded-lg p-4 dark:bg-blue-800/30 dark:border-blue-700 dark:text-blue-500" role="alert">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            </div>
            <div className="ms-3">
              <h3 className="font-semibold">Import Results</h3>
              <div className="mt-2">
                Successfully imported: {importStats.success}
                <br />
                Errors: {importStats.errors}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {errorMessages.length > 0 && (
        <div className="bg-red-50 border border-red-200 text-sm text-red-600 rounded-lg p-4 dark:bg-red-800/30 dark:border-red-900 dark:text-red-500" role="alert">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            </div>
            <div className="ms-3">
              <h3 className="font-semibold">Import Errors</h3>
              <div className="mt-2">
                <ul className="list-disc list-inside">
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

};

export default IntentImporter;