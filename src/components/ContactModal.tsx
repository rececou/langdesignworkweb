'use client';

import { useState, useEffect } from 'react';
import HubSpotForm from './HubSpotForm';

const FORM_ID = 'a7ceb992-15d6-4c34-a5f0-c5fcdb438f0c';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: Event) => {
    e.preventDefault();
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    // Wait for DOM to be ready
    const timeout = setTimeout(() => {
      const triggers = document.querySelectorAll('.contact-modal-trigger');
      
      triggers.forEach(trigger => {
        // Remove any existing listeners
        const newTrigger = trigger.cloneNode(true) as Element;
        trigger.parentNode?.replaceChild(newTrigger, trigger);
        
        newTrigger.addEventListener('click', openModal);
      });
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
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
