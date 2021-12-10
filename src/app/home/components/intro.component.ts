import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="container-large grid gap-16 mt-10 place-items-center tablet:gap-28 desktop:grid-cols-2 desktop:gap-0 desktop:!pl-[80px]"
    >
      <div class="relative desktop:order-last">
        <img
          class="w-full max-h-[450px]"
          src="/assets/images/illustration-hero.svg"
          alt="Hero"
        />

        <!-- box pattern -->
        <div
          class="z-[-1] absolute top-[20%] left-[20%] bg-primary w-[200%] h-[85%] rounded-l-full"
        ></div>
        <!-- end box pattern -->
      </div>

      <!-- text -->
      <div
        class="grid gap-6 text-center place-items-center max-w-xl tablet:gap-10 desktop:place-items-start desktop:text-left"
      >
        <div class="px-8 desktop:px-0">
          <h1 class="text-3xl font-black  tablet:text-4xl desktop:text-5xl">
            A Simple Bookmark Manager
          </h1>

          <p class="text-muted font-medium text-sm tablet:text-base mt-4 desktop:mt-6">
            A clean and simple interface to organize your favorite websistes.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>

        <!-- buttons -->
        <ul class="flex gap-4 tablet:gap-10">
          <li>
            <a class="btn btn-primary" href="#">Get it on Chrome</a>
          </li>
          <li>
            <a class="btn btn-basic" href="#">Get it on Firefox</a>
          </li>
        </ul>
        <!-- end buttons -->
      </div>
      <!-- text -->
    </section>
  `,
})
export class IntroComponent {}
