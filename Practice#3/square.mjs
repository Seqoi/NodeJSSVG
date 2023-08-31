export default class Square{// common js
    constructor(w){
        this.widht = w
    }
    area() {return  Math.pow(this.widht,2)}

    someMethod(){
        return new Promise (resolve =>{
            setTimeout(() => {
                resolve(`ok`);
            },2000);
        })
    }

} 