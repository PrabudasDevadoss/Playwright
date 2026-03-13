let compName = 'madam'
let reverseString = ''
for(i=compName.length-1; i>=0; i--)
{
    reverseString = reverseString+compName[i]
}
console.log(reverseString)
if (compName == reverseString)
    {
        console.log(compName+" is a PALINDROME")
    }
    else
    {  console.log(compName+" is not a PALINDROME")

    }