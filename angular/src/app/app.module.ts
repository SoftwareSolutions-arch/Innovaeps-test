// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import {
  MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule,
  MatMenuModule, MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule,
  MatCardModule, MatPaginatorModule, MatTooltipModule,MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavbarComponent,
    AddnewuserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule,
    MatMenuModule, MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule,
    MatCardModule, MatPaginatorModule, MatTooltipModule,MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
