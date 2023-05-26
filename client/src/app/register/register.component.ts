import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // @Input() usersFromHomeController: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService) { }

  register() {
    console.log(this.model);
    this.accountService.regiser(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    })
  }
  cancel() {
    this.cancelRegister.emit(false);
    // console.log("cancelled");
  }
}
