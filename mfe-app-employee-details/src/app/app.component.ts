import { EmployeeService } from './services/employee-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  SingleSpaProps,
  singleSpaPropsSubject,
} from 'src/single-spa/single-spa-props';

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  employee: Employee | undefined;
  singleSpaProps: any;
  subscription: Subscription = new Subscription();
  employeeId: any;
  private termSub = Subscription.EMPTY;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log("helllllllllllllllo")
    this.subscription = singleSpaPropsSubject.subscribe(
      (props) => (this.singleSpaProps = props)
    );

    let sub =
      this.activatedRoute.queryParams
        .subscribe((queryParams: Params) => {
          debugger;
          if (queryParams['id']) {
            this.employeeId = queryParams['id'];
            this.getEmployeeDetails();
          }
        });

    this.router.events.subscribe((event: any) => {
      //debugger;
      if (event instanceof RoutesRecognized) {
        console.log(event?.state?.root?.firstChild?.params);
      }
      if (event && event.id) {
        //do something on start activity

      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getEmployeeDetails() {
    this.employeeService.getEmployeeDetails(this.employeeId).subscribe(result => {
      if (result && result.data) {
        this.employee = result.data;
      }
    })
  }
}