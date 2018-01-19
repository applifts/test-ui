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
var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(companyService) {
        this.companyService = companyService;
        this.companies = [];
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.loadAllCompanies();
    };
    CompaniesComponent.prototype.loadAllCompanies = function () {
        var _this = this;
        this.companyService.getAll().subscribe(function (companies) { _this.companies = companies; });
    };
    CompaniesComponent.prototype.filter = function () {
        var input, input2, input3, input4;
        var filter, filter2, filter3, filter4;
        var td, td2, td3, td4;
        var table, tr, i, j, isInSearch;
        var re = /<.*>(.*)<.*>/;
        input = document.getElementById("myInput");
        input2 = document.getElementById("myInput2");
        input3 = document.getElementById("myInput3");
        input4 = document.getElementById("myInput4");
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase();
        filter3 = input3.value.toUpperCase();
        filter4 = input4.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            isInSearch = false;
            td = tr[i].getElementsByTagName("td")[0];
            td2 = tr[i].getElementsByTagName("td")[1];
            td3 = tr[i].getElementsByTagName("td")[2];
            td4 = tr[i].getElementsByTagName("td")[3];
            if (td) {
                var first = td.innerHTML.toUpperCase().replace(re, "$1");
                var second = td2.innerHTML.toUpperCase().replace(re, "$1");
                var third = td3.innerHTML.toUpperCase().replace(re, "$1");
                var fourth = td4.innerHTML.toUpperCase().replace(re, "$1");
                var firstRegex = new RegExp("^" + filter);
                var secondRegex = new RegExp("^" + filter2);
                var thirdRegex = new RegExp("^" + filter3);
                var fourthRegex = new RegExp("^" + filter4);
                if (first.search(firstRegex) > -1 &&
                    second.search(secondRegex) > -1 &&
                    third.search(thirdRegex) > -1 &&
                    fourth.search(fourthRegex) > -1) {
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
    CompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'companies.component.html'
        }),
        __metadata("design:paramtypes", [index_1.CompanyService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map