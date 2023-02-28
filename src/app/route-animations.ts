import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const routeFadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
