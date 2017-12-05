import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {

  loading = true;
  anon: boolean;
  user: User;
  formsVisible = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private setUser(user: User | null) {
    this.loading = false;
    this.user = user;
    this.anon = !user;
  }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });
  }

  login() {
    this.router.navigate(['/auth/login'])
  }

  signup() {
    this.router.navigate(['/auth/signup'])
  }

}
