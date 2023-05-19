let a = 10
let b = 2
let c = 1900

function add(a,b){
    
    result = a + b
    return result
      
}

function multiply(a,b){
    
    result = a * b
    return result
      
}

function subtract(a,b){
    
    result = a - b
    return result
      
}

function check_leap_year(c){
    
    // q = c / 4
    // q1 = c /100
    
    if (c %4  == 0) 
        if (c %100  == 0) 
            if (c %400  == 0)
                console.log(c," is leap year")
            else
                console.log(c," is not leap year")     
        else 
            console.log(c," is leap year")    
    else 
        console.log(c," is not leap year") 
}

// var year = input("Please enter your year" );
// year = parseInt(year)
check_leap_year(c)



