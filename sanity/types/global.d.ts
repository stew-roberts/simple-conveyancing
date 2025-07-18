export {};

declare global {
  interface Window {
    tcnconfig: {
      license: string;
      container: string;
    };
  }
}