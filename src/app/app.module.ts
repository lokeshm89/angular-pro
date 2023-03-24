import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {BetterHighlightDirective} from "./directives/better-highlight/better-highlight.directive";
import {BasicHighlightDirective} from "./directives/basic-highlight/basic-highlight.directive";
import {HighlightDirective} from "./directives/basic-highlight/highlight.directive";
import {ObservableComponent} from "./observables/observable.component";
import {DirectivesComponent} from "./directives/directives.component";
import {RouterModule, Routes} from "@angular/router";
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule} from "@angular/forms";
import { HttpComponent } from './http/http.component';
import {LoggingInterceptorService} from "./http/logging-interceptor.service";
import {AuthInterceptorService} from "./http/auth-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
//import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
const appRoute :Routes =[
  {path : 'directives' ,component : DirectivesComponent},
  {path : 'observable' ,component : ObservableComponent},
  {path : 'template-form' ,component : TemplateFormComponent},
  {path : 'server' ,component : HttpComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    HighlightDirective,
    ObservableComponent,
    DirectivesComponent,
    TemplateFormComponent,
    HttpComponent,
    //ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoggingInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
