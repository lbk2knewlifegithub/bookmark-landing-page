import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="cover">
        <img [src]="feature.src" [alt]="feature.title" />
      </div>

      <!--    content-->
      <div class="content">
        <!--    title-->
        <h2>{{ feature.title }}</h2>
        <!--    end title-->

        <!--    description-->
        <p>{{ feature.description }}</p>
        <!--    end description-->
      </div>
      <!--    end content-->
    </section>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
}
