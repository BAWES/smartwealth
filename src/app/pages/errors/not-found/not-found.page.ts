import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'page-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Open dashboard page
   */
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
}
