//VVI topic practice more this topic

let myDate = new Date(); // it is also an object. so data type =  object.
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let mycreatedDate = new Date(2023,0,23); // yyyy/mm/dd , month 0 se start hota hai. creating own date
// let mycreatedDate = new Date("2023-01-23"); // isme string me and yha month 01 se start hoga
let mycreatedDate = new Date("09-21-2023"); // isme string me and yha month 01 se start hoga
console.log(mycreatedDate.getTime());//milli seconds me value dega
console.log(mycreatedDate.toString());

let myTimestamp = Date.now();
console.log(myTimestamp);// milli seconds me value dega
console.log(myTimestamp/1000);// seconds me value dega

let newDate = new Date();
console.log(newDate.getDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
