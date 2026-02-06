// Task -1
const user = {
 name: "Alex",
 address: {
 city: "Berlin"
 }
}
let show =user.name;
console.log(show);  
let show1 =user.address.city;
console.log(show1);
let show2 =user?.number;

 show2= undefined;
let disply= user?.number || "not provided";
console.log(disply);

// Task-2
let isLoggedIn = false;
let show3 = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(show3);

// Bouns
let isadmin = true;
let show4 = isadmin ? "Welcome admin." : "welcome user.";
console.log(show4);

// Task-3
let isPrice =null || undefined;;
let show5 = isPrice ?? "Price not available.";
console.log(show5); 



// Task-5
let hasMony = true;
let monyWithPromise = new Promise((resolve, reject) => {
    if (hasMony) {
        resolve("Coffee bought!");
    } else {
        reject("enough mony.");
    }
});

monyWithPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

