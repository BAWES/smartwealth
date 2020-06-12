import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'page-server-error',
  templateUrl: './server-error.page.html',
  styleUrls: ['./server-error.page.scss'],
})
export class ServerErrorPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  /**
   * Open dashboard
   */
  dashboard() {
    this.router.navigate(['/dashboard']);
  }
}
