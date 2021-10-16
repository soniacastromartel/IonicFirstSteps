import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecondPagePage } from '../second-page/second-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}
  secondPage() {
    this.route.navigate(['second-page']);
  }

}
