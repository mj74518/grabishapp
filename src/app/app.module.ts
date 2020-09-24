import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ComponentsComponent } from './components/components.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { AdminComponent } from './admin/admin.component';
import * as $ from "jquery";
import { SidebarComponent } from './admin/sidebar/sidebar.component';

import { AdminHeaderComponent } from './admin/header/header.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageMoviesComponent } from './admin/manage-movies/manage-movies.component';
import { ManageTvshowsComponent } from './admin/manage-tvshows/manage-tvshows.component';
import { ManageGenreComponent } from './admin/manage-genre/manage-genre.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { ManageItemComponent } from './admin/manage-item/manage-item.component';
import { EditMovieComponent } from './admin/edit-movie/edit-movie.component';
import { EditShowComponent } from './admin/edit-show/edit-show.component';
import { UpdateItemComponent } from './admin/update-item/update-item.component';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { OrderModule } from 'ngx-order-pipe';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { AllShowsComponent } from './components/all-shows/all-shows.component';
import { HollywoodMoviesComponent } from './components/hollywood-movies/hollywood-movies.component';
import { BollywoodMoviesComponent } from './components/bollywood-movies/bollywood-movies.component';
import { OtherMoviesComponent } from './components/other-movies/other-movies.component';
import { MovieByGenreComponent } from './components/movie-by-genre/movie-by-genre.component';
import { ShowByGenreComponent } from './components/show-by-genre/show-by-genre.component';
import { ByYearComponent } from './components/by-year/by-year.component';
import { ByQualityComponent } from './components/by-quality/by-quality.component';
import { ByGenreComponent } from './components/by-genre/by-genre.component';
import { InternationalTvShowsComponent } from './components/international-tv-shows/international-tv-shows.component';
import { WebSeriesComponent } from './components/web-series/web-series.component';
import { OtherShowsComponent } from './components/other-shows/other-shows.component';
import { ShowDescriptionComponent } from './components/show-description/show-description.component';
import { PublicFeedbackComponent } from './admin/public-feedback/public-feedback.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    
    FooterComponent,
    HeaderComponent,
    ComponentsComponent,
    MovieDescriptionComponent,
    AdminComponent,
    SidebarComponent,

    AdminHeaderComponent,
    ManageUserComponent,
    DashboardComponent,
    ManageMoviesComponent,
    ManageTvshowsComponent,
    ManageGenreComponent,
    UserProfileComponent,
    ManageItemComponent,
    EditMovieComponent,
    EditShowComponent,
    UpdateItemComponent,
    
    AllMoviesComponent,
    AllShowsComponent,
    HollywoodMoviesComponent,
    BollywoodMoviesComponent,
    OtherMoviesComponent,
    MovieByGenreComponent,
    ShowByGenreComponent,
    ByYearComponent,
    ByQualityComponent,
    ByGenreComponent,
    InternationalTvShowsComponent,
    WebSeriesComponent,
    OtherShowsComponent,
    ShowDescriptionComponent,
    PublicFeedbackComponent,
    UserDetailsComponent,
    ChangePasswordComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    OrderModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }