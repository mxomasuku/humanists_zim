'use client'

import {useEffect} from 'react'

const HubspotForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore
      hbspt.forms.create({
        region: 'eu1',
        portalId: '143518701',
        formId: 'ca7b08be-d8c5-4086-98e5-c0e83ce0b63b',
      });
    });
  }, []);

  return (
    <div className={'py-32 block bg-blue'}>
      <div id="hubspotForm" ></div>
    </div>
  );
};

export default HubspotForm;