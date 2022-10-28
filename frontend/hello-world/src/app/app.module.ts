import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApmModule, ApmService } from '@elastic/apm-rum-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApmModule
  ],
  providers: [ApmService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(service: ApmService) {
    // Agent API is exposed through this apm instance
    const apm = service.init({
      serviceName: 'frontend',
      serverUrl: 'http://localhost:8200',
      environment: 'dev',
      logLevel: 'trace',
      distributedTracing: true,
      distributedTracingOrigins: ['http://localhost:4200','http://127.0.0.1:8081']
    })
  }


}
