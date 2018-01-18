import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AddUserComponent } from './addUser/index';
import { CompanyComponent } from './company/index';
import { SearchComponent } from './search/index';
import { IndividualsComponent } from './individuals/index';
import { CompaniesComponent } from './companies/index';
import { ForgottenPasswordComponent } from './forgottenpassword/index';
import { IndividualProfileComponent } from './individualProfile/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'adduser', component: AddUserComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'search', component: SearchComponent },
    { path: 'individuals', component: IndividualsComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'forgottenpassword', component: ForgottenPasswordComponent },
    { path: 'individualProfile/:profile', component: IndividualProfileComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);