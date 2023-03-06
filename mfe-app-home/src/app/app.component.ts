import { Component, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';
import { getArabicDate } from '@mfe-utility'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mfe-app-home';
  arabicDate: any;

  // title = 'angular-app';
  mountRootParcel = mountRootParcel;
  parcelProps = { customProp1: 'Hello from parent angular app' };

  async config() {
    return (window as any).System.import('@mfe-parcel-react');
  }
  async ngconfig() {
    return (window as any).System.import('@mfe-parcel-react');
  }

  parcelMounted(): void {
    console.log('React parcel mounted');
  }
  ngparcelMounted(): void {
    console.log('Angular parcel mounted');
  }


  ngOnInit(): void {
    debugger;
    this.arabicDate = getArabicDate('2023/09/01');
  }
}
