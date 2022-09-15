import { Component, OnInit } from '@angular/core';
import { PoissonDistributionService } from '../services/poisson-distribution.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private poisson: PoissonDistributionService) { }

  ngOnInit(): void {
    console.log(this.poisson.poissonDistribution(3, 5))
  }

}
