import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: any;
  constructor() { }

  ngOnInit(): void {
    // this.getUser();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // getUser() {
  //   this.http.get('https://localhost:5001/api/users').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error),
  //     complete: () => console.log('Request has completed once again')
  //   })
  // }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
