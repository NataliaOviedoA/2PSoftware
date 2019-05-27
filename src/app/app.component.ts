import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi app con angular';
  constructor(private swUpdate:SwUpdate){

  }
  ngOnInit(): void {
    if (this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        window.location.reload();
      });
    }
  }
}
