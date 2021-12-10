import { Component, Input } from '@angular/core';
import { Question } from '../models';

@Component({
  selector: 'lbk-question',
  template: `
    <div class="pb-4 border-b-2 border-black/10 ">
      <!-- name -->
      <div
        (click)="open = !open"
        class="flex items-center justify-between hover:text-danger cursor-pointer"
      >
        <h2>{{ question.name }}</h2>

        <!-- arrow icon -->
        <div class="cursor-pointer">
          <img
            *ngIf="!open; else close"
            src="/assets/images/icon-arrow.svg"
            alt="Arrow"
          />

          <ng-template #close>
            <img
              class="rotate-180"
              src="/assets/images/icon-arrow-red.svg"
              alt="Arrow"
            />
          </ng-template>
        </div>
        <!-- end arrow icon -->
      </div>
      <!-- end name -->

      <!-- answer -->
      <div class="answer" [class.active]="open">
        <p class="text-muted font-medium">{{ question.answer }}</p>
      </div>
      <!-- end answer -->
    </div>
  `,
  styles: [
    `
      .answer {
        height: 0;
        opacity: 0;
        pointer-events: none;

        &.active {
          height: auto;
          opacity: 1;
          margin-top: 10px;
          pointer-events: auto;
        }
      }
    `,
  ],
})
export class QuestionComponent {
  @Input() question!: Question;
  open = false;
}
