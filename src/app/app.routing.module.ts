import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { ParentComponent } from "./parent/parent.component";
import { AboutComponent } from "./routing/about/about.component";
import { ContactComponent } from "./routing/contact/contact.component";
import { HomeComponent } from "./routing/home/home.component";
import { LoginComponent } from "./routing/login/login.component";
// import { PageNotFoundComponent } from "./routing/page-not-found/page-not-found.component";
// import { CameraComponent } from "./routing/product/camera/camera.component";
// import { HeadphoneComponent } from "./routing/product/headphone/headphone.component";
// import { ProductComponent } from "./routing/product/product.component";
// import { ShoeComponent } from "./routing/product/shoe/shoe.component";
// import { WatchComponent } from "./routing/product/watch/watch.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "buy-products", component: ParentComponent },
  { path: "forms", component: FormsComponent },
  //product route was here
  { path: "contact", component: ContactComponent },
//   { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
