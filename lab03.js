
function inThangTrongNam(n) {
    if (n < 1 || n > 12) {
        console.log('Tham so khong chinh xac')
    }
    else {
        switch(n) {
            case 1: {
                console.log('Day la thang 1')
                break
            }
            case 2: {
                console.log('Day la thang 2')
                break
            }
            case 3: {
                console.log('Day la thang 3')
                break
            }
            case 4: {
                console.log('Day la thang 4')
                break
            }
            case 5: {
                console.log('Day la thang 5')
                break
            }
            case 6: {
                console.log('Day la thang 6')
                break
            }
            case 7: {
                console.log('Day la thang 7')
                break
            }
            case 8: {
                console.log('Day la thang 8')
                break
            }
            case 9: {
                console.log('Day la thang 9')
                break
            }
            case 10: {
                console.log('Day la thang 10')
                break
            }
            case 11: {
                console.log('Day la thang 11')
                break
            }
            case 12: {
                console.log('Day la thang 12')
                break
            }
        }
    }
}

inThangTrongNam(6)


function xetHangDiem(n) {
    switch(true) {
        case n >= 90 && n <= 100: {
            console.log('Hang A')
            break
        }
        case n >= 80 && n <= 89: {
            console.log('Hang B')
            break
        }
        case n >= 70 && n <= 79: {
            console.log('Hang C')
            break
        }
        case n >= 60 && n <= 69: {
            console.log('Hang D')
            break
        }
        default: {
            console.log('Hang F')
        }
    }
}

xetHangDiem(9)


function tinhToan(a, b, phepToan) {
    switch(phepToan) {
        case '+': {
            console.log('%s %s %s = %s', a, phepToan, b, a+b)
            break
        }
        case '-': {
            console.log('%s %s %s = %s', a, phepToan, b, a-b)
            break
        }
        case '*': {
            console.log('%s %s %s = %s', a, phepToan, b, a*b)
            break
        }
        case '/': {
            console.log('%s %s %s = %s', a, phepToan, b, a/b)
            break
        }
    }
}

tinhToan(8, 2, '+')



function timNgayTrongThang(n) {
    if (n < 1 || n > 12) {
        console.log('Tham so khong chinh xac')
    }
    else {
        switch(n) {
            case 1: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 2: {
                console.log('Thang %s co %s ngay', n, 28)
                break
            }
            case 3: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 4: {
                console.log('Thang %s co %s ngay', n, 30)
                break
            }
            case 5: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 6: {
                console.log('Thang %s co %s ngay', n, 30)
                break
            }
            case 7: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 8: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 9: {
                console.log('Thang %s co %s ngay', n, 30)
                break
            }
            case 10: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
            case 11: {
                console.log('Thang %s co %s ngay', n, 30)
                break
            }
            case 12: {
                console.log('Thang %s co %s ngay', n, 31)
                break
            }
        }
    }
}

timNgayTrongThang(2)


function xacDinhMuaTrongNam(n) {
    switch(true) {
        case n >=3 && n <=5: {
            console.log('Mua Xuan')
            break
        }
        case n >=6 && n <=8: {
            console.log('Mua He')
            break
        }
        case n >=9 && n <=11: {
            console.log('Mua Thu')
            break
        }
        default: {
            console.log('Mua Dong')
        }
    }
}

xacDinhMuaTrongNam(2)


function xacDinhDoTuoiXemPhim(theLoai, tuoi) {
    switch(theLoai) {
        case 'HD': {
            if (tuoi > 16) {
                console.log('Duoc xem')
            }
            else {
                console.log('Khong duoc xem')
            }
            break
        }
        case 'KD': {
            if (tuoi > 18) {
                console.log('Duoc xem')
            }
            else {
                console.log('Khong duoc xem')
            }
            break
        }
        case 'HK':
        case 'HH': {
            console.log('Duoc xem')
            break
        }
    }
}

xacDinhDoTuoiXemPhim('HH', 10)