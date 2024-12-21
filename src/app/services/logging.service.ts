import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(message: string): void {
    console.log(`LOG: ${message}`);
  }

  error(message: string): void {
    console.error(`ERROR: ${message}`);
  }

  warn(message: string): void {
    console.warn(`WARN: ${message}`);
  }

  info(message: string): void {
    console.info(`INFO: ${message}`);
  }

  debug(message: string): void {
    console.debug(`DEBUG: ${message}`);
  }
}
