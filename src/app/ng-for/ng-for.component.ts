import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"],
})
export class NgForComponent implements OnInit {
  productItems = [
    {
      name: "Asdadsds Futterkiste",
      age: 42,
      city: "asdsad",
      imges:
        "https://images.unsplash.com/photo-1668241514687-f3bd64afaf95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    },
    {
      name: "sdsadsadkiste",
      age: 324,
      city: "sadsad",
      imges:
        "https://images.unsplash.com/photo-1668248937634-1f71f1bd82e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
    },
    {
      name: "Alsadssdkiste",
      age: 123,
      city: "sadsasadsad",
      imges:
        "https://images.unsplash.com/photo-1668241784357-72c3c700f186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Asdssadasdsaste",
      age: 13,
      city: "Gersadassadsadmany",
      imges:
        "https://images.unsplash.com/photo-1668069109703-bab425dfa031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      name: "Alsadsadsaiste",
      age: 23,
      city: "sdsd",
      imges:
        "https://images.unsplash.com/photo-1668209883212-16720b474495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    },
    {
      name: "Asdasdkiste",
      age: 22131,
      city: "asddsa",
      imges:
        "https://images.unsplash.com/photo-1668244166169-ab1d167ae313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Alsdadsaiste",
      age: 21,
      city: "Gersamany",
      imges:
        "https://images.unsplash.com/photo-1668201620393-14780f75c0d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    //   <tr>
    //   <td>Alfreds Futterkiste</td>
    //   <td>Maria Anders</td>
    //   <td>Germany</td>
    // </tr>
    // <tr>
    //   <td>Centro comercial Moctezuma</td>
    //   <td>Francisco Chang</td>
    //   <td>Mexico</td>
    // </tr>
    // <tr>
    //   <td>Ernst Handel</td>
    //   <td>Roland Mendel</td>
    //   <td>Austria</td>
    // </tr>
    // <tr>
    //   <td>Island Trading</td>
    //   <td>Helen Bennett</td>
    //   <td>UK</td>
    // </tr>
    // <tr>
    //   <td>Laughing Bacchus Winecellars</td>
    //   <td>Yoshi Tannamuri</td>
    //   <td>Canada</td>
    // </tr>
    // <tr>
    //   <td>Magazzini Alimentari Riuniti</td>
    //   <td>Giovanni Rovelli</td>
    //   <td>Italy</td>
    // </tr>
  ];

  users = [];
  constructor() {}

  getUserName(uname) {
    this.users.push({ name: uname.value });
    uname.value = "";
  }
  deleteUserName() {
    this.users.splice(this.users.length - 1);
  }
  ondeleteUserName(item) {
    this.users.splice(item, 1);
  }

  ngOnInit() {}
}
