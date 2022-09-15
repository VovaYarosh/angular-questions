import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public searchValue: string = '';
  public technology: string = 'angular'

  chooseTech(tech: string) {
    this.technology = tech
    console.log(this.technology)
  }
}
