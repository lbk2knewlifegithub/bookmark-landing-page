import { Component, Input } from '@angular/core';
import { Extension } from '../models';

@Component({
  selector: 'lbk-extension-preview',
  template: `
    <section class="pt-20 px-6 pb-6 shadow-lg grid place-items-center place-content-center gap-6 rounded-lg overflow-hidden">
      <!-- image -->
      <div>
        <img [src]="extension.src" [alt]="extension.name" />
      </div>
      <!-- end image -->

      <div class="text-center">
        <h3 class="text-lg font-bold">Add to {{ extension.name }}</h3>
        <p class="text-muted">Minimum version {{ extension.version }}</p>
      </div>

      <div class="w-[140%]">
        <img class="w-full" src="/assets/images/bg-dots.svg" alt="Dots" />
      </div>

      <div class="w-full">
        <a class="btn btn-primary w-full" href="#">Add & Install Extension</a>
      </div>
    </section>
  `,
})
export class ExtensionPreviewComponent {
  @Input() extension!: Extension;
}
