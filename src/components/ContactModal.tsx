'use client';

import { useEffect, useRef, useState } from 'react';
import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useContactModal = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => {
    set({ isOpen: true });
    document.body.style.overflow = 'hidden';
  },
  close: () => {
    set({ isOpen: false });
    document.body.style.overflow = '';
  },
}));

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [submitted, setSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !formContainerRef.current) return;

    const container = formContainerRef.current;

    // Clear any previous form
    container.innerHTML = '';
    const formDiv = document.createElement('div');
    formDiv.id = 'ldw-contact-form';
    container.appendChild(formDiv);

    // Create the form - script is preloaded by HubSpotTracking
    const waitForHbspt = setInterval(() => {
      if ((window as any).hbspt) {
        clearInterval(waitForHbspt);
        (window as any).hbspt.forms.create({
          region: 'na1',
          portalId: '244077776',
          formId: 'a7ceb992-15d6-4c34-a5f0-c5fcdb438f0c',
          target: '#ldw-contact-form',
          onFormSubmitted: () => {
            setSubmitted(true);
            setTimeout(close, 3000);
          },
        });
      }
    }, 100);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(waitForHbspt);
    }, 10000);

    return () => {
      clearInterval(waitForHbspt);
      clearTimeout(timeout);
      setSubmitted(false);
    };
  }, [isOpen, close]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">WORK WITH US</p>
            <h3 className="text-2xl font-bold">Let&apos;s talk</h3>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-bold text-green-600 mb-2">Thank you!</p>
              <p className="text-gray-600">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">Tell us about your brand and we&apos;ll be in touch.</p>
              <div ref={formContainerRef} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
