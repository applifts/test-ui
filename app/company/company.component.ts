import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, PeopleService, CompanyService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'company.component.html'
})

export class CompanyComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private companyService: CompanyService) { }

    submit() {
        this.loading = true;
        this.companyService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Company added', true);
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
