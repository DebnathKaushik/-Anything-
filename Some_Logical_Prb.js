

                // Q: given a string reverse each word in the sentence

//Approach 01---------


// function reverse_string(str_params) {

//     let split_string = str_params.split(" ") // given an array of strings
   
//     for(let i = 0;i<split_string.length; i++)
//     {
//         let split_string_2 = split_string[i].split("").reverse()
//         console.log(split_string_2)
//         let new_string = split_string_2.join("")
//         console.log(new_string) // final output
//     }
    
// }
// reverse_string("What is your name")



//Approach 02---------

/*
let str = "What is your name"

let new_str = str.split(" ").map((element)=>{
   return element.split("").reverse().join("")
})
console.log(new_str.join(" "));
*/



                // Q2 : How to check if an object  is an  array or not 


/*
function isArray(param)
{
    return Array.isArray(param)   // isArray -> gives true or false  
}

console.log(isArray([]))
console.log(isArray({}))
console.log(isArray(""))
*/




                    /*Q3 : How to empty an array in js without iterate 
                    loop or reset */


/*
function arr_empty(arr)
{
     let new_arr = arr
     new_arr.length = 0  // it gives array empty 
     console.log(new_arr)
}

arr_empty([1,2,3])
*/



                        //Q4 : A number integer or not 



//approach 01----------
/*             
let n = Number.isInteger(0.3)    // built in method 
console.log(n);
*/


//approach 02----------
/*
let m = 12.6
if(m%1 === 0)
{
    console.log("Integer");
    
}else{

    console.log("not integer");
    
}
*/




                            //Q5 : Duplicate an array 


// function duplicate_array(arr)
// {
//     let new_arr = arr.concat(arr)
//     return new_arr
// }                        
// console.log(duplicate_array([1,2,3,4]));




                        // Q6 : Reverse  Number 


/*
function reverse_number(num)
{
    let a = String(num)
    let b = Number(a.split("").reverse().join(""))
    console.log( b)
}
reverse_number(262534)
*/





                    // Q7 : a function that checks wheather a passed string palindrome or not 



/*
function isPalindrome(str)
{
    let reverse_str = str.split("").reverse().join("")  
    return str === reverse_str
}
console.log( isPalindrome("hawaawah"));
console.log( isPalindrome("pool"));
*/


// For sentence every word each check ---------------

/*
function isPalindromeSentence(str) {
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++) {
        let reversedWord = words[i].split("").reverse().join("");
        if(reversedWord !== words[i]) { 
            return false;  
        }
       
    }
    return true;  / All words are palindromes/
}

let str = "lool poop";
console.log(isPalindromeSentence(str)); 
*/




                        // Q8 : A function returns strings alphabetical order



/*                        
function alphaBeticalOrder(str) {
    return str.split("").sort().join("")
}
console.log(alphaBeticalOrder("superstar"));
*/





                // Q9 : in string every word first letter will be capital




// approach 01
function firstletterUpperCase(str) {
    let str1 = str.split(" ")
    for(let i=0;i<str1.length;i++)
    {
        let str2 = str1[i].split("").join("")
        console.log(typeof str2);"\n";
        
        let str3 = str2[0].toUpperCase() + str2.substring(1)
        console.log(str3) ;
        
    }
}
firstletterUpperCase("my name is kaushik")



//approach 02
// function d (string) {
//     let a = string.split(" ").map((e)=>
//     {
//      return e.at(0).toUpperCase() + e.substring(1)
//     })
//      return a .join(" ")
    
// }

// console.log(d("my name is kaushik"));





        //Q11 : In function to get the number of occurences of each letter in specified string


/*
function number_of_occurence_in_Letter(string) {
    let str = string.split("")
    let map_obj = {}

    str.forEach((i) => {
        if(map_obj[i] === undefined)
        {
             return map_obj[i] = 1
        }
        else{
            return map_obj[i] ++
        }
    });

    for(let key in map_obj)
    {
        console.log(`key ${key} occurs ${map_obj[key]}`)
    }

}

number_of_occurence_in_Letter("kkkkuuuhhp");
*/





                        //Q:12 : Add Array elements 


/*
function addArrayElements(arr){
    let sum = 0
for(let i = 0; i<arr.length; i++)
{
    sum = sum + arr[i]
}
console.log(sum)
}
console.log(addArrayElements([1,2,3,4]))
*/


            //Q-13 : Add only number from an mixed array with string,Number etc



/*
function addOnlyNumber(arr)
{   
    let sumofNumber = 0
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i]) === 'number')
        {
            sumofNumber += arr[i]
        }else{
            console.log(arr[i])
        }
        
    }
    console.log(sumofNumber)
}
addOnlyNumber(["name",1,2,true,5,6,false,10,22.5])
*/





    // Q-14 : loop an array of object and remove all object which don't have gender value"male"


/*
let arr = [
    {name:"a",gender:"male"},
    {name:"b",gender:"female"},
    {name:"c",gender:"female"},
    {name:"d",gender:"female"},
    {name:"e",gender:"male"},
]

    let count = 0
    arr.forEach(element => {
        if(element.gender!=="male") count++
    });

    for (let i = 1; i <= count; i++) {
        for(let j=0;j<arr.length;j++)
            {
                if(arr[j].gender!=="male")
                    {
                        arr.splice(j,1)
                    }
            }
        
    }
    
    
console.log(arr)
*/




            // Q-15 : Write a function that clone array 




/*
//approach - 1
function cloneArray(arr)
{
    let new_array = []
    arr.map((e)=>{
        new_array.push(e)
    })
    return new_array
}
let abcd = [1,2,3,4,"Hello"]
let new_ar = cloneArray(abcd)
console.log(new_ar);
console.log(new_ar.pop())
console.log(new_ar);



//approach - 2 
function CloneAray(arr)
{
    return [...arr]
}
console.log(CloneAray([1,2,3,4,"World"]))
*/




    //Q-16 : Write a function that returns nth numbers value from array Front to back



/*
function nthElementArrayfromFront(arr,nth)
{
    if(nth <= arr.length)
    {
        for(let i=0; i<nth; i++)
            {
                console.log(arr[i]) 
            }
    }else{
        console.log(`${nth} elements not here`)
    }
   
}
let value = nthElementArrayfromFront([100,20,30,40,50,60,70,80],8)
console.log(value);
*/



    //Q-16 : Write a function that returns nth numbers value from  array Back to Front




/*
function nthElementArrayfromBack(arr,nth)
{
    if(nth <= arr.length)
    {
        for(let i=0;i<nth;i++)
            {
                console.log(arr[arr.length-1-i]);
                
            }
    }else{
        console.log(`${nth} value doesn't exit`);
    }
    
}
nthElementArrayfromBack([10,20,30,40,50],4)
*/



                //Q-17 : Most frequent number is an array 



/*
function mostFrequentinArray(arr)
{

    let map_obj = {}
    arr.map((e)=>{
        if(map_obj[e] === undefined)
        {
            return map_obj[e] = 1
        }else{
            map_obj[e]++
        }
    })
    return map_obj
}
let val = mostFrequentinArray([1,2,1,3,69,1,4,982,6,3,4,251,1,2,3])
console.log(val)
*/





                        //Q-18 : Shuffle an array 




/*
function shuffleNumber(arr){

   let shuffle_area = arr.length
   while(shuffle_area > 0)
   {
    shuffle_area--;
    let indexToBeChange = Math.floor(Math.random() * shuffle_area )
    let temp = arr[shuffle_area]
    arr[shuffle_area]=arr[indexToBeChange]
    arr[indexToBeChange]=temp
   }
   return arr
   
}
console.log(shuffleNumber([1,2,3,4,5,6,7]))
*/



            // Q-19 : Union two arrays


/*
function unionOfTwoArray(arr1,arr2)
{
    return new Set([...arr1,...arr2])
}
console.log(unionOfTwoArray([1,2,3,4],[4,5,6,3]))
*/