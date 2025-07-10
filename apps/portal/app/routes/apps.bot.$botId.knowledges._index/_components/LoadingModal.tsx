import React from "react";

interface LoadingModalProps {
  isVisible: boolean;
  status?: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isVisible, status }) => {
  const getStatusName = (status?: string) => {
    switch (status) {
      case "queued":
        return "Queued";
      case "downloading":
        return "Downloading";
      case "processing":
        return "Processing";
      case "processing_documents":
        return "Processing Documents";
      case "crawling":
        return "Crawling";
      case "ready_for_extraction":
        return "Ready for Extraction";
      case "generating":
        return "Generating";
      case "success":
        return "Success";
      default:
        return "Unknown";
    }
  };

  const getStatusMessage = (status?: string) => {
    switch (status) {
      case "queued":
        return "Queued for Processing";
      case "downloading":
        return "Downloading Resources";
      case "processing":
        return "Analyzing Content";
      case "processing_documents":
        return "Parsing Documents";
      case "crawling":
        return "Collecting Information";
      case "ready_for_extraction":
        return "Ready for Extraction";
      case "generating":
        return "Building Your Chatbot";
      case "success":
        return "Chatbot Successfully Created";
      default:
        return "Processing Request";
    }
  };

  const getStatusSubtitle = (status?: string) => {
    switch (status) {
      case "queued":
        return "Your request is in the queue.";
      case "downloading":
        return "Retrieving the necessary resources.";
      case "processing":
        return "Analyzing the provided content.";
      case "processing_documents":
        return "Extracting data from your documents.";
      case "crawling":
        return "Gathering additional information.";
      case "ready_for_extraction":
        return "Your chatbot is ready for extraction.";
      case "generating":
        return "Composing your chatbot responses.";
      case "success":
        return "Your chatbot has been successfully created!";
      default:
        return "Please wait while we process your request.";
    }
  };

  const getProgressWidth = (status?: string) => {
    const statusOrder = [
      "queued",
      "downloading",
      "processing",
      "processing_documents",
      "crawling",
      "ready_for_extraction",
      "generating",
      "success",
    ];
    const index = statusOrder.indexOf(status || "queued");
    return `${((index + 1) / statusOrder.length) * 100}%`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-white/95 z-[9999] p-4 transition-all duration-300">
      <div className="bg-white border border-gray-100 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Animated Loading Icon */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping"></div>
            <div className="absolute inset-1 rounded-full border-4 border-blue-200 animate-spin [animation-duration:3s]"></div>
            <div className="absolute inset-3 rounded-full border-4 border-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-gray-800">
              {getStatusMessage(status)}
            </h3>
            {status && (
              <div className="text-blue-600 font-medium text-lg capitalize tracking-wide">
                {getStatusName(status)}
              </div>
            )}
            <div className="text-gray-600 text-sm mt-2">
              {getStatusSubtitle(status)}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: getProgressWidth(status) }}
            ></div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-2">
            This may take a few moments. Please don&apos;t close this window.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
