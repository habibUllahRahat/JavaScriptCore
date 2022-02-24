/*
JUMP STATEMENT in JavaScript
There is two kind of jump statement.
Those are:

1. BREAK('break;')
        break statement will stop full cycle of executing sequence like loops or label cycle;

2. CONTINUE('continue;')
        On the other hand continue statement will skip a cycle of executing sequence like loops or label cycle;  

*/

let i

for (i = 1; i <= 5; i++) {

    if (i == 4) {
        break; // when i is equal to 4 then it will break loop for all time
    }
    document.write(i + "<br>");
}

document.write(`i breaked the jail(loop) at ${i} <br> but he should be realeased at 5<br><br>`);

let j

for (j = 1; j <= 5; j++) {

    if (j == 2) {
        continue; // when j is equal to 2 it will enter the conditional if and execute the continue and continue will skip excuting code for this cycle only and continue from next condition; 
    }
    document.write(j + "<br>");
}

document.write(`on the other hand j took a bell at 2 and continue the jail(loop) at three again <br> but he got realeased when jail condition completed at 5`);