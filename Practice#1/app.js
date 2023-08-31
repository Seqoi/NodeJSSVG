console.log('Hello World')
console.log('Changes')

const art = require('ascii-art');
art.font("Stop Play!", 'Doom', (err, rendered)=>{
    if(!err){
        console.log(rendered);
    }
    //if err, err is the error that occured
    //if !err rendered is the ascii
});