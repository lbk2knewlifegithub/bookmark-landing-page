import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-features',
  template: `
    <section>
      <h2>Features</h2>

      <p class="subtext">
        Our aim is to make it quick and easy for you to access you favorite
        websites. Your bookmars sync between your devices so you can access them
        on the go
      </p>

      <ul class="tabs">
        <ng-container *ngFor="let feature of features">
          <li (click)="current = feature" [class.active]="feature === current">
            <p>{{ feature.tab }}</p>
          </li>
        </ng-container>
      </ul>

      <!-- current feature selected -->

      <!-- end current feature selected -->
    </section>
  `,
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
