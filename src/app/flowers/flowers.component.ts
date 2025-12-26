import { Component, signal, Signal } from '@angular/core';

export interface flower {
  image: string,
}

@Component({
    selector: 'app-flowers',
    imports: [],
    templateUrl: './flowers.component.html',
    styleUrl: './flowers.component.scss'
})
export class FlowersComponent {
  
  flowers: Signal<flower[]> = signal([{
    image: 'assets/flower-images/flower0.png',
  }
]);
}
