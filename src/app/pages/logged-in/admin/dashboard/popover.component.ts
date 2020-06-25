import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  template: `<div class="ion-padding">
            <ion-list>
              <ion-item button>
                <ion-label>
                  عربي
                </ion-label>
                <ion-icon slot="start" name="globe-outline"></ion-icon>
              </ion-item>
              <ion-item button lines="none">
                <ion-label>
                  Logout
                </ion-label>
                <ion-icon slot="start" name="power-outline"></ion-icon>
              </ion-item>
            </ion-list>
        </div>
  `,
})
export class PopoverComponent {

  constructor() { }
}
