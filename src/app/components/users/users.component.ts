import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "Johnny",
        lastName: "Franjo",
        age: 49,
        address: {
          street: "2 Blossom Park Drive",
          city: "Mill Park",
          state: "VIC"
        }
      },
      {
        firstName: "Vilma",
        lastName: "Franjo",
        age: 50,
        address: {
          street: "1/2 Blossom Park Drive",
          city: "Mill Park",
          state: "VIC"
        }
      },
      {
        firstName: "Game",
        lastName: "Freaks",
        age: 12,
        address: {
          street: "149 High Street",
          city: "Thomastown",
          state: "VIC"
        }
      }
    ];

    this.addUser({
      firstName: "David",
      lastName: "Jsckson",
      age: 25,
      address: {
        street: "143 High Street",
        city: "Thomastown",
        state: "VIC"
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
