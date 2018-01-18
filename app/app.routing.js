"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var index_5 = require("./addUser/index");
var index_6 = require("./company/index");
var index_7 = require("./search/index");
var index_8 = require("./individuals/index");
var index_9 = require("./companies/index");
var index_10 = require("./forgottenpassword/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'adduser', component: index_5.AddUserComponent },
    { path: 'company', component: index_6.CompanyComponent },
    { path: 'search', component: index_7.SearchComponent },
    { path: 'individuals', component: index_8.IndividualsComponent },
    { path: 'companies', component: index_9.CompaniesComponent },
    { path: 'forgottenpassword', component: index_10.ForgottenPasswordComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map