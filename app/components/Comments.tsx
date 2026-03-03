'use client';

import { MessageSquare } from 'lucide-react';
import { useDarkMode } from '../context/darkModeProvider';

export default function Comments() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`rounded-lg border p-8 text-center ${
        isDarkMode ? ' border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <MessageSquare
        className={`w-12 h-12 mx-auto mb-4 ${
          isDarkMode ? 'text-gray-600' : 'text-gray-400'
        }`}
      />
      <h4
        className={`text-lg font-semibold mb-2 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Comments Coming Soon
      </h4>
      <p
        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
      >
        Share your thoughts and feedback on this post. Comments section will be
        available soon.
      </p>
    </div>
  );
}
