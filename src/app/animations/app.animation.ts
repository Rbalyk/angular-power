import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
  return trigger('visibility', [
    state('shown', style({
      opacity: 1
    })),
    state('hidden', style({
      opacity: 0
    })),
    transition('* => *', animate('0.5s ease-in-out'))
  ]);
}
