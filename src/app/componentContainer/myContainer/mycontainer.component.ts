import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mycontainer",
  templateUrl: "./mycontainer.component.html",
  styleUrls: ["./mycontainer.component.css"]
})
export class MyContainer implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = "My Container";
}
