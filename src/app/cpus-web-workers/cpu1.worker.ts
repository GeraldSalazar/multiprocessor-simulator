/// <reference lib="webworker" />
import { generateRandomDir } from './shared/instruc-generation/random-dir-generator';
import { generateRandomOperation } from './shared/instruc-generation/random-operation-gen'

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log(response)
  const randomDirs = []
  const randomOperations = []
  for(let i=0; i<25; i++) {
    //console.log(generateRandomInstruction())
    randomDirs.push(generateRandomDir())
    randomOperations.push(generateRandomOperation())
  }
  console.log(randomDirs)
  console.log(randomOperations)
  //postMessage(response);
});
