import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoorsComponent } from './doors/doors.component';
import { DoorDetailComponent } from './door-detail/door-detail.component';
import { DoorCreateComponent } from './door-create/door-create.component';
import { DoorEditComponent } from './door-edit/door-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'doors',
    component: DoorsComponent,
    canActivate: [AuthGuard],
    data: { title: 'Doors List' }
  },
  {
    path: 'door-details/:id',
    component: DoorDetailComponent,
    canActivate: [AuthGuard],
    data: { title: 'Door Details' }
  },
  {
    path: 'door-create',
    component: DoorCreateComponent,
    canActivate: [AuthGuard],
    data: { title: 'Create Door' }
  },
  {
    path: 'door-edit/:id',
    component: DoorEditComponent,
    canActivate: [AuthGuard],
    data: { title: 'Edit Door' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoorsComponent,
    DoorDetailComponent,
    DoorCreateComponent,
    DoorEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot([
    //   { path: "", component: HomeComponent},
    //   { path: "door", component: DoorsComponent}
    // ])
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
