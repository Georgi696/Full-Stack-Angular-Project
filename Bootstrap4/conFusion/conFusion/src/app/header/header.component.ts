import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location, public logForm: MatDialog) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back()
  }

  openLoginForm(){
    this.logForm.open(LoginComponent, {width:'500px',height:"450px"});
  }

}
