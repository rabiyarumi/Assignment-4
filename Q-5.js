function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    let total = 0;
    for (let i = 0; i < waitingTimes.length; i++){
        total = total + waitingTimes[i];
    }
    let average = total / waitingTimes.length;
    const averageTime = Math.round(average);
    const peopleAhead = serialNumber - 1;
    const interviewDone = waitingTimes.length;
    const peopleWaiting = peopleAhead - interviewDone;

    let waitingTime;
    if (peopleWaiting > 0){
        waitingTime = peopleWaiting * averageTime;
    }
    else{
        waitingTime = 0
    }
    return waitingTime;

}

const timeRemaining = waitingTime([3, 5, 7, 11, 6], 10);
console.log(timeRemaining);
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
