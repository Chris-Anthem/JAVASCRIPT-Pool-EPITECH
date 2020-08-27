function range(start, end, step=1)
{   
     tab = [];
    if(step !==null)
    {   
        if(start <= end)
        {
            console.log('start < end + step');
            for (i=start ; start<=end ; i++)
            {
                tab.push(start);
                start = start + step;
            }
        }
        else if(start >= end)
        {
            console.log('start > end + step');
            for (i=end ; i>start ; i -= step)
            tab.push(i)
        }
    }
    else
    {
        if(start <= end)
        {    console.log('start < end sans step');
            for (i=start ; i<end; i += 1) {
                tab.push(i)
            }
        } 
        else if (start >= end)
        {   console.log('start > end sans step');
            for (i=end ; i>start ;i -= 1)
            tab.push(i)
        }      
    }
    return tab;    
}

console.info(range(1, 10, 2));
// console.log(range(19, 22));
// console.log(range(5, 2, -1));