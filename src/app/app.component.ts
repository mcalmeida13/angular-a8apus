import { Component } from "@angular/core";

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // 1. store the original function in a varible
  const original = descriptor.value;
  // 2. do some manipulations with descriptor.value
  descriptor.value = function() {
    console.log("This function was hacked!");
  };
  // 3. retrun the descriptor
  return descriptor;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: "app";

  constructor() {
    this.aSimpleMethod();
  }

  @log
  aSimpleMethod() {
    console.log("Hey there");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
