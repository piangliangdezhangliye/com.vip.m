// 定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），
// 遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组
var arr = []
for (var i = 0; i < 5; i++) {
    arr.push(parseInt(Math.random() * (100 - 10 + 1) + 10))
    if (arr[i] < 50) {
        arr[i] = 0
    }
}
console.log(arr)


// 获取地址里面的用户名和年龄和邮箱 https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
// 并且控制台输出对象的格式{username:'lisi',age:28,email:120122@qq.com}
var str = 'https://www.baidu.com?username=lisi&age=28&email=120122@qq.com'
str = str.split('?')[1].split('&')
console.log(str)
var obj = {}
for (var i = 0; i < str.length; i++) {
    var arr = str[i].split('=')
    console.log(arr)
    obj[arr[0]] = arr[1]
}
console.log(obj)


// 3.将数组var arr = [1,2,1,2,3,4,5,6]里面重复的元素去除
var arr = [1, 2, 1, 2, 3, 4, 5, 6]
var arr2 = []
for (var i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) == -1) {
        arr2.push(arr[i])
    }
}
console.log(arr2)

var arr = [1, 2, 1, 2, 3, 4, 5, 6]
var arr2 = new Set(arr)
console.log(Array.from(arr2))

// 4.统计数组var arr = [1,2,3,4,5,1,1,2,3,2]里面元素出现的次数
var arr = [1, 2, 3, 4, 5, 1, 1, 2, 3, 2]
var obj = {}
for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++
    } else {
        obj[arr[i]] = 1
    }
}
console.log(obj)
// 5.写一个函数,输入某年某月某日，判断这一天是一年中的第几天
//声明函数设置形参 年月日
function riqi(year, math, day) {
    var days = day
    if (math < 2) {
        return days
    }
    var maths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (var i = 0; i < math - 1; i++) {
        days += maths[i]

    }

    if (year % 400 == 0 || (year % 4 == 00 && year % 100 == 0) && math > 2) {
        days++
    }
    return days

}
console.log(riqi(2020, 2, 9))


// // 4、补全函数完成功能，传入数组中找到任意3个数字(数字不能重复使用)的和是10的倍数，将所有组合打印下来
// function printSumIs10MoM(arr) {
//     for(var i=0;i<arr.length;i++){
//       for(var j=i+1;j<arr.length-1;j++){
//         for(var k=j+1;arr.length-2;k++){
//           if((arr[i]+arr[j]+arr[k])%10==0){
//             console.log(arr[i],arr[j],arr[k])
//           }
//         }
//       }
//     }
//   }
//   var arr = [10, 2, 3, 4, 6];
//   printSumIs10MoM(arr);


var arr=[6,5,33,3,66,22]
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            var a=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=a
        }
    }
}
console.log(arr)


var obj={
    name:'李现',
    age:18,
    height:156,
}
for(var key in obj){
    console.log(obj[key])
}