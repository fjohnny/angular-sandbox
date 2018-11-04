import { Component } from "@angular/core";
import { stripGeneratedFileSuffix } from "@angular/compiler/src/aot/util";

@Component({
  selector: "app-user",
  //template: '<h2>John Doe</h2>'
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  //Methods
  constructor() {
    this.firstName = "Johnny";
    this.lastName = "Franjo";
    this.age = 50;
    this.address = {
      street: "149 High Street";
      city: "Thomastown";
      state: "VIC";
    }

    this.foo = true;
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ["hello", "world"];
    this.mixedArray = [true, undefined, null, "hello", 22];
    this.myTuple = ["hello", 2, true];
    this.unusable = undefined;
    this.n = null;
    this.u = undefined;

    console.log("Helo user ...");
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);

    console.log(this.addNUmbers(2, 4));
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  addNUmbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
