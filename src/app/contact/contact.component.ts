import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})

export class ContactComponent {
  showMessage = false;
  async copyEmail(): Promise<void> {
    try {
      const email = 'aubreyh715@email.com'; 
      await navigator.clipboard.writeText(email);
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 5000); 
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  }
}
