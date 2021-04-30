//TEST DATA


//OBS! In this case you actually have to use the parentheseswhen doing the area calculation.Why??
//*** The answer of the question 
//We have to use parentheses because both of multiplication and division operator have the same operator precedence.


//Case1

//triangleOne: base = 10cm, height = 13cm
//triangleTwo: base = 16,5cm, height = 20,3cm

const triangleOne = Math.trunc((10 * 13) / 2);
const triangleTwo = Math.trunc((20.3 * 16.5) / 2);

//console.log(triangleOne);
//console.log(triangleTwo);


if (triangleOne < triangleTwo) {
    console.log(
        `Triangle one has eara of ${triangleOne} cm² and Triangle two has eara of ${triangleTwo} cm². Triangle two has the biggest area. `
    );

} else if (triangleOne > triangleTwo) {
    console.log(
        `Triangle one has eara of ${triangleOne} cm² and Triangle two has eara of ${triangleTwo} cm². Triangle one has the biggest area .`

    );
} else {
    console.log(
        `Triangle one has eara of ${triangleOne} cm² and Triangle two has eara of ${triangleTwo} cm². Both of the triangles have the same area.`

    )
}





//Case2
//triangleThree: base = 16,5cm, height = 20,3cm
//triangleFour: base = 20,3cm, height = 16,5cm

const triangleThree = Math.trunc((16.5 * 20.3) / 2);
const triangleFour = Math.trunc((20.3 * 16.5) / 2);

//console.log(triangleThree);
//console.log(triangleFour);

if (triangleThree === triangleFour) {
    console.log(
        `Triangle three has area of ${triangleThree} cm² and triangle four has area of ${triangleFour} cm². Both of triangles have the same area. `
    );
} else {
    console.log(
        `Triangle three has area of ${triangleThree} cm² and triangle four has area of ${triangleFour} cm². Or may both of them dont have the same area`
    )
}






//Case3

//triangleFive: base = 7,8cm, height = 5,6cm
//triangleSix: base = 9,3cm, height = 12,4cm

const triangleFive = Math.trunc((7.8 * 5.6) / 2);
const triangleSix = Math.trunc((9.3 * 12.4) / 2);

//console.log(triangleFive);
//console.log(triangleSix);

//console.log(`${triangleFive}`);
//console.log(`${triangleSix}`);

if (triangleFive < triangleSix) {
    console.log(
        `Triangle five has eara of ${triangleFive} cm² and Triangle six has eara of ${triangleSix} cm². Triangle six has the biggest area. `
    );

} else if (triangleFive > triangleSix) {
    console.log(
        `Triangle five has eara of ${triangleFive} cm² and Triangle six has eara of ${triangleSix} cm². Triangle five has the biggest area .`

    );
} else {
    console.log(
        `Triangle five has eara of ${triangleFive} cm² and Triangle six has eara of ${triangleSix} cm². Both of the triangles have the same area.`

    )
}
