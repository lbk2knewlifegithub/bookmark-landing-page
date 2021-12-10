import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ContactComponent,
  ExtensionListComponent,
  ExtensionPreviewComponent,
  FeaturePreviewComponent,
  FeaturesPreviewTabsComponent,
  IntroComponent,
  QuestionComponent,
  QuestionListComponent
} from './components';
import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [
  ContactComponent,
  ExtensionListComponent,
  ExtensionPreviewComponent,
  FeaturePreviewComponent,
  FeaturesPreviewTabsComponent,
  IntroComponent,
  QuestionListComponent,
  QuestionComponent,
];

const CONTAINERS = [HomePageComponent];

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  declarations: [CONTAINERS, COMPONENTS],
})
export class HomeModule {}
