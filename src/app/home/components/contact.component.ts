import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-contact',
  template: `
    <div id="contact">
      <div class="container flex-center-column">
        <!--  already joined-->
        <h3>35,000 + ALREADY JOINED</h3>
        <!--  end already joined-->

        <!--  title-->
        <h2>Stay up-to-date with what we're doing</h2>
        <!--  end title-->

        <!--    email form-->
        <form>
          <!--  email input-->
          <input placeholder="Enter you email addres" />
          <!--  end email input-->

          <!--  contact us link-->
          <a class="btn btn-danger" href="#">Contact Us</a>
          <!--  end contact us link-->
        </form>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {}
