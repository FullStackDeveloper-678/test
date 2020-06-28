const my_function = async(data,result) => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(data+result);
          resolve(result);
        }, 1000);
      });
}
module.exports = my_function;