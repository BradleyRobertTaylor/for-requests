declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    PG_PORT?: string;
    PG_USERNAME?: string;
    PG_PASSWORD?: string;
    PG_DATABASE?: string;
  }
}
