/// <reference lib="webworker" />
import { buildInstruction } from './shared/instruc-generation/instruction-format-builder';
import { CacheBlock } from './shared/cache-block-interface';

// Local cache CPU1
const localCache = new Map<number, CacheBlock>()
localCache.set(0, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(1, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(2, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(3, {state: 'I', dir: 'xxx', data: '0x0000'})

// Global cpu identifier
const cpuNum = 1

// Handler to receive messages from main thread (Bus)
addEventListener('message', ({ data }) => {
  const response = `cpu1 got message:`;
  console.log(response, data)
  if(data.rate){
    startGeneratingInstructions(data.rate)
  }
});

// instruction generator interval
let instructInterval: number;

function startGeneratingInstructions(rate: number){
  instructInterval = self.setInterval(() => {
    const newInstruc = buildInstruction(cpuNum)
    console.log('cpuNum: '+cpuNum+' Generate the instruction: ', newInstruc)
  }, rate)
}

function stopGeneratingInstructions(){
  clearInterval(instructInterval)
}

// setInterval(() => {
//   const instrucGenerated = buildInstruction(1)
//   sendActionToBus(instrucGenerated)
// }, 2000)

//sendActionToBus('mess from cpu1')

function sendActionToBus(mess: any){
  postMessage(mess)
}

