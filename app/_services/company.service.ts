import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { Company } from '../_models/index';

@Injectable()
export class CompanyService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    create(company: Company) {
        return this.http.post(this.config.apiUrl + '/company', company);
    }
}