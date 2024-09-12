function calculateTax( income, expenses){
    if (typeof income !== "number" || typeof expenses  !== "number" || income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    let profit = income - expenses;
    let tax = profit * .20;
    return tax;
}
// Question no-2

function sendNotification(email) {
    const index = email.indexOf('@');
    if (index === -1  ) {
     return "Invalid Email "
    }
    const devide = email.split('@');
    const userName = devide[0];
    const domainName = devide[1];
    return `${userName} sent you an email from ${domainName}`;
 }
 // Question no-3

function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return 'Invalid Input';
    }
    for (let i of name){
        if(!isNaN(i)){
            return true;
        }
    }
    return false;
}
// Question no-4

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' ){
     return "Invalid Input";
    }
    const {name , testScore, schoolGrade, isFFamily} = obj;
    if(typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean'){
     return 'Invalid Input';
    }
    let finalScore = testScore + schoolGrade;
    if(isFFamily){
     finalScore = finalScore + 20;
    }
    return finalScore >= 80;
 }

// Question no-5
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
