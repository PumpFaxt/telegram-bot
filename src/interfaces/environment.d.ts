declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TG_BOT_TOKEN: string;
      }
    }
  }
  
  export {};
  