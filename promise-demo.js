

const calculate=(value)=>{
    return new Promise((resolve,reject)=>{
        //resolve= success
        //reject=error
        if(value) resolve(value+2);//resolve is returning some data
        else reject("Data is undefined");
    });
};
// method 1
//calculate(5)
//.then((data)=>console.log(data))
//.catch((error)=>console.log(error))
// if resolved it will execute .then callback
// if reject it will execute.catch call back

//Method II
const asyncfunc=async()=>{
    try{
        const data=await calculate(3);//await for the data
        console.log(data)
    
    }catch(error){
        console.log(error)
    }
}
asyncfunc()


