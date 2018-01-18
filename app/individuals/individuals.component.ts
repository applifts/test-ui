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
        var input, input2, input3, filter, filter2, filter3, table, tr, td, td2, td3, i, j, isInSearch, start;
        var re = /<.*>(.*)<.*>/;
        input = <HTMLInputElement>document.getElementById("myInput");
        
        input2 = <HTMLInputElement>document.getElementById("myInput2");
        input3 = <HTMLInputElement>document.getElementById("myInput3");
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase();
        filter3 = input3.value.toUpperCase();
        
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          
            isInSearch = false;
            
            td =  tr[i].getElementsByTagName("td")[1]; 
            td2 = tr[i].getElementsByTagName("td")[2];
            td3 = tr[i].getElementsByTagName("td")[3];
            if (td) {
                var first = td.innerHTML.toUpperCase().replace(re, "$1");
                var second = td2.innerHTML.toUpperCase().replace(re, "$1");
                var third = td3.innerHTML.toUpperCase().replace(re, "$1");
            
                if (first.indexOf(filter) > -1 && second.indexOf(filter2) > -1 && third.indexOf(filter3) > -1) {
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