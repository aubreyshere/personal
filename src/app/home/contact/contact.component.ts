import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})

export class ContactComponent {
  
  /** Store the current state of visibility for the copy email text. */
  showMessage = false;

  /** Copies email to the users clipboard. If failed, send a message to the console. */
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
