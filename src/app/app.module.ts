import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";

// RECOMMENDED
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from "./app.component";
import { MyContainerComponent } from "./myContainer/myContainer.component";
import { TopnavComponent } from "./myContainer/topnav/topnav.component";
import { HeaderComponent } from "./myContainer/header/header.component";
import { Txtsec1Component } from "./myContainer/txtsec1/txtsec1.component";
import { Txtsec2Component } from "./myContainer/txtsec2/txtsec2.component";
import { DatabindComponent } from "./databind/databind.component";
import { ClassStyleComponent } from "./databind/class-style/class-style.component";
import { EventBindComponent } from "./databind/event-bind/event-bind.component";
import { TwoWayBindComponent } from "./databind/two-way-bind/two-way-bind.component";
import { NgifComponent } from "./ngif/ngif.component";
import { NgswitchComponent } from "./ngswitch/ngswitch.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { HomeComponent } from "./routing/home/home.component";
import { AboutComponent } from "./routing/about/about.component";
import { ProductComponent } from "./routing/product/product.component";
import { ContactComponent } from "./routing/contact/contact.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./routing/login/login.component";
import { PageNotFoundComponent } from "./routing/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "product", component: ProductComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventBindComponent,
    TwoWayBindComponent,
    NgifComponent,
    NgswitchComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
