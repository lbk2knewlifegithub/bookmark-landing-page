import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lbk-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  form = new FormGroup({
    email: this.email,
  });

  onSubmit(event: Event) {
    event.preventDefault();

    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    alert('Thank for submitted!');
  }
}
