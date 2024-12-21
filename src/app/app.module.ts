import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppComponent, // Declare the root component
    BrowserModule, // Import BrowserModule for web apps
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,       // Set default log level
      serverLogLevel: NgxLoggerLevel.ERROR, // Log errors to the server
      serverLoggingUrl: '/api/logs'     // Optional: Server endpoint for logs
    }),
    RouterModule.forRoot(appRoutes, { bindToComponentInputs: true})
  ],
  providers: [], // Add services at the root level
})
export class AppModule { }
