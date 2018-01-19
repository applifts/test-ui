import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { CompanyService } from '../_services/index';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../_models/people';
import { Company } from '../_models/company';


@Component({
    moduleId: module.id,
    templateUrl: 'companyProfile.component.html'
})

export class CompanyProfileComponent implements OnInit {
    company: Company;
    people: People[] = [];
    displayedCompany: number;
    private sub: any;

    constructor(private companyService:CompanyService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.displayedCompany = params['companyProfile'];
        });
        this.loadCompany(this.displayedCompany);
        console.log(this.displayedCompany);
    }

    private loadCompany(id: number){
        this.companyService.getById(id).subscribe(company => { this.company = <any>company; });
    }
}