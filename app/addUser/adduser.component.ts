import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, PeopleService, CompanyService } from '../_services/index';
import { Company } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'adduser.component.html'
})

export class AddUserComponent {
    model: any = {};
    loading = false;
    companies: Company[] = [];

    constructor(
        private router: Router,
        private alertService: AlertService,
        private peopleService: PeopleService,
        private companyService: CompanyService) { }

    ngOnInit() {
        this.loadAllCompanies();
    }

    private loadAllCompanies() {
        this.companyService.getAll().subscribe(companies => { this.companies = <any>companies; });
    }

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
