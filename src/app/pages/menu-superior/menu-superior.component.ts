import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(public service:DataService) { }

  ngOnInit() {
  }
  
  toggleMenuOption(opt: number) {
    this.service.toggleMenuOption(opt);
  }
}
