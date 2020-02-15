const name = "Raffi";

function hello(name) {
    let message = "Halooo...";
    console.log(message, name);
}

function greeting() {
    let message = "Apa kabar";
    //name = "Dodi"; <= will throw error
    console.log(message, name);
}

hello(name);
greeting();

//=========================================================================
//test webpack
console.log('hello webpack');
console.log('show in browser');