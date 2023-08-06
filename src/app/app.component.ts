import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{

  @ViewChild('div', {static: true}) div!: ElementRef;

  ngOnInit(): void {
    // this.div.nativeElement.innerText = 'Hello from Div';
  }

  @ViewChild('header', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(HeaderComponent);
    // componentRef.instance.headerText = 'I am Header';
  }
}
