import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit{

  @ContentChild(HeaderComponent) header!: HeaderComponent;

  ngAfterContentInit(): void {
    this.header.headerText = 'Hello Header';
  }

}
