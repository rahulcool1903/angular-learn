import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leftcontainer",
  templateUrl: "./leftcontainer.component.html",
  styleUrls: ["./leftcontainer.component.css"]
})
export class LeftContainerComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  name: string = "leftContainer";
}
