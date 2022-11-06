/* eslint-disable node/no-process-env */
/* eslint-disable no-console */
import { config as configDotenv } from 'dotenv';
import { resolve } from 'path';

switch (process.env.NODE_ENV) {
case "development":
  console.log("Environment is 'development'");
  configDotenv({
    path: resolve(__dirname, "../../env/development.env"),
  });
  break;
case "test":
  console.log("Environment is 'test'");
  configDotenv({
    path: resolve(__dirname, "../../env/test.env"),
  });
  break;
case "production":
  configDotenv({
    path: resolve(__dirname, "../../env/production.env"),
  });
  break;
default:
  throw new Error(`'NODE_ENV is not handled!`);
}


export interface IProcessEnv {
	PORT: string | undefined
}
  
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface ProcessEnv extends IProcessEnv { }
	}
}