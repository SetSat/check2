let arr = [52,69,3546,26458,3568,4525,63,5,21,5,545,21414,22,4250,542,2]
for(let i=0; i<arr.length; i++)
for(j=i; j<arr.length; j++){
    if (arr[j]>arr[i]){
    let temp = arr[j]
    arr[j]=arr[i]
    arr[i]= temp
    }

}console.log(...arr)