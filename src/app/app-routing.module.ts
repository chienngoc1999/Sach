import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SachnoiComponent} from './sachnoi/sachnoi.component';
import {PnfoundComponent} from './pnfound/pnfound.component';
import {SachchuComponent} from './sachchu/sachchu.component';
import {ReviewsachComponent} from './reviewsach/reviewsach.component';
import {SukiensachComponent} from './sukiensach/sukiensach.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FooterComponent} from './footer/footer.component';
import {TaikhoanComponent} from './taikhoan/taikhoan.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sunch', component: SachchuComponent},
  {path: 'reviewsach', component: ReviewsachComponent},
  {path: 'sukiensach', component: SukiensachComponent},
  {path: 'suck', component: SachnoiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'taikhoan', component: TaikhoanComponent},
  {path: '**', component: PnfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
