function AvgMinMax(arr){
    var min=arr[0];
    var max=arr[0];
    var sum=0;
    var output=[];

    for (var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    sum+=arr[i];
    }
    output[0]=max;
    output[1]=min;
    output[2]=sum/arr.length;

    return output;
}

b=AvgMinMax([1,5,10,-2]);
console.log(b);