import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, PeopleService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html'
})

export class SearchComponent { 
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private peopleService: PeopleService) { }
}