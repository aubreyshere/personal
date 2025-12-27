import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {

  /** 
   * Send the user's screen to align with specified component.
   * 
   * @param {string} id - the clicked on element's id.
   */
  async scroll(id:string): Promise<void> {
      const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
      });
    }
  }

  /** Opens document in a new window for the user. */
  async openResume(): Promise<void> {
    window.open('assets/pdfs/resume.pdf', '_blank');
  }
}
