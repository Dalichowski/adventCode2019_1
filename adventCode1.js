//ADVENT CODE 2019 DAY_1//

//This is my code for day1 of AdventCode 2019

{/*During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)*/}

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


