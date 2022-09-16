import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  cpu1!: Worker;
  cpu2!: Worker;
  cpu3!: Worker;
  cpu4!: Worker;

  constructor() {

  }

  startCPUs(){
    if (typeof Worker !== 'undefined') {
      // Initialize Workers
      this.cpu1 = new Worker(new URL('../cpus-web-workers/cpu1.worker', import.meta.url));
      this.cpu2 = new Worker(new URL('../cpus-web-workers/cpu2.worker', import.meta.url));
      //this.cpu3 = new Worker(new URL('../cpus-web-workers/cpu3.worker', import.meta.url));
      //this.cpu4 = new Worker(new URL('../cpus-web-workers/cpu4.worker', import.meta.url));

      this.cpu1.postMessage('hello');

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
