import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'forgottenpassword.component.html'
})

export class ForgottenPasswordComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit() { }

    
    submit() {
        this.loading = true;
        this.alertService.success('Password Reset Sent', true);
        this.router.navigate(['/login']);
                }
            }
        
