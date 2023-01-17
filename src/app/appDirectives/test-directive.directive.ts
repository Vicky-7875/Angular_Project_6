import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appTestDirective]",
})
export class TestDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "yellow");
  }

  changeBg(color: string) {
    // this.renderer.setStyle(this.el.nativeElement, "backgroundColor", color);
  }

  @HostBinding("style.backgroundColor") bgColor = "green";
  @HostBinding("style.color") color = "white";
  @HostBinding("class.myClass") className;
  @HostBinding("attr.title") myTitle;

  @HostListener("click") myClickD() {
    // alert("clicked");
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
    this.bgColor = "blue";
    this.className = true;
    this.myTitle="this is my title"
  }
  @HostListener("mouseover") myMouseOver() {
    // alert("clicked");
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','lightgray')
  }
  @HostListener("mouseout") myMouseOut() {
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')
    // alert("mouseOut");
  }
}
