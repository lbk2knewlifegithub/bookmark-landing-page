import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'lbk-question-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="questions" class="flex-center-column">
      <!--  title-->
      <h2>Frequently Asked Questions</h2>
      <!--  end title-->

      <!--  description-->
      <p>
        Here are some of our FAQs. If you have any other question you'd like
        answered please feel free to email us.
      </p>
      <!--  end description-->

      <!--  list questions-->
      <!-- <lbk-expand-group [expands]="questions"></lbk-expand-group> -->
      <!--  end list questions-->

      <!--  more info-->
      <a href="#" class="btn btn-primary">More info</a>
      <!--  end more info-->
    </div>
  `,
})
export class QuestionListComponent {
  @Input('questions') questions!: Question[];
}
