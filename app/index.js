//=========================================================================
//test destructuring assignments
let mobil = ['avanza', 'teana', 'xpander'];
let [toyota, nissan, mitsubishi, renault] = mobil;
console.log(toyota, nissan);
console.log(toyota, nissan, mitsubishi, renault); //alphard will be undefined

let sekolah = { namasekolah: 'YPPI', tingkatan: 'SD', murid: 2000 };
let {namasekolah, tingkatan} = sekolah;
console.log(namasekolah, tingkatan);

//=========================================================================
//test spread operator and rest parameters
let arrayA = [30, 50, 70];
let arrayB = [10, ...arrayA, 90];
console.log(arrayB);

function testSpread(...a){
    console.log(a);
}
testSpread(1,2,3,4,5,6,7,8,9); //we can assign so many value

//=========================================================================
//test template literals
let salam = 'Assalammmualaikum';
let nama = `${salam} Arief`;
console.log(nama);


//=========================================================================
//test let and const
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