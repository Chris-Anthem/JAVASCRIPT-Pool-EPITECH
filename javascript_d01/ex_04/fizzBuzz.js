function fizzBuzz()
{
    tab = [];
    for(i=1 ; i<=20 ; i++)
    {
        if(Number.isInteger(i/15))
        {
           tab.push('FizzBuzz');
        }
        else if(Number.isInteger(i/3))
        {
            tab.push('Fizz');
        }
        else if(Number.isInteger(i/5))
        {
            tab.push('Buzz');
        }
        else{
            tab.push(i);
        }
    }
    console.log(tab.join(", "));

}
fizzBuzz();

