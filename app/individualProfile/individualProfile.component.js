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
var IndividualProfileComponent = /** @class */ (function () {
    function IndividualProfileComponent(peopleService, route, router) {
        this.peopleService = peopleService;
        this.route = route;
        this.router = router;
        this.people = [];
    }
    IndividualProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.displayedUser = params['profile'];
        });
        this.loadUser(this.displayedUser);
    };
    IndividualProfileComponent.prototype.loadUser = function (id) {
        var _this = this;
        this.peopleService.getById(id).subscribe(function (person) { _this.person = person; });
    };
    IndividualProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'individualProfile.component.html'
        }),
        __metadata("design:paramtypes", [index_1.PeopleService, router_1.ActivatedRoute, router_1.Router])
    ], IndividualProfileComponent);
    return IndividualProfileComponent;
}());
exports.IndividualProfileComponent = IndividualProfileComponent;
//# sourceMappingURL=individualProfile.component.js.map