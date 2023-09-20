let sat = 55
let div = 2
for (div =2; div<=sat; div++){
  if(sat%div == 0)
  break
}
if(div == sat){     
  console.log(sat,"is a prime number")
}
else{
  console.log(sat, "is not a prime number")
}