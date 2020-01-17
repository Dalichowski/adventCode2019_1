//ADVENT CODE 2019 DAY_1//

//This is my code for day1 of AdventCode 2019

{/*--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?*/}
//MY CODE

//GIFTS MODULES 
const allModules = [
    118602,
    60644,
    136064,
    134771,
    62530,
    129043,
    120233,
    126092,
    112839,
    86210,
    132501,
    75894,
    109369,
    83641,
    92700,
    64983,
    90418,
    130659,
    92555,
    104100,
    121330,
    87819,
    63021,
    138752,
    108491,
    113214,
    136107,
    55602,
    131025,
    90689,
    132480,
    134220,
    135760,
    148945,
    57010,
    115909,
    67605,
    108478,
    111094,
    129875,
    102541,
    133169,
    76547,
    113079,
    126981,
    81066,
    104994,
    134551,
    61053,
    136512,
    67895,
    127712,
    58077,
    107426,
    115178,
    99316,
    64532,
    107293,
    129534,
    114100,
    88382,
    133621,
    93803,
    107214,
    75795,
    51422,
    50876,
    98171,
    121970,
    92130,
    89814,
    130753,
    58561,
    61666,
    144353,
    142168,
    143592,
    94461,
    116978,
    135420,
    88165,
    97926,
    114772,
    143455,
    53613,
    60408,
    94299,
    98996,
    142167,
    78063,
    98974,
    65392,
    140263,
    126726,
    141285,
    111074,
    95977,
    124871,
    136636,
    81935
]


//CALCULATION FUNCTION
function newValues(){ 
    //ARRAY RESULTATS
    const allNewValues = [];
    //CALCULATE NEEDED FUEL
    function calculFuel(a){
        var b = Math.floor((a/3)-2);
        allNewValues.push(b)
    }
    //APPLY TO EVERY MODULE VALUES
    allModules.forEach(value => calculFuel(value));
    //SUM ALL RESULTS
    const sumAllValues = allNewValues.reduce(function(total, current){
       return total + current;
    });
    //SHOW RESULTAT
    console.log(sumAllValues);   
}

newValues()


