'use client';

import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  formId: string;
  target?: string;
  region?: string;
}

const HUBSPOT_PORTAL_ID = '244077776';

export default function HubSpotForm({ 
  formId, 
  target = '#hubspot-form-container',
  region = 'na1' 
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formLoaded = useRef(false);

  useEffect(() => {
    if (formLoaded.current) return;
    formLoaded.current = true;

    const loadHubSpot = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region,
          portalId: HUBSPOT_PORTAL_ID,
          formId,
          target,
        });
      }
    };

    // Check if script already loaded
    // @ts-ignore
    if (window.hbspt) {
      loadHubSpot();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = loadHubSpot;
    document.body.appendChild(script);

    return () => {
      // Cleanup handled by HubSpot
    };
  }, [formId, region, target]);

  return <div id="hubspot-form-container" ref={containerRef} />;
}
