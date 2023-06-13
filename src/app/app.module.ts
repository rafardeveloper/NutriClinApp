import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackAndExitNavbarComponent } from './back-and-exit-navbar/back-and-exit-navbar.component';
import { FormsModule } from '@angular/forms';
import { PacientIndexComponent } from './pacient-index/pacient-index.component';
import { MealTimeComponent } from './meal-time/meal-time.component';

@NgModule({
  declarations: [
    AppComponent,
    BackAndExitNavbarComponent,
    PacientIndexComponent,
    MealTimeComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
