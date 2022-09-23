import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suivie-mesure',
  templateUrl: './suivie-mesure.component.html',
  styleUrls: ['./suivie-mesure.component.scss']
})
export class SuivieMesureComponent implements OnInit {
  @Input() tabclickedMesuration: boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
