const my_function = async(data,result) => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(data+result);
          resolve(result);
        }, 3000);
      });
    // await setTimeout(function(){
    //     console.log(data+result+"1");        
    // }, 3000);    
    // return await result;
}
module.exports = my_function;