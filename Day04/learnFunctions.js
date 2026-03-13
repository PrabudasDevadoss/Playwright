//Function Declaration (Named Function)
function userProfile(name) {
    //let name = 'Prabudas'
    console.log(`Hello ${name}!`)
    return
}
userProfile("Prabudas")

// Arrow function
let double = (a) => {
    a = a*2
    return a
}
console.log ('Double value is : '+double(5))

//Anonymous funtion
setTimeout(function () {
        console.log ('Anonymous funtion: This message is delayed by 2 seconds')
}, 2000)


// Callback Function
function getUserData(onCallBack){
    console.log("waiting")
    setTimeout( function(){
        onCallBack()
    }, 3000)
}

function callBack()
{
    console.log('Its a call back after 3Sec')
}

getUserData(callBack) //Function arguments