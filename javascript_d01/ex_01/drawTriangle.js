function drawTriangle(size)
{    
    var line = 0;
    var truc_de_ouf = "";

    if(isNaN(size))
    {
        console.error('You must enter a number, positive, and integer');
        return 'Error 84';
    }
    else
    {       
        if(size>=1)
        {
            if (Number.isInteger(size))
            {
                while (line < size)
                {
                    truc_de_ouf = truc_de_ouf + "$";
                    console.log(truc_de_ouf);
                
                    line++;
                }
            }
            else
            {
                console.error('Size must be an Integer');
                return 'Error 84';
            }
        }
        else
        {
            console.error('Size must be Positive');
            return 'Error 84';
        }
    }
}

//drawTriangle('j');