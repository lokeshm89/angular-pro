import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers=[1,3,5,7];
  evenNunmbers=[2,4,6,8];
  onlyOdd = false;
}
