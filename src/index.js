 /*module.exports =*/ 
function multiply(first, second) 
{
    let arrayFirst = first.split('').reverse();
    let arraySecond = second.split('').reverse();    

    let result = [];
    for(let i = 0; i<arrayFirst.length+arraySecond.length; i++)
    {
        result[i] = 0;
    }
    

    for(let i = 0; i < arraySecond.length; ++i)
    { 
        let temp = 0;       
        for(let j = 0; j < arrayFirst.length; ++j)
        {            
            result[i+j] += (((arrayFirst[j] * arraySecond[i]) % 10) + temp);

            if(result[i+j] >= 10)
            {
                result[i+j] %= 10;
                temp = Math.floor(result[i+j] / 10)
            }
            else
            {
                temp = 0;
            }

            temp = Math.floor((arrayFirst[j] * arraySecond[i]) / 10);            
            

            if((j + 1) == arrayFirst.length)
            {
                result[i+j+1] = temp;
            }
            console.log(result);
        }
    
    }


           
}

multiply('999', '87');


