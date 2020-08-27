function arrayIsEqual(arr1, arr2)
{
    // var arr1 = [1 , 2, 5, 6];
    // var arr2 = [1 , 2, 4, 6, 8];

    if (arr1.length != arr2.length)
    {
        // console.log('All arrays must have the same size');
        return false;
    }
    for (var  i = 0; i < arr1.length; i++)
    {   
        if (arr1[i] !== arr2[i]) 
        {
        // console.log ('Both arrays are differents');
        return (false);
        }
    }
    return(true)
}
        
//arrayIsEqual()