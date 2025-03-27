import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdown }) => {
  const slugify = (text) => {
    // Remove parentheses and special characters, but keep Thai text
    return text.replace(/[()]/g, '')
      .trim()
      .replace(/\s+/g, '-').toLowerCase();
  };

  useEffect(() => {
    const handleInternalLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.hash) {
        e.preventDefault();

        // Decode the URL-encoded hash and create slug
        const decoded = decodeURIComponent(link.hash.slice(1));
        const targetId = slugify(decoded);
        console.log('Looking for:', targetId);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleInternalLinkClick);
    return () => document.removeEventListener('click', handleInternalLinkClick);
  }, []);

  const components = {
    h1: ({ children }) => {
      const text = children.toString();
      const id = slugify(text);
      return (
        <h1
          id={id}
          className="text-3xl font-bold text-gray-800 mb-6 dark:text-white scroll-mt-16"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const text = children.toString();
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="text-2xl font-bold text-gray-800 mb-4 dark:text-white scroll-mt-16"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = children.toString();
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="text-xl font-bold text-gray-800 mb-3 dark:text-white scroll-mt-16"
        >
          {children}
        </h3>
      );
    },

    // Links - ensure href uses the same slugify function
    a: ({ children, href }) => {
      const isInternal = href?.startsWith('#');

      if (isInternal) {
        // Decode and re-encode the href using our slugify function
        const decoded = decodeURIComponent(href.slice(1));
        href = '#' + slugify(decoded);
      }

      return (
        <a
          href={href}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
          {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },

    p: ({ children }) => (
      <p className="text-gray-800 mb-4 dark:text-gray-200 leading-relaxed">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800 dark:text-gray-200">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-800 dark:text-gray-200">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="ml-4 leading-relaxed">
        {children}
      </li>
    ),

    hr: () => (
      <hr className="my-8 border-t border-gray-300 dark:border-gray-700" />
    ),

  };

  return (
    <div className="bg-white rounded-xl shadow-xs p-4 dark:bg-slate-900">
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <ReactMarkdown
          components={components}
          children={markdown}
        />
      </div>
    </div>
  );
};

export default MarkdownRenderer;