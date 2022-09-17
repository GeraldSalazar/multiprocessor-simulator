import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BusService {

  cpu1: Worker = new Worker(new URL('../cpus-web-workers/cpu1.worker', import.meta.url));
  cpu2: Worker = new Worker(new URL('../cpus-web-workers/cpu2.worker', import.meta.url));
  cpu3!: Worker;
  cpu4!: Worker;
  cpus: Worker[] = [this.cpu1, this.cpu2];

  constructor() {

  }

  startCPUs(){
    if (typeof Worker !== 'undefined') {
      // Initialize Workers
      //this.cpu1 = new Worker(new URL('../cpus-web-workers/cpu1.worker', import.meta.url));
      //this.cpu2 = new Worker(new URL('../cpus-web-workers/cpu2.worker', import.meta.url));
      //this.cpu3 = new Worker(new URL('../cpus-web-workers/cpu3.worker', import.meta.url));
      //this.cpu4 = new Worker(new URL('../cpus-web-workers/cpu4.worker', import.meta.url));

      //this.cpu1.postMessage('hello');
      // worker.onmessage = ({ data }) => {
      //   console.log(`page got message: ${data}`);
      // };

    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  postActionToCPUs(message: any){
    this.cpus.forEach((cpu) => {
      cpu.postMessage(message);
    });
  }

  setChannelToWorkers(){
    this.cpus.forEach((cpu) => {
      cpu.onmessage = ({ data }) => {
        console.log(data)
        this.postActionToCPUs(data)
      }
    })
  }

  // todo: DEFINE DATA OBJECT INTERFACE
  // cpuNum from the instruc ranges from 1 to 4, 
  // so just substracts 1 to find the correct cpu to send the data
  sendInfoToSpecificCPU(cpuNum: number, data: any){
    this.cpus[cpuNum - 1].postMessage(data);
  }

}



//Local cache is in each worker
//Generate each instruction according to the probability distribution
//Check if instruction operation is READ, if so:
//- Check if block dir is present in local cache, if so:
//    - if block state is S, E, or M:
//        - fetch the data value
//    - if block state is I:
//        - send action to bus
//        - check the other caches, if block dir is present:
//            - change block state to S, get back data from bus (from the E state cache) and update local cache block data
//        - if block dir is not present in other caches:
//            - change block state to E, get back data from main memory and update block data from local cache
//- if block is not present:
//    - send action to bus
//    - check the other caches, if block dir is present:
//        - change block state to S, get back data from bus (from the E state cache) and update local cache block data
//    - if block dir is not present in other caches:
//        - change block state to E, get back data from main memory and update block data from local cache
