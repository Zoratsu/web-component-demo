import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @Input({alias: 'email', required: true}) set emailSet(email: string) {
    this._email.set(email);
  };

  private _email = signal<string>('');
  email = this._email.asReadonly();

  @Input({alias: 'phone', required: true}) set phoneSet(phone: string) {
    this._phone.set(phone);
  };

  private _phone = signal<string>('');
  phone = this._phone.asReadonly();

  @Output() validate = new EventEmitter<boolean>();

  validateOTP() {
    this.validate.emit(true);
    console.log(
      'Should have emitted true on "validate"',
      {
        email: this.email(),
        phone: this.phone()
      }
    );
    this.validate.emit(false);
    console.log(
      'Should have emitted false on "validate"'
    );

  }
}
