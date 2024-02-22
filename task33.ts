let numberList :number[]=[1,2,3,4,5,6,7,8,9];
for(const num of numberList)
{ let ord :string
  if(num==1)
  { 
    let ord='st';
    console.log(`${num}${ord}`);
 }
  else if(num==2)
  { 
    let ord='nd';
    console.log(`${num}${ord}`);
 }
 else if(num==3)
 { 
   let ord='rd';
   console.log(`${num}${ord}`);
}
else{
  let ord='th';
   console.log(`${num}${ord}`);
  }
} 