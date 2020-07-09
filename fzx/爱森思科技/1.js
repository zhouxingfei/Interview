// var checkTwoSum = function (nums, k) {
//     let ary = {};
//     //返回结果
//     let flag = false;
//     // Write your code here
//     nums.forEach((item,index) => {
//         let val = k - item;
//         if(ary[item] == undefined){
//             ary[val] = index
//         }else{
//             if(index == ary[item]- 1 || ary[item] + 1){
//                 flag=true;
//             }
//         }
//     });
//     console.log(flag,ary)
//     return flag;
// }; 
//升级版，判断数组中是否有连续的值相加等于k，（没有做出来）
var checkTwoSum = function (nums, k) {
    let temp = 0,
        ary = [],
        con = [];
    for (num in nums){
        temp = temp + num;
        ary.push(temp);
    }
    for(o in ary){
        if(o - k in con)return true;
        con.push(o);
    }
    return false;
}

let myAry = [1, 2,-19, 5, 9, 6];
checkTwoSum(myAry, 7);
checkTwoSum(myAry, 10);

var quickSort = function (arr) {
    //定义左右数组
    let left = [];
    let right = [];
    //如果数组<=1,则直接返回
    if (arr.length <= 1) { return arr; }
    let pivotIndex = Math.floor(arr.length / 2);
    //找基准，并把基准从原数组删除
    let pivot = arr.splice(pivotIndex, 1);
    console.log(pivot);
    //比基准小的放在left，比基准大的放在right
    for (let i = 0; i < arr.length; i++) {
        arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    //递归
    // return [...quickSort(left),pivot,...quickSort(right)];
    return quickSort(left).concat(pivot).concat(quickSort(right));
}
console.log('调用前数组', myAry);
myAry = quickSort(myAry);
console.log('调用后数组', myAry);