import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="hero">
      <div class="cover">
        <img src="/assets/images/illustration-hero.svg" alt="Hero" />
      </div>

      <section class="content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websistes. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <!--    actions-->
        <ul class="actions">
          <li>
            <a class="btn btn-primary" href="#">Get it on Chrome</a>
          </li>
          <li>
            <a class="btn btn-basic" href="#">Get it on Firefox</a>
          </li>
        </ul>
        <!--    end actions-->
      </section>
    </div>
  `,
})
export class IntroComponent {}
