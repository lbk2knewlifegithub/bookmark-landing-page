import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Extension } from '../models/extension.model';

@Component({
  selector: 'lbk-extension-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container grid place-items-center">
      <div class="text-center space-y-3 max-w-xl">
        <h2 class="text-2xl font-bold tablet:text-3xl">
          Download the extension
        </h2>
        <p class="text-muted">
          We've got more browsers in the pipleline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <!--  list extensions-->

      <div class="relative mt-14 grid gap-10 desktop:grid-cols-3">
        <ng-container
          *ngFor="
            let extension of extensions;
            trackBy: identifyExtension;
            let i = index
          "
        >
          <lbk-extension-preview
            [style]="top$(i) | async"
            class="relative "
            [extension]="extension"
          ></lbk-extension-preview>
        </ng-container>
      </div>
      <!--  end list extensions-->
    </section>
  `,
})
export class ExtensionListComponent {
  @Input('extensions') extensions!: Extension[];

  constructor(private readonly _breakPoint: BreakpointObserver) {}

  identifyExtension(index: number, extension: Extension) {
    return extension.name;
  }

  top$(index: number): Observable<string> {
    // if (this._breakPoint.isMatched('(max-width:1280px)')) return 'top:0px';
    // return `top: ${index * 80}px`;

    return this._breakPoint
      .observe('(max-width:1280px)')
      .pipe(
        map((result) => (!result.matches ? `top: ${index * 80}px` : 'top:0px'))
      );
  }
}
