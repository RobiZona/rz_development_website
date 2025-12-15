/// <reference types="vitepress/client" />

/**
 * Global Type Declarations for VitePress
 * 
 * This file contains ambient type declarations for modules
 * and global enhancements used throughout the theme.
 */

// Declare module for JSON imports
declare module '*.json' {
  const value: unknown;
  export default value;
}

// Declare module for Vue files
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

// Declare module for CSS files
declare module '*.css' {
  const css: string;
  export default css;
}

// Enhance Navigator for Clipboard API
interface Navigator {
  readonly clipboard: Clipboard;
}

interface Clipboard {
  writeText(text: string): Promise<void>;
  readText(): Promise<string>;
}

// Extend Window if needed for custom properties
interface Window {
  // Add any custom window properties here if needed
}

// Document execCommand (deprecated but used as fallback)
interface Document {
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
}

