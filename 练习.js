for (var i = 0; i < 6; i++) {
    var str = ''
    for (var j = 0; j < 6 - i; j++) {
        str += ' '
    }
    for (var k = 0; k < i; k++) {
        str += '* '
    }
    console.log(str)
}
var arr = [55, 33, 200, 900, 100]
for (var i = 0; i < arr.length - 1; i++) {
    for (var k = 0; k < arr.length - 1 - i; k++) {
        if (arr[k] > arr[k + 1]) {
            var a = arr[k]
            arr[k] = arr[k + 1]
            arr[k + 1] = a
        }
    }

}
console.log(arr)

console.log(arr.unshift(4))

// 定义函数
function riqi(year, math, day) {
    var days = day
    if (math < 2) {
        return days;
    }
    var maths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (var i = 0; i < math - 1; i++) {
        days += maths[i]
    }
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 == 0) && math > 2) {
        days++
    }
    return days;
}
console.log(riqi(2020, 3, 3))

// 15.假设一个简单的ATM机的取款过程是这样的：首先提示用户输入密码（password），
// 最多只能输入三次，超过3次则提示用户“密码错误，请取卡”结束交易。如果用户密码正确，再提示用户输入取款金额（amount），
// ATM机只能输出100元的纸币，一次取钱数要求最低100元，最高1000元。
// 若用户输入的金额符合上述要求，则打印输出用户取得钱数，
// 最后提示用户“交易完成，请取卡”，否则提示用户重新输入金额。
// 假设用户密码是111111，请编程实现。
;(function (e) {
        console.log(1 == true);
        console.log(2 == true);
    })() 