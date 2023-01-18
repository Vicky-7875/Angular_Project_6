import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appAutoHideDirective]",
})
export class AutoHideDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding("class.active") className;
  @HostListener("click") myClickV() {
    this.className = !this.className;
  }
}
