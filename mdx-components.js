import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components) {
  return {
    h1: (props) => (
      <h1
        className="text-5xl font-extrabold mb-8 mt-2 text-gray-900 dark:text-white leading-tight tracking-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white leading-snug border-b-2 border-gray-200 pb-2"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-2xl font-semibold mb-4 mt-8 text-gray-800 dark:text-white leading-snug"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-white"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mb-6 text-gray-700 dark:text-white leading-relaxed text-lg"
        {...props}
      />
    ),
    a: ({ href, ...props }) => {
      const isExternal = href?.startsWith('http');
      const isAnchor = href?.startsWith('#');

      if (isExternal) {
        return (
          <a
            href={href}
            className="text-green-600 hover:text-green-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        );
      }

      if (isAnchor) {
        return (
          <a
            href={href}
            className="text-green-600 hover:text-green-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
            {...props}
          />
        );
      }

      return (
        <Link
          href={href}
          className="text-green-600 hover:text-green-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
          {...props}
        />
      );
    },
    Image: ({ alt = 'Blog image', ...props }) => (
      <span className="block my-8 rounded-xl overflow-hidden shadow-lg">
        <Image alt={alt} className="w-full h-auto" loading="lazy" {...props} />
      </span>
    ),
    code: (props) => (
      <code
        className="bg-green-50 px-2 py-1 rounded-md text-[0.9em] font-mono font-semibold border border-green-200 text-pretty text-green-700 dark:text-white"
        {...props}
      />
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-950 text-gray-100 p-6 rounded-xl overflow-x-auto my-8 text-sm leading-relaxed shadow-xl border border-gray-800"
        {...props}
      >
        {children}
      </pre>
    ),
    ul: (props) => (
      <ul
        className="list-disc list-outside mb-6 space-y-3 text-gray-700 pl-6 marker:text-green-500"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal list-outside mb-6 space-y-3 text-gray-700 pl-6 marker:text-green-500 marker:font-semibold"
        {...props}
      />
    ),
    li: (props) => <li className="pl-2 leading-relaxed text-lg" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-green-500 bg-green-50 pl-6 pr-4 py-4 italic my-8 text-gray-700 rounded-r-lg"
        {...props}
      />
    ),
    hr: (props) => (
      <hr className="my-12 border-t-2 border-gray-200" {...props} />
    ),
    table: (props) => (
      <div className="overflow-x-auto my-8">
        <table
          className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg"
          {...props}
        />
      </div>
    ),
    thead: (props) => <thead className="bg-gray-50" {...props} />,
    tbody: (props) => (
      <tbody className="divide-y divide-gray-200 bg-white" {...props} />
    ),
    tr: (props) => <tr {...props} />,
    th: (props) => (
      <th
        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
        {...props}
      />
    ),
    td: (props) => (
      <td className="px-6 py-4 text-sm text-gray-700" {...props} />
    ),
    ...components,
  };
}
