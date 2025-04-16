

function gredCalculator (userMarks) {
    let gred ;
    if (userMarks >= 90) {
        gred = "A"
        
    }else if (userMarks >= 80){
         gred = "B"
    }
    else if (userMarks >= 70){
         gred = "C"
    }
    else if (userMarks >= 60){
         gred = "D"
    }
    else {
         gred = "F"
    }

    return gred
}

console.log(gredCalculator(63));
