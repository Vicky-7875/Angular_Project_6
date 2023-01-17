import { OnDestroy } from "@angular/core";
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
} from "@angular/core";
// import { DesignUtilityService } from "../../../appServices/design-utility.service";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.css"],
})
export class Comp1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // userName;
  // constructor(private _designService: DesignUtilityService) {
  //   this._designService.userName.subscribe((uname) => {
  //     this.userName = uname;
  //   });
  // }

  // ngOnInit() {}

  // updateUsername(unmae) {
  //   // this.userName = unmae.value;
  //   this._designService.userName.next(unmae.value);
  // }

  constructor() {
    console.log("constructor");
  }

  @Input() myValue = "sagar";
  counter;
  num: number = 1;
  ngOnInit() {
    console.log("ngOnInit");
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    // console.log("currentValue", changes.myValue.currentValue);
    // console.log("previousValue", changes.myValue.previousValue);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    clearInterval(this.counter)
  }
}
