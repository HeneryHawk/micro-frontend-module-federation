import {AfterViewInit, Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, AfterViewInit {

  constructor() { }

  public ngOnInit(): void {
    console.log("!!!! ngOnInit called !!!!");
  }

  public ngAfterViewInit(): void {
    console.log("!!!! ngAfterViewInit called !!!!");
  }

}
