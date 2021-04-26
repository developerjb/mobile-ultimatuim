import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { RouterModule } from "@angular/router";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "../services/config.service";

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    // RouterModule.forRoot([
    //   { path: '', component: LoginComponent },
    //   { path: 'detail', component: DetailComponent },
    // ])
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigService
  ]
})
export class AppModule {}
