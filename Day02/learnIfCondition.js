function checkNum(num)
{
    let result = ''
    if (num > 0)
    {//console.log (num+" is Positive")
        result = num+ " is Positive"
    }
    else if (num < 0)
    {//console.log (num+" is Negative")
        result = num+ " is Negative"
    }
    else
    {//console.log (num+" is Zero")
        result = num+ " is Zero"
    }
    //return
    return result
}
//let output = checkNum(-5)
console.log(checkNum(100))



/*let num = 10
if (num > 0)
{console.log (num+" is Positive")}
else if (num == 0)
{console.log (num+" is Zero")}
else
{console.log (num+" is Negative")}
*/



/*let age = 15;
if (age <= 18){    
    console.log("is not elegible")
}
else { 
    console.log("is elegible")
}
*/

//else if (num < 0)
//{    consol.log (num + " is Negative")}


/*let income = 20;
if (income<=8) {
    console.log("no tax deducted")
}else if(income>8 && income<15 ){
   console.log("5% tax is deducted")
}
else{
    console.log("tax deduceted is 20%")
}
    */