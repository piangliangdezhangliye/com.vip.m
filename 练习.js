// for (var i = 0; i < 6; i++) {
//     var str = ''
//     for (var j = 0; j < 6 - i; j++) {
//         str += ' '
//     }
//     for (var k = 0; k < i; k++) {
//         str += '* '
//     }
//     console.log(str)
// }
// var arr = [55, 33, 200, 900, 100]
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var k = 0; k < arr.length - 1 - i; k++) {
//         if (arr[k] > arr[k + 1]) {
//             var a = arr[k]
//             arr[k] = arr[k + 1]
//             arr[k + 1] = a
//         }
//     }

// }
// console.log(arr)

// console.log(arr.unshift(4))

// // 定义函数
// function riqi(year, math, day) {
//     var days = day
//     if (math < 2) {
//         return days;
//     }
//     var maths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     for (var i = 0; i < math - 1; i++) {
//         days += maths[i]
//     }
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 == 0) && math > 2) {
//         days++
//     }
//     return days;
// }
// console.log(riqi(2020, 3, 3))

// // 15.假设一个简单的ATM机的取款过程是这样的：首先提示用户输入密码（password），
// // 最多只能输入三次，超过3次则提示用户“密码错误，请取卡”结束交易。如果用户密码正确，再提示用户输入取款金额（amount），
// // ATM机只能输出100元的纸币，一次取钱数要求最低100元，最高1000元。
// // 若用户输入的金额符合上述要求，则打印输出用户取得钱数，
// // 最后提示用户“交易完成，请取卡”，否则提示用户重新输入金额。
// // 假设用户密码是111111，请编程实现。
// // const set = new Set([1, 1, 2, 3, 4]);
// // console.log(set);
// // console.log(set.has(9))
// // console.log(set.clear())


// var f 
// fn();
// f = c
// c = true;
// if (f === true) {
//     var a = 10;
// }

// function fn() {
//     var b 
//     b = 20
//     c = 30;
// }

// console.log(a);
// console.log(c);
// // console.log(fn()); 


// let greeting
// greetign = {name:'李现'}
// console.log(greetign);

// function Person(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = Person('Sarah', 'Smith');
    
//     console.log(lydia);
//     console.log(sarah);

// 1.定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），
// 遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组
var arr=[]
arr.length=5
for(var j=0;j<arr.length;j++){
    arr[j]=parseInt(Math.random()*(100-10)+10)
}
for(var i=0;i<arr.length;i++){
    if(arr[i]<50){
        arr[i]=0
    }
}
console.log(arr)



// 3.将数组var arr = [1,2,1,2,3,4,5,6]里面重复的元素去除
var arr = [1,2,1,2,3,4,5,6,99,3]
var arr2=[]
for(var i=0;i<arr.length;i++){
    if(arr2.indexOf(arr[i])==-1){
        arr2.push(arr[i])
    }
}
console.log(arr2)

// 获取地址里面的用户名和年龄和邮箱 https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
// 并且控制台输出对象的格式{username:'lisi',age:28,email:120122@qq.com}
var str=' https://www.baidu.com?username=lisi&age=28&email=120122@qq.com';
str=str.split('?')[1].split('&')
console.log(str)
var obj={}
for(var i=0;i<str.length;i++){
    var arr=str[i].split('=')
    obj[arr[0]]=arr[1]
}
console.log(obj)

// 4.统计数组var arr = [1,2,3,4,5,1,1,2,3,2]里面元素出现的次数
var arr = [1,2,3,4,5,1,1,2,3,2]
var obj={}
for(var i=0;i<arr.length;i++){
    // obj[arr[i]].push(arr[i])
    if(obj[arr[i]]){
        obj[arr[i]]++
    }else{
        obj[arr[i]]=1
    }
}
console.log(obj)

var arr3=[2,55,4,66,7]
arr3.splice(0,1,55,6)
console.log(arr3)