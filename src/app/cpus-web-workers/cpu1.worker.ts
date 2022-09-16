/// <reference lib="webworker" />
import { generateRandomDir } from './shared/instruc-generation/random-dir-generator';
import { generateRandomInstruction } from './shared/instruc-generation/random-instruction-gen'

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log(response)
  const randomDirs = []
  for(let i=0; i<25; i++) {
    //console.log(generateRandomInstruction())
    randomDirs.push(generateRandomDir())
  }
  console.log(randomDirs)
  //postMessage(response);
});
