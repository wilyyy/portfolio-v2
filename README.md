some 4fun house cleaning

About.js too verbose in code syntax and page copy, clean up
want to get rid of baffle-react package b/c its boomer package, recreate in house 🧠
    import React, { useState, useEffect } from 'react';

const Obfuscate = ({ message }) => {
  const [obfuscatedMessage, setObfuscatedMessage] = useState('');

  useEffect(() => {
    let obfuscated = '';
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        obfuscated += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      } else if (charCode >= 97 && charCode <= 122) {
        obfuscated += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      } else {
        obfuscated += message.charAt(i);
      }
    }
    setObfuscatedMessage(obfuscated);
  }, [message]);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert(message);
    }, 3000);
    return () => clearTimeout(timer);
  }, [obfuscatedMessage]);

  return <div>{obfuscatedMessage}</div>;
};

export default Obfuscate;

add photos to projects, maybe use google cloud storage or azure blob to store images, faster load
consider switching to CSS grid for large and x-large screen sizes
finally get mobile finished
accesibility
some icons don't fit usability heuristics (gear icon is cognitively associated with a 'settings' functionality instead of a 'list of tools'
investigate SEO
