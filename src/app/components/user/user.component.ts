import { Component, OnInit } from "@angular/core";
import { stripGeneratedFileSuffix } from "@angular/compiler/src/aot/util";
import { User } from "../../models/User";

@Component({
  selector: "app-user",
  //template: '<h2>John Doe</h2>'
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  //Properties

  user: User;

  //Methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "Johnny",
      lastName: "Franjo",
      age: 50,
      address: {
        street: "2 Blossom Park Drive",
        city: "Mill Park",
        state: "VIC"
      }
    };
  }
}
