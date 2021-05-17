import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "recipe-app";
  loadedFeature = "recipe"; //by default show recipe page
  onNavigate(feature:string){

    this.loadedFeature = feature; //on navigation

  }
}
