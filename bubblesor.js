let arr = [55, 9, 875, 54, 98235, 75, 69, 235, 541, 1, 52,23]


for(j=0; j<arr.length-1; j++){

for(i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp  
        // console.log(...arr)
    }
}
}
console.log(...arr)