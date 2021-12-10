import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'lbk-question-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container grid gap-10 place-items-center max-w-3xl tablet:gap-16 desktop:mt-20">
      <!-- text -->
      <div class="text-center space-y-4 max-w-xl">
        <h2 class="text-2xl font-bold tablet:text-3xl">Frequently Asked Questions</h2>

        <p class="text-muted font-medium">
          Here are some of our FAQs. If you have any other question you'd like
          answered please feel free to email us.
        </p>
      </div>
      <!-- end text -->

      <!--  list questions-->
      <div class="space-y-4">
        <ng-container
          *ngFor="let question of questions; trackBy:identifyQuestion"
        >
          <lbk-question class="block" [question]="question"></lbk-question>
        </ng-container>
      </div>
      <!--  end list questions-->

      <!--  more info-->
      <div>
        <a href="#" class="btn btn-primary">More info</a>
      </div>
      <!--  end more info-->
    </section>
  `,
})
export class QuestionListComponent {
  @Input('questions') questions!: Question[];

  identifyQuestion(index: number, question: Question) {
    return question.name;
  }
}
