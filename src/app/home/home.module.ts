import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ContactComponent,
  ExtensionsComponent,
  FeaturePreviewComponent,
  FeaturesPreviewTabsComponent,
  IntroComponent,
  QuestionListComponent
} from './components';
import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [
  ContactComponent,
  ExtensionsComponent,
  FeaturePreviewComponent,
  FeaturesPreviewTabsComponent,
  IntroComponent,
  QuestionListComponent,
];

const CONTAINERS = [HomePageComponent];

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [CONTAINERS, COMPONENTS],
})
export class HomeModule {}
