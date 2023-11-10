import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(-1)" class="btn btn-outline-success mx-2">
      -
    </button>
    <button (click)="resetCounter()" class="btn btn-outline-danger">
      Reset
    </button>
    <button (click)="increaseBy(+1)" class="btn btn-outline-success mx-2">
      +
    </button> `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
