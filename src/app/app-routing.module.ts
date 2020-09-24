import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsComponent } from './components/components.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ManageGenreComponent } from './admin/manage-genre/manage-genre.component';
import { ManageMoviesComponent } from './admin/manage-movies/manage-movies.component';
import { ManageTvshowsComponent } from './admin/manage-tvshows/manage-tvshows.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { ManageItemComponent } from './admin/manage-item/manage-item.component';
import { EditMovieComponent } from './admin/edit-movie/edit-movie.component';
import { EditShowComponent } from './admin/edit-show/edit-show.component';
import { UpdateItemComponent } from './admin/update-item/update-item.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { AllShowsComponent } from './components/all-shows/all-shows.component';
import { HollywoodMoviesComponent } from './components/hollywood-movies/hollywood-movies.component';
import { BollywoodMoviesComponent } from './components/bollywood-movies/bollywood-movies.component';
import { OtherMoviesComponent } from './components/other-movies/other-movies.component';
import { MovieByGenreComponent } from './components/movie-by-genre/movie-by-genre.component';
import { ShowByGenreComponent } from './components/show-by-genre/show-by-genre.component';
import { ByGenreComponent } from './components/by-genre/by-genre.component';
import { InternationalTvShowsComponent } from './components/international-tv-shows/international-tv-shows.component';
import { WebSeriesComponent } from './components/web-series/web-series.component';
import { OtherShowsComponent } from './components/other-shows/other-shows.component';
import { ByQualityComponent } from './components/by-quality/by-quality.component';
import { ByYearComponent } from './components/by-year/by-year.component';
import { ShowDescriptionComponent } from './components/show-description/show-description.component';
import { PublicFeedbackComponent } from './admin/public-feedback/public-feedback.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';


const routes: Routes = [
  //{path:'',redirectTo:'/user/sign-in',pathMatch:'full'},
  {path:'',redirectTo:'/index', pathMatch:'full'},
  {path:'index', component:ComponentsComponent},

  {path:'movie-description/:id', component:MovieDescriptionComponent},
  {path:'show-description/:id', component:ShowDescriptionComponent},
  
  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },

  {path:'all-movies', component:AllMoviesComponent},
  {path:'all-movies/Hollywood-Movies', component:HollywoodMoviesComponent},
  {path:'all-movies/Bollywood-Movies', component:BollywoodMoviesComponent},
  {path:'all-movies/Other-Movies', component:OtherMoviesComponent},
  {path:'all-shows', component:AllShowsComponent},
  {path:'all-shows/International-Tv-Shows', component:InternationalTvShowsComponent},
  {path:'all-shows/Web-Series', component:WebSeriesComponent},
  {path:'all-shows/Other-Shows', component:OtherShowsComponent},

  {path:'by-genre/:genre', component:ByGenreComponent},
  {path:'movie-by-genre/:genre', component:MovieByGenreComponent},
  {path:'show-by-genre/:genre', component:ShowByGenreComponent},

  {path:'by-quality/:quality', component:ByQualityComponent},
  {path:'by-year/:year', component:ByYearComponent},
  
  {path:'admin', component:AdminComponent},
  {path:'admin/dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/user-profile', component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'admin/change-password', component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:'admin/manage-user', component:ManageUserComponent,canActivate:[AuthGuard]},
  {path:'admin/user-details/:uname', component:UserDetailsComponent,canActivate:[AuthGuard]},
  {path:'admin/manage-genre', component:ManageGenreComponent,canActivate:[AuthGuard]},
  {path:'admin/manage-item', component:ManageItemComponent,canActivate:[AuthGuard]},

  {path:'admin/manage-movies', component:ManageMoviesComponent,canActivate:[AuthGuard]},
  {path:'admin/manage-tvshows', component:ManageTvshowsComponent,canActivate:[AuthGuard]},

  {path:'admin/update-item/:id', component:UpdateItemComponent,canActivate:[AuthGuard]},
  {path:'admin/edit-movie/:id', component:EditMovieComponent,canActivate:[AuthGuard]},
  {path:'admin/edit-show/:id', component:EditShowComponent,canActivate:[AuthGuard]},
  {path:'admin/public-feedback', component:PublicFeedbackComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
