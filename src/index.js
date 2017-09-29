 module.exports = function multiply(first, second) 
{
    let arrayFirst = first.split('').reverse();
    let arraySecond = second.split('').reverse();    

    let result = [];
    for(let i = 0; i<arrayFirst.length+arraySecond.length; i++)
    {
        result[i] = 0;
    }

    let decade = 0;
    let decadeIfResMoreTen = 0;

    for(let i = 0; i < arraySecond.length; ++i)
    { 
        decade = 0;
        decadeIfResMoreTen = 0;

        for(let j = 0; j < arrayFirst.length; ++j)
        {  
                                           

            result[i+j] += ((arrayFirst[j] * arraySecond[i]) % 10) + decade 
            + decadeIfResMoreTen;

            if(result[i+j] >= 10)
            {
                let temp = result[i+j];
                result[i+j] = result[i+j] % 10;
                decadeIfResMoreTen = Math.floor(temp / 10);
                console.log(">10");
            }
            
            decade = Math.floor(((arrayFirst[j] * arraySecond[i]) + decade 
            + decadeIfResMoreTen) / 10);
                  
            if((j+1) == arrayFirst.length)
            {                
                result[i+j+1] = decade;
            }

           
            
            console.log(i+j + '\t' + result);     
            console.log('\t' + decade);      
        }    
        
    }

    result.reverse();
    if(result[0] == 0)
    {
        result.shift();
    }
    return result.join('');
               
}

console.log(multiply('586', '596'));


