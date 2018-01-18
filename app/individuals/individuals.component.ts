import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { People } from '../_models/index';
import { PeopleService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'individuals.component.html'
})

export class IndividualsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    people: People[] = [];


    constructor(private userService: UserService, private peopleService: PeopleService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllPeople();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = <any>users; });
    }

    private loadAllPeople() {
        this.peopleService.getAll().subscribe(people => { this.people = <any>people; });
    }

    filter() {
        var input, input2, input3, input4, input5, input6, input7, input8;
        var filter, filter2, filter3, filter4, filter5, filter6, filter7, filter8;
        var td, td2, td3, td4, td5, td6, td7, td8;
        var table, tr, i, j, isInSearch;
        var re = /<.*>(.*)<.*>/;
        input = <HTMLInputElement>document.getElementById("myInput");
        input2 = <HTMLInputElement>document.getElementById("myInput2");
        input3 = <HTMLInputElement>document.getElementById("myInput3");
        input4 = <HTMLInputElement>document.getElementById("myInput4");
        input5 = <HTMLInputElement>document.getElementById("myInput5");
        input6 = <HTMLInputElement>document.getElementById("myInput6");
        input7 = <HTMLInputElement>document.getElementById("myInput7");
        input8 = <HTMLInputElement>document.getElementById("myInput8");

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
            
            td =  tr[i].getElementsByTagName("td")[0]; 
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
                eigth.indexOf(filter8) > -1)
                  {
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

      }

}