// stage 1 :- find pizza order docs by their size.
// stage 2:- group remaining docs by pizza name and cal total quantitiy

db.orders.aggregate([{$match:{size:'medium'}},{$group:{_id:"name",totalQuantity:{$sum:"$quantity"}}}]);

// take reference from cars collecitons inside mydb database.

db.cars.aggregate([{$group:{_id:"$fuel_type",totalCars:{$sum:1}}}]);

//$match :-

// hundai cars having engine of more than 1200cc
db.cars.aggregate([{$match:{'maker':"Hyundai","engine.cc":{$gt:1200}}}]);
//or
//wrong one:-
db.cars.aggregate([{$and:[{'maker':'Hyundai'},{'engine.cc':{$gt:1200}}]}]); // wrong way see $and operator is a query opeator not
// a stage pipeline operator so query operator ko hamesa pipeline stage operator ke andar hi use karte hai....
// note :-
//In an aggregation pipeline, every top-level object in the array must be a valid stage (like $match, $group, or $project).
//  You cannot place $and,$or any query operator directly in the array
// so $and directly kabhi nhi aayega hamesa $match,$group etc ke andar hi use hoga ... so if you want to use $and operator then use like below one see :-
//correct one:-
db.cars.aggregate([{$match:{$and:[{"maker":"Hyundai"},{"engine.cc":{$gt:1200}}]}}]);

// find total no. of hyundai cars.
db.cars.aggregate([{$match:{"maker":"hyundai"}},{$group:{_id:null,totalCount:{$sum:1}}}]);
//or
db.cars.aggregate([{$match:{"maker":"Hyundai"}},{$count:"koi bhi field ka naam jisme ki count ko store karna ho e.g. totalCount"}]);

//count no. of diesel and petrol cars of Hyundai brand.
//wrong one:-
db.cars.aggregate([{$match:{'maker':'Hyundai',$or:[{'fuel_type':'Petrol'},{'fuel_type':'Diesel'}]}},{$count:'toalCount'}]); // but iss se dono ka mila ke aa jayega but hame to alag alag count chahiye dono ka so this is wrong solution
//correct one :-
db.cars.aggregate([{$match:{'maker':'Hyundai'}},{$group:{_id:"$fuel_type",totalCount:{$sum:1}}}]);

//$project :-

// find all the hyundai cars and only show maker, model and fuel_type details
db.cars.aggregate([{$match:{'maker':'Hyundai'}},{$project:{'maker':1,'fuel_type':1,'model':1}}]);

//list down all the hyundai cars and print the names as maker+model i.e. carName: Hyundai Creta.
db.cars.aggregate([{$match:{'maker':'Hyndai'}},{$project:{fullcarName:{$concat:["maker","","model"]}}}]);
//$sort :-

// for the above output sort the data based on model.
db.cars.aggregate([{$match:{'maker':'Hyundai'}},{$project:{'maker':1,'fuel_type':1,'model':1}},{$sort:{'model':1}}]);

//group the cars based on makers and then sort based on count(no. of cars).
db.cars.aggregate([{$group:{_id:'$maker',countCars:{$sum:1}}},{$sort:{'countCars':-1}}]);

//$regexMatch :-

// add a flag isDiesel = true/false for each car
db.cars.aggregate([{$project:{'model':1,isDiesel:{$regexMatch:{input:'$fuel_type',regex:'Die'}}}}]);

//$add :-

//print all the cars model and price with hike of 55000(similarly we can use $subtract, $divide etc. too).
db.cars.aggregate([{$project:{'model':1,price:{$add:['$price',55000]}}}]);

//print details of cars with details in lakhs (e.g, 15 lakhs);
db.cars.aggregate([{$project:{'model':1,price_in_lakhs:{$divide:['$price',100000]}}}]);

// calculate total service cost of each hyundai car.
db.cars.aggregate([{$match:{'maker':'Hyundai'}},{$project:{total_service_cost:{$sum:"$service_history.cost"}}}]);

//------------------------------------------More Problems using students collection ------------------------------------------

/**
 * VVI
 Find all students who have exactly the same number of hobbies as their age divided by 10.
 */

 /**
  Find students where their first job duration (at index 0) is greater than their second job duration (at index 1).
  */

/*
Find students where:
If they are 'male', their age must be over 40.
If they are 'female', their age must be over 30.
*/

/**
 Find students where the SUM of their first two scores is greater than 100.
 */

 //-----------------------------------------------------------$filter (use students collections)--------------------------------------------------------------------

 /**
  1) Find all students and create a new field called passingScores that only contains numbers from the scores array that are greater than or equal to 40.

  2) Inside the experience array, filter out any job where the duration is less than 1 year.

  3) From the coursesWithDetails array, only keep the courses that have the name "mongoDB" or "nodeJS".

  4) Find students and return only their hobbies that start with the letter "S" (like "Singing" or "Surfing").

  5) Filter the scores array to only keep values that are greater than the student's own average score.
  */
