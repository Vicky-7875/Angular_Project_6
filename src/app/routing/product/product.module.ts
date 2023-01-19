import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //acccess directive from feature module
import { CameraComponent } from "./camera/camera.component";
import { HeadphoneComponent } from "./headphone/headphone.component";
import { ShoeComponent } from "./shoe/shoe.component";
import { WatchComponent } from "./watch/watch.component";
import { ProductComponent } from "./product.component";
import { RouterModule, Routes } from "@angular/router";
// import { AutoHideDirective } from "src/app/appDirectives/auto-hide.directive";
import { SharedModuleModule } from "src/app/sharedModules/shared-module.module";
const proRoutes: Routes = [
  {
    // path: "product", //lazy loading
    path: "",
    component: ProductComponent,
    children: [
      // { path: "", component: ProductComponent },
      { path: "watch", component: WatchComponent },
      { path: "headphone", component: HeadphoneComponent },
      { path: "camera", component: CameraComponent },
      { path: "shoe", component: ShoeComponent },
    ],
  },
];
@NgModule({
  declarations: [
    ProductComponent,
    WatchComponent,
    HeadphoneComponent,
    CameraComponent,
    ShoeComponent,
    // AutoHideDirective
  ],
  imports: [CommonModule, RouterModule.forChild(proRoutes), SharedModuleModule],
})
export class ProductModule {
  constructor() {
    console.log("product module");
  }
}
