import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromData from '../data';
import { Extension, Feature, Question } from '../models';

@Component({
  selector: 'lbk-home-page',
  template: `
    <main>
      <lbk-intro></lbk-intro>

      <lbk-features [features]="(features$ | async)!"></lbk-features>

      <lbk-extension-list
        [extensions]="(extensions$ | async)!"
      ></lbk-extension-list>

      <lbk-question-list
        [questions]="(questions$ | async)!"
      ></lbk-question-list>

      <lbk-contact></lbk-contact>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  features$: Observable<Feature[]> = of(fromData.features);
  extensions$: Observable<Extension[]> = of(fromData.extensions);
  questions$: Observable<Question[]> = of(fromData.questions);
}
