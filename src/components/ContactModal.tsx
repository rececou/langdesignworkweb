'use client';

import { useState, useEffect, useCallback } from 'react';
import HubSpotForm from './HubSpotForm';

const FORM_ID = 'a7ceb992-15d6-4c34-a5f0-c5fcdb438f0c';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    // Attach click listeners to all trigger elements
    const triggers = document.querySelectorAll('.contact-modal-trigger, [href="#contact"]');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      triggers.forEach(trigger => {
        trigger.removeEventListener('click', openModal);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">WORK WITH US</p>
            <h3 className="text-2xl font-bold">Let's talk</h3>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">Tell us about your brand and we'll be in touch.</p>
          <HubSpotForm formId={FORM_ID} />
        </div>
      </div>
    </div>
  );
}
