import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  notAllowedNames = ["vivek", "vivek tondare"];
  formStatus;
  genders = [
    { id: 1, gender: "Male" },
    { id: 1, gender: "Female" },
  ];

  constructor() {}

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      userDetail: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.notAllowNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.naEmails
        ),
      }),
      course: new FormControl("Angular"),
      gender: new FormControl("Male"),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
      ]),
    });
    //valueChanges//every change detations
    // this.myReactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    //statusChange //chcck status of control valid invalid status
    this.myReactiveForm.statusChanges.subscribe((status) => {
      // console.log(status);
      this.formStatus = status;
    });

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        userDetail: {
          email: "cxxz@cxc",
        },
      });
    }, 4000);
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     userDetail: {
    //       username: "xzcxz",
    //       email: "cxxz@cxc",
    //     },
    //     course: "Angular",
    //     gender: "Male",
    //     skills: ["kite"],
    //   });
    // }, 4000);
  }
  onSubmit() {
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      userDetail: {
        username: "",
        email: "",
      },
      course: "Angular",
      gender: "Male",
      skills: [""],
    });
  }

  onAddSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get("skills")).push(control);
  }

  //custom validator
  notAllowNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) > -1) {
      return { nameIsNotAllowed: true };
    }
    return null;
  }

  naEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "vivek@gmail.com") {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return myResponse;
  }
}
