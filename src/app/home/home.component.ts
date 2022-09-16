import { Component, OnInit } from '@angular/core';
import { BusService } from '../services/bus.service';
import { probabilityMassFunction } from '../cpus-web-workers/shared/instruc-generation/poisson/probability-mass-function';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bus: BusService) { }

  ngOnInit(): void {
    this.bus.startCPUs()
  }



}
