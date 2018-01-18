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
var index_2 = require("../_services/index");
var IndividualsComponent = /** @class */ (function () {
    function IndividualsComponent(userService, peopleService) {
        this.userService = userService;
        this.peopleService = peopleService;
        this.users = [];
        this.people = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.loadAllPeople();
    };
    IndividualsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    IndividualsComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    IndividualsComponent.prototype.loadAllPeople = function () {
        var _this = this;
        this.peopleService.getAll().subscribe(function (people) { _this.people = people; });
    };
    IndividualsComponent.prototype.filter = function () {
        var input, input2, input3, input4, input5, input6, input7, input8;
        var filter, filter2, filter3, filter4, filter5, filter6, filter7, filter8;
        var td, td2, td3, td4, td5, td6, td7, td8;
        var table, tr, i, j, isInSearch;
        var re = /<.*>(.*)<.*>/;
        input = document.getElementById("myInput");
        input2 = document.getElementById("myInput2");
        input3 = document.getElementById("myInput3");
        input4 = document.getElementById("myInput4");
        input5 = document.getElementById("myInput5");
        input6 = document.getElementById("myInput6");
        input7 = document.getElementById("myInput7");
        input8 = document.getElementById("myInput8");
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase();
        filter3 = input3.value.toUpperCase();
        filter4 = input4.value.toUpperCase();
        filter5 = input5.value.toUpperCase();
        filter6 = input6.value.toUpperCase();
        filter7 = input7.value.toUpperCase();
        filter8 = input8.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            isInSearch = false;
            td = tr[i].getElementsByTagName("td")[0];
            td2 = tr[i].getElementsByTagName("td")[1];
            td3 = tr[i].getElementsByTagName("td")[2];
            td4 = tr[i].getElementsByTagName("td")[3];
            td5 = tr[i].getElementsByTagName("td")[4];
            td6 = tr[i].getElementsByTagName("td")[5];
            td7 = tr[i].getElementsByTagName("td")[6];
            td8 = tr[i].getElementsByTagName("td")[7];
            if (td) {
                var first = td.innerHTML.toUpperCase().replace(re, "$1");
                var second = td2.innerHTML.toUpperCase().replace(re, "$1");
                var third = td3.innerHTML.toUpperCase().replace(re, "$1");
                var fourth = td4.innerHTML.toUpperCase().replace(re, "$1");
                var fifth = td5.innerHTML.toUpperCase().replace(re, "$1");
                var sixth = td6.innerHTML.toUpperCase().replace(re, "$1");
                var seventh = td7.innerHTML.toUpperCase().replace(re, "$1");
                var eigth = td8.innerHTML.toUpperCase().replace(re, "$1");
                console.log(sixth);
                if (first.indexOf(filter) > -1 &&
                    second.indexOf(filter2) > -1 &&
                    third.indexOf(filter3) > -1 &&
                    fourth.indexOf(filter4) > -1 &&
                    fifth.indexOf(filter5) > -1 &&
                    sixth.indexOf(filter6) > -1 &&
                    seventh.indexOf(filter7) > -1 &&
                    eigth.indexOf(filter8) > -1) {
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
    IndividualsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'individuals.component.html'
        }),
        __metadata("design:paramtypes", [index_1.UserService, index_2.PeopleService])
    ], IndividualsComponent);
    return IndividualsComponent;
}());
exports.IndividualsComponent = IndividualsComponent;
//# sourceMappingURL=individuals.component.js.map