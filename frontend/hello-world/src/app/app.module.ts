import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {
  OpenTelemetryInterceptorModule,
  CompositePropagatorModule,
  OtelColExporterModule,
} from '@jufab/opentelemetry-angular-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OpenTelemetryInterceptorModule.forRoot({
      commonConfig: {
        console: true, // Display trace on console (only in DEV env)
        production: false, // Send Trace with BatchSpanProcessor (true) or SimpleSpanProcessor (false)
        serviceName: 'frontend', // Service name send in trace
        probabilitySampler: '1',
      },
      otelcolConfig: {
        url: 'http://127.0.0.1:4318/v1/traces', // URL of opentelemetry collector
      },
    }),
    //Insert OtelCol exporter module
    OtelColExporterModule,
    //Insert propagator module
    CompositePropagatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
