import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardTitle: string = 'Minimalist Casual Shoe - Levitation Experiment';
  cardDescription: string = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolore rerum debitis 
  expedita voluptatum omnis deleniti nihil suscipit animi quibusdam?`;

}
