function solve(excursionPrice, numberOfPuzzels, numberOfTalkingDolls, numberBear, numberMinion, numberTruck) {
    let puzzle = 2.60;
    let talkingDoll = 3;
    let bear = 4.10;
    let minion = 8.20;
    let truck = 2;
    let amount = numberOfPuzzels * puzzle + numberOfTalkingDolls * talkingDoll + numberBear * bear + numberMinion * minion + numberTruck * truck;

    let toysPrice = numberOfPuzzels + numberOfTalkingDolls + numberBear + numberMinion + numberTruck;

    let discountToys = null;
    if (toysPrice > 50) {
        discountToys = amount * 0.25

    }

    let finalPrice = amount - discountToys;

    let rent = finalPrice * 0.10;

    let profit = finalPrice - rent;
    if(profit > excursionPrice){
        console.log(`Yes! ${profit - excursionPrice} lv left.`);
    }else{
        console.log(`Not enough money! ${excursionPrice-profit.toFixed(0)} lv needed.`);
    }


}
solve(320, 8, 2,5,5,1);