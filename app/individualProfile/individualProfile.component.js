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
    function IndividualProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    IndividualProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.sub = this.route.params.subscribe(function (params) {
            _this.displayedUser = params['profile'];
        });
    };
    IndividualProfileComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    IndividualProfileComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    IndividualProfileComponent.prototype.filter = function () {
        var input, input2, filter, filter2, table, tr, td, td2, i, j, isInSearch;
        input = document.getElementById("myInput");
        input2 = document.getElementById("myInput2");
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            isInSearch = false;
            /* for (j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        isInSearch = true;
                      }
                }
            }
            if (isInSearch) {
                tr[i].style.display = "";
            }
            else if (td) {
                tr[i].style.display = "none";
            } */
            td = tr[i].getElementsByTagName("td")[2];
            td2 = tr[i].getElementsByTagName("td")[3];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1 && td2.innerHTML.toUpperCase().indexOf(filter2) > -1) {
                    isInSearch = true;
                }
            }
            if (isInSearch) {
                tr[i].style.display = "";
            }
            else if (td) {
                tr[i].style.display = "none";
            }
        }
    };
    IndividualProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    IndividualProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'individualProfile.component.html'
        }),
        __metadata("design:paramtypes", [index_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], IndividualProfileComponent);
    return IndividualProfileComponent;
}());
exports.IndividualProfileComponent = IndividualProfileComponent;
//# sourceMappingURL=individualProfile.component.js.map