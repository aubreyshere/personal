import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
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
