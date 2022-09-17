/// <reference lib="webworker" />
import { buildInstruction } from './shared/instruc-generation/instruction-format-builder';
import { CacheBlock } from './shared/cache-block-interface';

// Local cache CPU1
const localCache = new Map<number, CacheBlock>()
localCache.set(0, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(1, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(2, {state: 'I', dir: 'xxx', data: '0x0000'})
localCache.set(3, {state: 'I', dir: 'xxx', data: '0x0000'})

// Handler to receive messages from main thread (Bus)
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log(response)
  for(let i=0; i<25; i++) {
    console.log(buildInstruction(1))
  }
});

sendActionToBus('mess from cpu1')

function sendActionToBus(mess: any){
  postMessage(mess)
}

