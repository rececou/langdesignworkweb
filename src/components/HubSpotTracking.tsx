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

    return () => {
      document.body.removeChild(hsp);
    };
  }, []);

  return null;
}
