// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a = +userInput[0]

for(i=0;i<=a;i++){
    let arr=[]
    for(j=0;j<i;j++){
        arr.push("*")
    }console.log(arr.join(""))
}

  //end-here
});