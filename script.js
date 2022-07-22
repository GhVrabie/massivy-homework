// Exercise 1

let out1 = document.querySelector(".out-1");
let b1 = document.querySelector(".b-1");
let ar1 = ["Hi", 1, 3, false, "Task 1", true];

b1.onclick = function(f1) {
    out1.innerHTML = ar1;
}


// Exercise 2

let out2 = document.querySelector(".out-2");
let b2 = document.querySelector(".b-2");
let ar2 = ["Hi", 1, 3, false, "Task 2", true];

b2.onclick = function(f2) {
    out2.innerHTML = `${ar2[0]}, World!`;
}


// Exercise 3

let out3 = document.querySelector(".out-3");
let b3 = document.querySelector(".b-3");
let ar3 = ["Hi", 1, 3, false, "Task 3", true];

b3.onclick = function(f3) {
    for(let i = 0; i < ar3.length; i++) {
        out3.innerHTML = ar3.length;
    }
}


// Exercise 4

let out4 = document.querySelector(".out-4");
let b4 = document.querySelector(".b-4");
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

b4.onclick = function(f4) {
    for(let i = 0; i < ar4.length; i++) {
        out4.innerHTML = ar4[0] + " " + ar4[3] + " " + ar4[8];
    }
}


// Exercise 5

let out5 = document.querySelector(".out-5");
let b5 = document.querySelector(".b-5");
let ar5 = [0, 1, 2, 3, 4, 5, 6, 7];

b5.onclick = function(f5) {
    for(let i = 0; i < ar5.length; i++) {
        out5.innerHTML = ar5[0] + ar5[2] + ar5[3];
    }
}


// Exercise 6

let out6 = document.querySelector(".out-6");
let b6 = document.querySelector(".b-6");
let ar6 = [{ name: "Gheorghe" }, { zodiac: "Aquarius" }, { birthday: "22" }, { birthmonth: "January" }];
let space = " ";

b6.onclick = function(f6) {
    for(let i = 0; i < ar6.length; i++) {
        out6.innerHTML = `${ar6[0].name}${space}${ar6[1].zodiac}${space}${ar6[2].birthday}${space}${ar6[3].birthmonth}`;
    }
}



// Exercise 7

let out7 = document.querySelector(".out-7");
let b7 = document.querySelector(".b-7");
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

b7.onclick = function(f7) {
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietnam';
    for(let i = 0; i < ar7.length; i++) {
        out7.innerHTML += ar7[i] + " ";
    }
}


// Exercise 8

let out8 = document.querySelector(".out-8");
let out81 = document.querySelector(".out-8-1");
let b8 = document.querySelector(".b-8");
let ar8 = [1, 10, 8, 2, 7, 20];

b8.onclick = function(f8) {
    ar8.splice(3, 0, 3.14, 17);
    ar8.splice(6, 0, 5);
    for(let i = 0; i < ar8.length; i++) {
        out8.innerHTML += ar8[i] + "-";
    }
        out81.innerHTML = "<p>Длина массива: " + ar8.length + "</p>";
}


// Exercise 9

let out9 = document.querySelector(".out-9");
let b9 = document.querySelector(".b-9");
let ar9 = [100, 200, 300, 400, 700, 121];

b9.onclick = function(f9) {
    for(let i = 0; i < ar9.length; i++) {
        out9.innerHTML = ar9[5];
    }
}


// Exercise 10

let out10 = document.querySelector(".out-10");
let b10 = document.querySelector(".b-10");
let ar10 = [100, 200, 300, 400, 700, 121];

b10.onclick = function(f10) {
    out10.innerHTML = ar10[0] + ar10[ar10.length -1];
}


// Exercise 11

let out11 = document.querySelector(".out-11");
let b11 = document.querySelector(".b-11");
let ar11 = [2,3,4,5,6,7];

b11.onclick = function(f11) {
    let secondEl = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = secondEl;
    for(let i = 0; i < ar11.length; i++) {
        out11.innerHTML += ar11[i] + " ";
    }
}


// Exercise 12

let out12 = document.querySelector(".out-12");
let b12 = document.querySelector(".b-12");
let ar12 = ['test', 'west', 'list', 'class', 'best'];

b12.onclick = function(f12) {
    let startEl = ar12[0];
    ar12[0] = ar12[ar12.length -1];
    ar12[ar12.length -1] = startEl;
    for(let i = 0; i < ar12.length; i++) {
        out12.innerHTML += ar12[i] + " ";
    }
}


// Exercise 13

let out13 = document.querySelector(".out-13");
let b13 = document.querySelector(".b-13");
let ar13 = ['test', 'west', 'list', 'class', 'best'];

b13.onclick = function(f13) {
    for(let i = 0; i < ar13.length; i++) {
        out13.innerHTML += i + " " + ar13[i] + " ";
    }
}


// Exercise 14

let out14 = document.querySelector(".out-14");
let b14 = document.querySelector(".b-14");
let ar14 = [1, 2, 3, 'hello', 66];

b14.onclick = function(f14) {
    for(let i = ar14.length -1; i >= 0; i -= 1) {
        out14.innerHTML += ar14[i] + " ";
    }
}


// Exercise 15

let out15 = document.querySelector(".out-15");
let b15 = document.querySelector(".b-15");
let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

b15.onclick = function(f15) {
    for(let i = 0; i < ar15.length; i++) {
        if(ar15[i] > 0) {
            out15.innerHTML += ar15[i] + " ";
        }
    }
}


// Exercise 16

let out16Odd = document.querySelector(".out-16-odd");
let out16Even = document.querySelector(".out-16-even");
let b16 = document.querySelector(".b-16");
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

b16.onclick = function(f16) {
    for(let i = 0; i < ar16.length; i++) {
        if(ar16[i] % 2 == 0) {
            ar16_even.push(ar16[i]);
        } else if(ar16[i] % 2 !== 0) {
            ar16_odd.push(ar16[i]);
        }
    }
    console.log(ar16_even);
    console.log(ar16_odd);
}


// Exercise 17

let out17 = document.querySelector(".out-17");
let b17 = document.querySelector(".b-17");
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

b17.onclick = function(f17) {
    let count = ar17[0];
    for(let i = 0; i < ar17.length; i++) {
        if(ar17[i] > count) {
            out17.innerHTML += ar17[i] + " ";
        }
    }
}


// Exercise 18

let out18 = document.querySelector(".out-18");
let b18 = document.querySelector(".b-18");
let ar18 = [15,24,13,78,21,4,45,67];

b18.onclick = function(f18) {
    let max = ar18[5];
    for(let i = 0; i < ar18.length; i++) {
        if(ar18[i] > max) {
            max = ar18[i];
        }
    }
    out18.innerHTML = max;
}



// Exercise 19

let out19 = document.querySelector(".out-19");
let b19 = document.querySelector(".b-19");
let ar19 = [15,424,313,78,241,4,45,67];

b19.onclick = function(f19) {
    let min = ar19[1];
    for(let i = 0; i < ar19.length; i++) {
        if(ar19[i] < min) {
            min = ar19[i];
        }
    }
    out19.innerHTML = min;
}


// Exercise 20

let out20 = document.querySelector(".out-20");
let b20 = document.querySelector(".b-20");
let ar20 = [4,5,6,7,8,9,10];

b20.onclick = function(f20) {
    let count = 0;
    for(let i = 0; i < ar20.length; i++) {
        count = count + ar20[i];
    }
    out20.innerHTML = count;
}






// CLASSWORK

// let user = "John";
// let age79 = 43;
// let idNumber = 22267;

// let usArr = ["John", 43, 22267];

// console.log(usArr);
// console.log(usArr[0]);
// console.log(usArr.length);

// usArr[0] = "Dave";
// console.log(usArr);


// let role = ["Manager", "HR", "Project manager", "Office manager"];
// console.log(role);
// role[999] = "Uasea"
// console.log(role[999]);



// let a = [1, 2, 3, 4];
// console.log(a);
// let firstEl = a[0];
// a[0] = a[3];
// console.log(a);
// a[3] = firstEl;
// console.log(a);



// let out4 = document.querySelector(".out-4")

// let b = [3, 6, 9, 89, 33, 11, 15];

// let max = b[0];

// for(let i = 0; i < b.length; i++) {
//     if(b[i] > max) {
//         max = b[i];
//     }
// }

// out4.innerHTML = "<p>MAX: " + max + "</p>";



// let out4 = document.querySelector(".out-4")

// let b = [3, 6, 9, 89, 33, 11, 15];

// let sum = 0;

// for(let i = 0; i < b.length; i++) {
//     sum = sum + b[i];
// }

// out4.innerHTML = "<p>Сумма: " + sum;