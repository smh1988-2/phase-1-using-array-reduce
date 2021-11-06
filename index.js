const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries
// Code your solution here

function batteries(arr) {
    return totalBatteries = arr.reduce(function(accumulator, element){ return accumulator += element})
}
batteries(batteryBatches);
console.log(batteries(batteryBatches));
console.log(totalBatteries)