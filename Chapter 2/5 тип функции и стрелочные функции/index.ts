function hello (){
    console.log("Hello TypeScript");
};

let message: ()=>void = hello;
message();
