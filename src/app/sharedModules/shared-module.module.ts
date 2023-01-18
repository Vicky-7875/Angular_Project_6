import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutoHideDirective } from "../appDirectives/auto-hide.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [AutoHideDirective],
  exports: [AutoHideDirective],
})
export class SharedModuleModule {}
