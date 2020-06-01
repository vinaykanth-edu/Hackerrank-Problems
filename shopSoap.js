// Piyush goes to buy soap from a shop.The shop contains N soaps. The prices of soap are given in the form of an array A. The price of ith soap is A[i]. Now Piyush has q queries, in each query he wants to know the number of soaps that have price less than the given amount M.


function processData(input) {
    input=input.split('\n');
    var n = Number(input[0])
    var arr=input[1].split(' ').map(Number);
    arr.sort(function(a,b){return a-b;});
    var max=arr.length-1;
    var queries = +(input[2]);
    var list=input;
    for(var i=3;i<input.length;i++){
        var val=parseInt(list[i]);
        console.log(search(arr,val,0,max));
    }
    
    function search(arr,element,min,max){
    while(min<=max){
        var mid=Math.floor((max+min)/2);
        if(arr[mid]<element){
            min=mid+1;
        }else if(arr[mid]>=element){
            max=mid-1;
        }
    }
    return min;
}
} 