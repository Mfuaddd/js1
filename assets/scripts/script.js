//TASK 1 START

// let inp = +prompt()
// while(true){
//     if(inp === 2){
//         console.log("he");
//         break
//     }
//     else if(inp%2===0){
//         inp/=2
//     }
//     else{
//         console.log("yox");
//         break
//     }  
// }

//TASK 1 END
//TASK 2 START

// let num1 = +prompt("num1:")
// let num2 = +prompt("num2")
// console.log(num1**num2);

//TASK 2 END
//TASK 3 START

// let num = 10000000  // istenilen nomreni daxil ede bilersiniz
// let c =0
// let isEYNI =true
// let sum=0
// for (let i =10;i <= num;i++){
//     isEYNI =true
//     c=0
//     while(true){
//         if(i/10**c <1)break;
//         c++;
//     }
//     for (let j = 0; j <= c-2; j++){ 
//         if(!((i%10**(j+1) - i%10**(j))/10**(j) === (i%10**(j+2) - i%10**(j+1))/10**(j+1))){
//             isEYNI =false;
//             break
//         }
//     }
//     if(isEYNI === true){
//         console.log(i,c);
//         sum+=i
//     }
// }
// console.log("Sum: "+ sum)

//TASK 3 END
//TASK 4 START

// let arr = [1,22,33,44,55,66,77,88,99,111,222]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0 &&  max < arr[i]) {
//         max = arr[i] 
//     }
// }
// console.log(max);

//TASK 4 END
//TASK 5 START

// let arr = [1,22,33,44,55,66,77,88,99,111,222]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i]%2 === 0) &&  max < arr[i]) {
//         max = arr[i] 
//     }
// }
// console.log(max);

//TASK 5 END
//TASK 6 START

// let arr = [1,2,4,7,9,13,15,17,19,20,22,23]
// let isPrime
// let primeSum = 0
// let compositeSum = 0

// for (let i = 0; i < arr.length; i++) {
//     isPrime = true
//     for (let j = 2; j < arr[i]; j++) {
//         if(arr[i]%j === 0){
//             isPrime = false
//         }
//     }
//     if(isPrime){
//         primeSum++
//         // console.log("prime: "+arr[i]);
//     }
//     else{
//         compositeSum++
//         // console.log("composite: "+arr[i]);
//     } 
// }
// console.log("prime: "+primeSum);
// console.log("composite: "+compositeSum);


//TASK 6 END
//TASK 7 START

// let arr = [1,2,4,7,9,13,15,17,19,20,22,23]
// let max=arr[0],min=arr[0]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     sum+=arr[i]
// }
// console.log("max:",max);
// console.log("min:",min);
// console.log("average:",sum/arr.length)
// console.log((max+min)>sum/arr.length);

//TASK 7 END
//TASK 8 START

// let num = 234529  // istenilen nomreni daxil ede bilersiniz
// let c =0
// let temp = 0
// let max=-1
// while(true){
//     if(num/10**c <1)break;
//     c++;
// }
// for (let j = 1; j <= c; j++) {
//     temp = (num%10**j - num%10**(j-1))/10**(j-1)
//     if(temp>max)max=temp
//     // console.log(temp);
// }
// console.log("max:",max);


//TASK 8 END




