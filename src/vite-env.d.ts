/// <reference types="vite/client" />
/// <reference types="vite-plugin-monkey/client" />
//// <reference types="vite-plugin-monkey/global" />

// extend globalThis
declare global {
  function displayForm(formName: string): void;

  interface Window {
    sentHref: (url: string) => void;
  }
}

export {};
