import { Component, OnInit } from '@angular/core';

import { Company } from '../_models/index';
import { CompanyService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'companies.component.html'
})

export class CompaniesComponent implements OnInit {
    companies: Company[] = [];


    constructor(private companyService: CompanyService) {
    
    }

    ngOnInit() {
        this.loadAllCompanies();
    }

    private loadAllCompanies() {
        this.companyService.getAll().subscribe(companies => { this.companies = <any>companies; });
    }

    filter() {
        var input, input2, input3, input4;
        var filter, filter2, filter3, filter4;
        var td, td2, td3, td4;
        var table, tr, i, j, isInSearch;
        var re = /<.*>(.*)<.*>/;
        input = <HTMLInputElement>document.getElementById("myInput");
        input2 = <HTMLInputElement>document.getElementById("myInput2");
        input3 = <HTMLInputElement>document.getElementById("myInput3");
        input4 = <HTMLInputElement>document.getElementById("myInput4");

        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase();
        filter3 = input3.value.toUpperCase();
        filter4 = input4.value.toUpperCase();

        
    
        
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          
            isInSearch = false;
            
            td =  tr[i].getElementsByTagName("td")[0]; 
            td2 = tr[i].getElementsByTagName("td")[1];
            td3 = tr[i].getElementsByTagName("td")[2];
            td4 = tr[i].getElementsByTagName("td")[3];
        
            if (td) {
                var first = td.innerHTML.toUpperCase().replace(re, "$1");
                var second = td2.innerHTML.toUpperCase().replace(re, "$1");
                var third = td3.innerHTML.toUpperCase().replace(re, "$1");
                var fourth = td4.innerHTML.toUpperCase().replace(re, "$1");

                var firstRegex = new RegExp("^" + filter);
                var secondRegex = new RegExp("^" + filter2);
                var thirdRegex = new RegExp("^" + filter3);
                var fourthRegex = new RegExp("^" + filter4);
            
                
                if (first.search(firstRegex) > -1 && 
                second.search(secondRegex) > -1 && 
                third.search(thirdRegex) > -1 && 
                fourth.search(fourthRegex) > -1 )
                  {
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