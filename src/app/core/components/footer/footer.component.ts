import { Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: `
    <footer>
      <div class="container flex-center-column">
        <!--      logo-->
        <img class="logo" src="/assets/images/logo-bookmark.svg" alt="Logo" />
        <!--      end logo-->

        <!--      links-->
        <ul class="links">
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <!--      end links-->

        <!--    socials-->
        <ul class="socials flex-center-row">
          <li>
            <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
          </li>
          <li>
            <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
          </li>
        </ul>
        <!--    end socials-->
      </div>

      <p class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/lbk2knewlifegithub">lbk2knewlifegithub</a>.
      </p>
    </footer>
  `,
})
export class FooterComponent {}
