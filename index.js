//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0,2);
const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return fare => integer * fare
    }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast) {
    return firstOrLast(drivers);
}