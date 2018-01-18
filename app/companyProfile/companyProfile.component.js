"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var router_1 = require("@angular/router");
var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(companyService, route, router) {
        this.companyService = companyService;
        this.route = route;
        this.router = router;
        this.people = [];
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.displayedCompany = params['companyProfile'];
        });
        this.loadCompany(this.displayedCompany);
        console.log(this.displayedCompany);
    };
    CompanyProfileComponent.prototype.loadCompany = function (id) {
        var _this = this;
        this.companyService.getById(id).subscribe(function (company) { _this.company = company; });
    };
    CompanyProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'companyProfile.component.html'
        }),
        __metadata("design:paramtypes", [index_1.CompanyService, router_1.ActivatedRoute, router_1.Router])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;
//# sourceMappingURL=companyProfile.component.js.map