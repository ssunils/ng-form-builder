import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormdndModule} from "./modules/formdnd/formdnd.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormdndModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
