import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Extension } from '../models/extension.model';

@Component({
  selector: 'lbk-extension-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Download the extension</h2>
      <p>
        We've got more browsers in the pipleline. Please do let us know if
        you've got a favourite you'd like us to prioritize.
      </p>

      <!--  list extensions-->
      <ul>
        <ng-container
          *ngFor="
            let extension of extensions;
            trackBy: identifyExtension;
            let i = index
          "
        >
          <li [style]="top(i)">
            <img class="bg" src="/assets/images/bg-dots.svg" alt="Background" />
            <img [src]="extension.src" [alt]="extension.name" />
            <h3>Add to {{ extension.name }}</h3>
            <p>Minimum version {{ extension.version }}</p>

            <a class="btn btn-primary" href="#">Add & Install Extension</a>
          </li>
        </ng-container>
      </ul>
      <!--  end list extensions-->
    </section>
  `,
})
export class ExtensionsComponent {
  @Input('extensions') extensions!: Extension[];

  identifyExtension(index: number, extension: Extension) {
    return extension.name;
  }

  top(index: number): string {
    return `top: ${index * 40}px`;
  }
}
