import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoissonDistributionService {

  constructor() { }

  poissonDistribution(lambda: number, kTimes: number){
    // Formula: (e^(-lambda)*lambda^kTimes)/kTimes!
    const denFact = this.factorial(kTimes);
    const eulerPow = Math.pow(Math.E,-lambda);
    const nomResult = eulerPow*Math.pow(lambda, kTimes)
    const k = Math.round(((nomResult/denFact) + Number.EPSILON) * 100) / 100
    console.log(k)
    return (nomResult/denFact).toFixed(5)
  }

  factorial(n: number): number{
    if(n <= 1) return 1
    return n*this.factorial(n-1)
  }
}
