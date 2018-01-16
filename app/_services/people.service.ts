import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { People } from '../_models/index';

@Injectable()
export class PeopleService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    create(people: People) {
        return this.http.post(this.config.apiUrl + '/people', people);
    }
}