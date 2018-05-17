import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userName: string;
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user.email;
  }
}
