'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-accepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-accepted', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <p className="text-sm text-gray-700 mb-4">
          This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-gray-600 text-white text-sm px-4 py-2 rounded hover:bg-gray-500 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
