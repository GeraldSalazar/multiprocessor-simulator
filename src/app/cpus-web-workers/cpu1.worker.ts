/// <reference lib="webworker" />
import { buildInstruction } from './shared/instruc-generation/instruction-format-builder';

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log(response)
  for(let i=0; i<25; i++) {
    console.log(buildInstruction(1))
    
  }
  //postMessage(response);
});
