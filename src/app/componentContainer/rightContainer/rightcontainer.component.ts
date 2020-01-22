import { Component, OnInit } from "@angular/core";
import { expressionType } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-rightcontainer",
  templateUrl: "./rightcontainer.component.html",
  styleUrls: ["./rightcontainer.component.css"]
})
export class RightContainerComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  name: string = "right-container";
}
