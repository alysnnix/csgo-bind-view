/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    SESSION_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    FLAGS_SECRET: string;

    B4A_SERVER_URL: string;
    B4A_APPLICATION_ID: string;
    B4A_CLIENT_KEY: string;
    B4A_JAVASCRIPT_KEY: string;
    B4A_REST_API_KEY: string;
    B4A_MASTER_KEY: string;
  }
}
