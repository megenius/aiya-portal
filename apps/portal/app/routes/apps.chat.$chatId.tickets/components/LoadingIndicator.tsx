interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingIndicator = ({ size = 'md', message = 'Loading...' }: LoadingIndicatorProps) => {
  const dotSize = size === 'sm' ? 'size-1.5' : size === 'lg' ? 'size-3' : 'size-2.5';
  
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <span className="py-1.5 inline-flex gap-x-1">
        <span className={`${dotSize} bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite] dark:bg-neutral-200`}></span>
        <span className={`${dotSize} bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite_0.2s] dark:bg-neutral-200`}></span>
        <span className={`${dotSize} bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite_0.4s] dark:bg-neutral-200`}></span>
      </span>
      {message && (
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingIndicator;
