import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { CalculetteComponent } from './components/calculette/CalculetteComponent';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { PersonneServiceTestComponent } from './components/personne-service-test/personne-service-test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainContainerComponent,
    CarouselComponent,
    CardsComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    DashboardComponent,
    UsersComponentComponent,
    AccueilComponentComponent,
    FormTestComponent,
    CalculetteComponent,
    FirstComponent,
    SecondComponent,
    PersonneServiceTestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
