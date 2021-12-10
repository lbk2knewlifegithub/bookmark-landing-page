import { Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: `
    <footer class="bg-footer text-inverted">
      <div
        class="container py-10 flex flex-col items-center gap-8 tablet:py-16 desktop:flex-row desktop:justify-between desktop:py-8"
      >
        <div
          class="flex flex-col gap-10 items-center desktop:flex-row desktop:gap-20"
        >
          <!--      logo-->
          <a href="#">
            <img
              class="logo"
              src="/assets/images/logo-bookmark-footer.svg"
              alt="Logo"
            />
          </a>
          <!--      end logo-->

          <!--      links-->
          <ul
            class="flex flex-col gap-4 text-center text-muted tracking-wider font-semibold desktop:flex-row desktop:gap-8"
          >
            <li><a class="hover:text-danger" href="#">FEATURES</a></li>
            <li><a class="hover:text-danger" href="#">PRICING</a></li>
            <li><a class="hover:text-danger" href="#">CONTACT</a></li>
          </ul>
          <!--      end links-->
        </div>

        <!-- socials -->
        <div class="grid place-items-center desktop:place-items-end">
          <ul class="flex gap-10 text-3xl text-white">
            <li>
              <a class="hover:text-danger" href="#"><span class="fab fa-facebook-square"></span></a>
            </li>
            <li>
              <a class="hover:text-danger" href="#"><span class="fab fa-twitter"></span></a>
            </li>
          </ul>
          <!-- end socials -->

          <p class="text-xs text-center py-4">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              >Frontend Mentor</a
            >. Coded by
            <a
              class="text-primary underline"
              href="https://github.com/lbk2knewlifegithub"
              >lbk2knewlifegithub</a
            >.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
