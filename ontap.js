let arr = [1, 2, 4, 1]

// for(let i = 0; true; i++) {
//     console.log(arr[i])
// }
let i = 0
while(arr[i] != undefined) {
    console.log(arr[i])
    i++
}

do {
    console.log(arr[i])
    i++
} while(arr[i] != undefined)