import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-features',
  template: `
    <section class="container grid place-items-center text-center">
      <div class="space-y-4 max-w-3xl">
        <h2 class="font-bold text-2xl tablet:text-3xl desktop:text-4xl">
          Features
        </h2>

        <p class="text-muted">
          Our aim is to make it quick and easy for you to access you favorite
          websites. Your bookmars sync between your devices so you can access
          them on the go
        </p>
      </div>

      <!-- tabs -->
      <ul class="tabs mt-10 w-full">
        <ng-container *ngFor="let feature of features">
          <li (click)="current = feature" [class.active]="feature === current">
            <p>{{ feature.tab }}</p>
          </li>
        </ng-container>
      </ul>
      <!-- end tabs -->
    </section>

    <!-- current feature selected -->
    <div class="mt-14 tablet:mt-28 desktop:mt-20">
      <lbk-feature-preview [feature]="current"></lbk-feature-preview>
    </div>
    <!-- end current feature selected -->
  `,
  styles: [
    `
      .tabs {
        @apply flex flex-col
        desktop:flex-row desktop:gap-20 desktop:justify-center desktop:border-b desktop:border-black/20 desktop:max-w-2xl;

        li {
          @apply first:border-t-2 last:border-b-2 border-t-2 border-black/10 py-6 cursor-pointer
          desktop:border-none
          hover:text-danger;

          &.active {
            @apply pb-0;

            p {
              @apply pb-6 border-b-4 border-danger inline-block font-semibold;
            }
          }
        }
      }
    `,
  ],
})
export class FeaturesPreviewTabsComponent implements OnInit {
  @Input() features!: Feature[];
  current!: Feature;

  ngOnInit(): void {
    this.current = this.features[0];
  }

  get tabs(): string[] {
    return this.features.map((f) => f.tab);
  }
}
