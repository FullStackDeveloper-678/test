const fs = require('fs');
const folder_1 = './folder_name1/';
const folder_2 = './folder_name2/';
const folder_3 = './folder_name3/';

async function executeJS(file,folder,i){
    const  my_function = require(`${folder_1}${file}`) ;
    return await my_function(folder,i);
}
function main(){
    console.log("this is main function !!!")
}

(async () => {
    const files = fs.readdirSync(folder_1)
        for(let i=0; i<files.length; i++){
            const data = await executeJS(files[i],"first folder",i);
        }
    const files_2 = fs.readdirSync(folder_2)
        for(let i=0; i<files_2.length; i++){
            const data = await executeJS(files_2[i],"second folder",i);
        }
    const files_3 = fs.readdirSync(folder_3)
        for(let i=0; i<files_3.length; i++){
            const data = await executeJS(files_3[i],"third folder",i);
        }
    //main function
    main();
})();
