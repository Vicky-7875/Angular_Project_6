import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //for template driven form
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

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
// import { ProductComponent } from "./routing/product/product.component";
import { ContactComponent } from "./routing/contact/contact.component";
// import { RouterModule } from "@angular/router";
import { LoginComponent } from "./routing/login/login.component";
import { PageNotFoundComponent } from "./routing/page-not-found/page-not-found.component";
// import { WatchComponent } from "./routing/product/watch/watch.component";
// import { HeadphoneComponent } from "./routing/product/headphone/headphone.component";
// import { CameraComponent } from "./routing/product/camera/camera.component";
// import { ShoeComponent } from "./routing/product/shoe/shoe.component";
import { CommonCardComponent } from "./common-card/common-card.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./parent/child/child.component";
import { ServiceComponentComponent } from "./service-component/service-component.component";
import { Card1Component } from "./service-component/card1/card1.component";
import { Card2Component } from "./service-component/card2/card2.component";
import { DesignUtilityService } from "./appServices/design-utility.service";
import { Comp1Component } from "./routing/home/comp1/comp1.component";
import { Comp2Component } from "./routing/home/comp2/comp2.component";
import { Comp3Component } from "./routing/home/comp3/comp3.component";
import { Comp4Component } from "./routing/home/comp4/comp4.component";
import { TestDirectiveDirective } from "./appDirectives/test-directive.directive";
import { VtPipe } from "./appPipes/vt.pipe";
import { FilterPipe } from "./appPipes/filter.pipe";
import { FormsComponent } from "./forms/forms.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form/template-driven-form.component";
import { AppRoutingModule } from "./app.routing.module";
import { ProductModule } from "./routing/product/product.module";
import { AutoHideDirective } from "./appDirectives/auto-hide.directive";
import { SharedModuleModule } from "./sharedModules/shared-module.module";


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
    
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,

    CommonCardComponent,
    ParentComponent,
    ChildComponent,
    ServiceComponentComponent,
    Card1Component,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestDirectiveDirective,
    VtPipe,
    FilterPipe,
    FormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    // AutoHideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule, //for template driven form
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
