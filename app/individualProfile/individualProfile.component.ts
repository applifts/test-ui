import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { PeopleService } from '../_services/index';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../_models/people';


@Component({
    moduleId: module.id,
    templateUrl: 'individualProfile.component.html'
})

export class IndividualProfileComponent implements OnInit {
    person: People
    people: People[] = [];
    displayedUser: number;
    private sub: any;

    constructor(private peopleService:PeopleService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.displayedUser = params['profile'];
        });
        this.loadUser(this.displayedUser);
    }

    private loadUser(id: number){
        this.peopleService.getById(id).subscribe(person => { this.person = <any>person; });
    }
}