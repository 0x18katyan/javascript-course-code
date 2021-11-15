const markMassList = [78, 95];
const markHeightList = [1.69, 1.88];
const johnMassList = [92, 85];
const johnHeightList = [1.95, 1.76];

function calcBMI(mass, height) {
    return mass / height ** 2
}

for (let i = 0; i < 2; i++) {

    markBMI = calcBMI(markMassList[i], markHeightList[i]);
    johnBMI = calcBMI(johnMassList[i], johnHeightList[i]);

    markHigherBMI = markBMI > johnBMI;

    if (markHigherBMI) {
        console.log("Mark's BMI is higher than John's.")
    } else {
        console.log("John's BMI is higher than Mark's.")
    }
}
