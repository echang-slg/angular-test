import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { UserComponent } from "@components/user/user.component";
import { TasksComponent } from "@components/tasks/tasks.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule, // Import BrowserModule for web apps
    HttpClientModule,  //only needed if want to log on server
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,       // Set default log level
      serverLogLevel: NgxLoggerLevel.ERROR, // Log errors to the server
      serverLoggingUrl: '/api/logs'     // Optional: Server endpoint for logs,
    },
    ),
    HeaderComponent,
    UserComponent,
    TasksComponent,
    RouterOutlet, RouterLink, RouterLinkActive,
  ],
  providers: [], // Add services at the root level
  bootstrap: [AppComponent]
})
export class AppModule { }
