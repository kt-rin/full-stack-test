let arr = [1, 2, 3, 4, 5]
let sum = 0;

arr.map((item, i) => {
    if (item === 5) {
        sum += 5
    } else if (item % 2 !== 0) {
        sum += 3
    } else if (item % 2 === 0) {
        sum += 1
    } else {
        console.log("error");
    }

    (arr.length - 1) === i && console.log("Output:", sum)
})

