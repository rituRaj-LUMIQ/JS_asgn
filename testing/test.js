console.log('here');
setTimeout(()=>{
    console.log(1)
},1000)


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
async function call (){
    const res = await fetch('https://api.publicapis.org/entries')
    const movies = await res.json();
    console.log('hello -> ',movies)
}

console.log(1)
call();
console.log(2)