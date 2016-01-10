function diff(arr1, arr2) {
    
    var concatArray = arr1.concat(arr2);
    
    function difff(a, i, arr) {
        return arr.indexOf(arr[a]) < 0;
    }
    
    var newArr = concatArray.filter(difff);
    
    return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
