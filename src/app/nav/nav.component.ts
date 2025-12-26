import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-nav',
    imports: [
        MatIconModule,
        MatSidenavModule,
        MatListModule,
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})

export class NavComponent {

  async scroll(id:string): Promise<void> {
      const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
      });
    }
    }

  async openResume(): Promise<void> {
    window.open('assets/pdfs/resume.pdf', '_blank');
  }
}
