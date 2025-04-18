
                                // ****** Cache Data with custom time *****



 // create cache_obj from (Map class / Map constructor)
const cache_obj = new Map()           
// Set Cache
function setCache(key,value,time){     // cause Map obj store (Key-value)
    cache_obj.set(key,{
        data:value,
        expiry_date: Date.now()+time
    })
}
// Get Cache
function getCache(key){
    const valid_cache = cache_obj.get(key)
    if(!valid_cache) return null
    else if(Date.now() > valid_cache.expiry_date){
        cache_obj.delete(key)
        return null
    }
    return valid_cache.data
}


setCache("user1","kaushik",3000)  //set key,value,time
console.log(`Instant: ${getCache("user1")}`) 

setTimeout(() => {
    console.log("After 2 sec:", getCache('user1'));   //check after (2) sec
}, 2000);
setTimeout(() => {
    console.log("After 4 sec:", getCache('user1'));   //check after (4) sec --> [null cause Cache Expire]
}, 4000);