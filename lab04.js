let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// while
// let max = arr[0]
// let min = arr[0]
// let i = 0
// while(i < arr.length) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
    
//     if (arr[i] < min) {
//         min = arr[i]
//     }

//     i++
// }

// console.log('Phan tu lon nhat la: ', max)
// console.log('Phan tu nho nhat la: ', min)

// do-while

// let max = arr[0]
// let min = arr[0]
// let i = 0
// do {
//     if (arr[i] > max) {
//         max = arr[i]
//     }

//     if (arr[i] < min) {
//         min = arr[i]
//     }

//     i++
// } while(i < arr.length)

// console.log('Phan tu lon nhat la: ', max)
// console.log('Phan tu nho nhat la: ', min)


// cau e
// for(let i = 0; i < arr.length / 2; i++) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = tam
// }

// let i = 0
// while(i < arr.length / 2){
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = tam

//     i++
// }

// console.log(arr)




// cau f
let tanSuatXuatHien = {}

// for(let i = 0; i < arr.length; i++) {
//     let phanTuThuI = arr[i] 

//     if (tanSuatXuatHien[phanTuThuI] === undefined) {
//         tanSuatXuatHien[phanTuThuI] = 1
//     }
//     else {
//         tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
//     }
// }


let i = 0
while(i < arr.length) {
    let phanTuThuI = arr[i] 

    if (tanSuatXuatHien[phanTuThuI] === undefined) {
        tanSuatXuatHien[phanTuThuI] = 1
    }
    else {
        tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
    }

    i++
}

console.log(tanSuatXuatHien)

// cau g
// cach 1

// for(let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }

// arr[0] = 117

// console.log(arr)

// cach 2

let mang2 = [117]

for(let i = 0; i < arr.length; i++) {
    mang2[mang2.length] = arr[i]
}

console.log(mang2)

// cau h
let mangTangDan = true
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
        mangTangDan = false
        break
    }
}

if (mangTangDan === true) {
    console.log('Mang tang dan')
}
else {
    console.log('Mang khong tang dan')
}

// cau i

for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++){
        if (arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
    }
}

console.log(arr)

// k,l
let mangSoChan = []
let mangSoLe = []
for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        mangSoChan[mangSoChan.length] = arr[i] // mangSoChan.push(arr[i])
    }
    else {
        mangSoLe[mangSoLe.length] = arr[i]
    }
}

console.log('Mang so chan: ', mangSoChan)
console.log('Mang so le: ', mangSoLe)


// bai 2
let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]

for(let i = 0; i < arr2.length - 1; i++) {
    for(let j = i + 1; j < arr2.length; j++){
        if (arr2[i] < arr2[j]) {
            let tam = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = tam
        }
    }
}

let tong3SoLonNhat = arr2[0] + arr[1] + arr[2]

console.log('Tong 3 so lon nhat la: ', tong3SoLonNhat)