// Here goes all your overrides for NodeJS types
// E.g Env Variables

declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
  }
}
