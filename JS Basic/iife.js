(function chai(){ // named iife
    console.log("DB is Connected");
})();

(()=>{      // unnamed iife
    console.log("DB is Connected");
})();

((name)=>{
    console.log(`My name is ${name}`)
})("Nilesh");

