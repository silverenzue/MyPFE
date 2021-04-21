import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openfirst(){
    document.getElementById("imchange1")!.style.display = "block";
    document.getElementById("imchange2")!.style.display = "none";
    document.getElementById("imchange3")!.style.display = "none";
  }

  opensecond(){
    document.getElementById("imchange1")!.style.display = "none";
    document.getElementById("imchange2")!.style.display = "block";
    document.getElementById("imchange3")!.style.display = "none";
  }

  openthirth(){
    document.getElementById("imchange1")!.style.display = "none";
    document.getElementById("imchange2")!.style.display = "none";
    document.getElementById("imchange3")!.style.display = "block";
  }

}
