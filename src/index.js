module.exports = function multiply(first, second) 
{
    let arrayFirst = first.split('').reverse();
    let arraySecond = second.split('').reverse();    

    let result = [];
    let decade = 0;
    let decadeIfResMoreTen = 0;
    
    for(let i = 0; i<arrayFirst.length+arraySecond.length; i++)
    {
        result[i] = 0;
    }

    for(let i = 0; i < arraySecond.length; ++i)
    { 
        decade = 0;
        decadeIfResMoreTen = 0;

        for(let j = 0; j < arrayFirst.length; ++j)
        {  
        	
        	  result[i+j] += ((arrayFirst[j] * arraySecond[i] + decade) % 10);
            	decade = Math.floor((arrayFirst[j] * arraySecond[i] + decade) / 10);
            	
            	if(result[i+j] >= 10)
            	{
            		result[i+j] = result[i+j] % 10;
            		decade = Math.floor((arrayFirst[j] * arraySecond[i] + decade) / 10 + 1);
            	} 
            	
            //	alert(result[i+j] + "..... " +decade);
            
            if((j+1) == arrayFirst.length)
            {                
                result[i+j+1] = decade;
            }

           
            
            //alert(i+j + "..... " + result + "..... "+ decade +
            //"..... " + decadeIfResMoreTen);     
           // alert('\t' + decade);      
        }    
        
    }

    result.reverse();
    if(result[0] == 0)
    {
        result.shift();
    }
    return result.join('');
               
}

alert(multiply('329568934658432659586', '58379426534596'));




