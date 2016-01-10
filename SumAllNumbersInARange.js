function sumAll(arr) {
    
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    console.log(start + " " + end);
    var numArray = [];
    
    for (start; start <= end; start++) {
        numArray.push(start);
    }
    
    function sum(a,b) {
        return a+b;
    }
    
    var returnNum = numArray.reduce(sum);
    
    return returnNum;
}

sumAll([1, 4]);