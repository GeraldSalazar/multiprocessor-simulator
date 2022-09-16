import { generateRandomDataToWrite } from "./random-data-generator";
import { generateRandomDir } from "./random-dir-generator";
import { generateRandomOperation } from "./random-operation-gen";

enum Operations {
    calcOp = 'CALC',
    readOp = 'READ',
    writeOp = 'WRITE'
}

interface Instruction {
    cpuNum: number,
    op: string,
    dir?: string,
    data?: string
}
export function buildInstruction(cpuNum: number){
    //Instruction Format: {cpuNum: number, op: string, dir: string, data: string}
    //Example Instruction: {cpuNum: number = 1, op: string = 'WRITE', dir: string = '001', data: string = '0xABCD'}
    const operation = generateRandomOperation();
    let instruction: Instruction = {cpuNum, op: operation}
    
    const dir = generateRandomDir();
    const data = generateRandomDataToWrite();
    if(operation !== Operations.calcOp){
        instruction.dir = dir;
    }
    if(operation === Operations.writeOp){
        instruction.data = data
    }
    return instruction
}