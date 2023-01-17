import { hostViewClassName } from "@angular/compiler";
import { createHostListener } from "@angular/compiler/src/core";
import { ViewChild } from "@angular/core";
import { AfterViewInit } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Component, OnInit, HostListener } from "@angular/core";
import { DesignUtilityService } from "../../appServices/design-utility.service";
import { Comp2Component } from "./comp2/comp2.component";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  userName = "vivek";
  @ViewChild("box") box: ElementRef; //AfterViewInit
  @ViewChild(Comp2Component) child: Comp2Component; //AfterViewInit

  constructor(
    private _designService: DesignUtilityService,
    private renderer: Renderer2
  ) {
    // this._designService.userName.subscribe((uname) => {
    //   this.userName = uname;
    // });
  }
  // @HostListener("click") myClick() {
  //   alert("clicked");
  // }

  // statusOnline: boolean = true;
  // items = [
  //   {
  //     name: "laptop",
  //   },
  //   {
  //     name: "dfdfsd",
  //   },
  //   {
  //     name: "sdfsdf",
  //   },
  //   {
  //     name: "dsfdsf",
  //   },
  // ];

  ngAfterViewInit() {
    // console.log(this.box);
    // this.renderer.setStyle(this.box.nativeElement, "backgroundColor", "green");
    // this.renderer.setStyle(this.box.nativeElement, "color", "white");
    // this.renderer.addClass(this.box.nativeElement, "w-100");
    // this.renderer.addClass(this.box.nativeElement, "text-center");
    // this.renderer.setAttribute(
    //   this.box.nativeElement,
    //   "title",
    //   "this is test title"
    // );

    // this.box.nativeElement.style.backgroundColor = "blue";
    // this.box.nativeElement.style.color = "white";
    // this.box.nativeElement.classList = "boxBlue";
    // this.box.nativeElement.innerHTML = "<h1>Inner HTML</h1>";

    console.log(this.child);
  }
  @HostListener("window:scroll", ['$event']) myScroll() {
    console.log("my scrolling");
  }
  ngOnInit() {
    // var num = 1;
    // $(window).scroll(function () {
    //   console.log("window scorppling");
    // });
  }

  Changechildproperty() {
    this.child.userName = "vivektondare";
  }
  callchildmethod() {
    this.child.clickme();
  }
}
