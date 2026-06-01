'use client';

import { useEffect } from 'react';

export default function HubSpotTracking() {
  useEffect(() => {
    // @ts-ignore
    window._hsq = window._hsq || [];
    const hsp = document.createElement('script');
    hsp.type = 'text/javascript';
    hsp.async = true;
    hsp.id = 'hs-script-loader';
    hsp.src = '//js.hs-scripts.com/244077776.js';
    document.body.appendChild(hsp);

    // Preload the HubSpot forms embed script so the modal form appears instantly
    const formScript = document.createElement('script');
    formScript.src = 'https://js.hsforms.net/forms/embed/v2.js';
    formScript.async = true;
    document.body.appendChild(formScript);

    return () => {
      document.body.removeChild(hsp);
      document.body.removeChild(formScript);
    };
  }, []);

  return null;
}
