import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
  docType: "FACTURA ELECTRÓNICA";
  cat1 = 0;
  @ViewChild('successModal') public successModal: ModalDirective;
  folio = this.randomInteger(11111,99999);
  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
