const input = [1,2,3,4,5,6,7,8];
const newArr = [];
const  EvenV = (i) => {
    return i%2 === 0;
}
for(let i =0; i < input.length; i++){
    if(EvenV(input[i])){
        newArr.push(input[i]);
    }
}
console.log(newArr);