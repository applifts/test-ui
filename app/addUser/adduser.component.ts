import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, PeopleService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'adduser.component.html'
})

export class AddUserComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private peopleService: PeopleService) { }

    submit() {
        this.loading = true;
        this.peopleService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Individual added', true);
                    this.router.navigate(['/home']);
                },
                error => {
                    //this.alertService.error(error);
                    //this.alertService.error(error._body);
                    this.alertService.error(error.message);
                    this.loading = false;
                });
    }
}
