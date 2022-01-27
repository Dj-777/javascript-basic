const number=[12,18,10,15,13,14,21,25,23,38];
let binarysort=(number,key)=>{
    number.sort();
        let start=0;
        let end=number.length-1;
        let mid=0;
        while(start<=end) {
            mid=parseInt((start+end)/2);
            {
            if(key==number[mid]){
                return number[mid];
            }
            else if(key>number[mid]){
                start=mid+1;           }
            else if(key<number[mid]){
                end=mid-1;
            }
            }
        }
}
let key=9;
if(binarysort(number,key)){
console.log("value is founded"); 
}
else{
    console.log("value is not there");
}