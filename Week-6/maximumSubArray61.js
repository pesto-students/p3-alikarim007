function maximumSubArray(array,size){
    var maxTillNow=0, maxTillHere=0, start =0, end=0, s=0;
      
    for(i=0;i<size;i++){
        maxTillHere = maxTillHere + array[i];

        if(maxTillNow < maxTillHere){
            maxTillNow = maxTillHere;
            start = s;
            end = i;
        }

        if(maxTillHere < 0){
            maxTillHere = 0;
            s = i+1;
        }
    }
    console.log("maximum sum is "+ maxTillHere);
    console.log("start is "+ start);
    console.log("end is "+ end);
}

var a = [-2, -3, 4, -1, -2, 1, 5, -3]
var len = a.length;
maximumSubArray(a,len);