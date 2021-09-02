// Code your solution in this file!
const returnFirstTwoDrivers = function (arrDrivers) {
    let copyArrDrivers;
    return copyArrDrivers = arrDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function (arrDrivers) {
    let copyArrDrivers;
    return copyArrDrivers = arrDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    function multiplier(fare){
        return fare*5
    }
    multiplier(fare);
    return multiplier;
}

const fareDoubler = function (doubledFare) {
    return doubledFare*2;
}

const fareTripler = function (TripledFare) {
    return TripledFare*3;
}

function selectDifferentDrivers(drivers, FirstOrLastDrivers) {
    return FirstOrLastDrivers(drivers);
}