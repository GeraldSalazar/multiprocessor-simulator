import { probabilityMassFunction } from "src/app/cpus-web-workers/shared/instruc-generation/poisson/probability-mass-function";

export function generateRandomInstruction(){
    // initially generate one instruction at a time
    const mean = 15;
    const randomPoissonNum = probabilityMassFunction(mean, getRandom(25))
    //console.log(randomPoissonNum)
    return randomPoissonNum
}

function getRandom(max: number) {
    const rand = Math.floor(Math.random() * max);
    return rand
}