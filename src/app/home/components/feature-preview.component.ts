import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models';

@Component({
  selector: 'lbk-feature-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative container-large overflow-hidden grid place-items-center px-8 gap-28 tablet:gap-32 desktop:grid-cols-2 desktop:gap-10 desktop:pr-[80px] desktop:place-items-start desktop:pb-20"
    >
      <div class="relative">
        <img
          class="w-full max-h-[350px]"
          [src]="feature.src"
          [alt]="feature.title"
        />
        <!-- box pattern -->
        <div
          class="z-[-1] absolute top-[30%] right-[20%] bg-primary w-[200%] h-[85%] rounded-r-full desktop:top-[30%]"
        ></div>
        <!-- end box pattern -->
      </div>

      <!--    content-->
      <div class="text-center  max-w-xl desktop:text-left desktop:mt-10">
        <div class="space-y-3">
          <!--    title-->
          <h2 class="font-bold text-2xl desktop:text-3xl">
            {{ feature.title }}
          </h2>
          <!--    end title-->

          <!--    description-->
          <p class="text-muted">{{ feature.description }}</p>
          <!--    end description-->
        </div>

        <div class="hidden mt-10 desktop:block ">
          <a class="btn btn-primary" href="#">More Info</a>
        </div>
      </div>
      <!--    end content-->
    </section>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
}
