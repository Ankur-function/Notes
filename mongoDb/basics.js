/**
 * Steps to go to mongoDB shell
 * 1) mongosh
 * 2) now choose you db.(e.g use mydb)
 */

// 1) how to insert any doc
db.students.insertOne({name:"Amit kumar",age:15}) // here db is current using database and student is the collection name

// 2) search all docs in a collection
db.students.find()
// with filters :- find(filter) filter should be in json format.e.g. {age:11}
// e.g. .find({age:{$gte:12,$lte:20}})

// 3) find one doc.
//    findOne(fillter, options)
db.students.findOne({name:"Shyam"});// here {name:"Shyam"} is a filter

/**
 * Note (find vs findOne):-
 * 
 find() returns a collection (a list), while findOne() returns a single item.

a) The "Cursor" vs. The "Document"
When you use find(), you aren't immediately getting the data. You are getting a Cursor (or a Query object in Mongoose).
This object is "chainable," meaning you can keep adding instructions (like limit, sort, or skip) before the database
actually finishes the search.

b) When you use findOne(), the database executes the search immediately and returns a Plain JavaScript Object (or null).

c) e.g. collectionName.find().limit(5) // works well here
        collectionName.findOne().limit(1) // throws an error
 */

// 4) update one doc.
db.students.updateOne({name:"Shyam"},{$set:{idCards:{hasPanCard:false, hasAdhaarcard:true}}})

/**
 * here while updating we can add new fields too. and {name:"Shyam"} is a filter in which doc i want to update.
 * The $set operator in MongoDB is used to update the value of a specific field or fields in a document without replacing the entire document.
 * If the specified field does not already exist, $set will add it to the document with the given value
 
 * $set vs. Document Replacement :-
It is crucial to use $set when you only want to modify specific parts of a document. If you perform an update without using an 
update operator like $set (e.g., db.collection.update({_id: 1}, {newField: "value"})), you will replace the entire existing
document with the new one, permanently deleting any fields not included in the new document. 
 */

// 5) update many documents with one command :-
db.students.updateMany({},{$set:{hobbies:['Anime','Cooking','Singing']}}); // here {} means zero filter so update all
db.students.updateMany({age:{$gt:15,$lt:35}},{$set:{age:105}});// here {age:{$gt:15,$lt:35}} is just a filter

// 6) insertMany()
db.students.insertMany([{name:"Ram",age:"15"},{name:"shyam",age:"15"},{name:"Aman",age:"15"},{name:"Kam",age:"15"}])

// 7) deleteOne()
db.students.deleteOne({age:25});

// 8) deleteMany()
db.students.deleteMany({age:25});
db.students.deleteMany({});// delete all

// 9) Projection
db.students.find({},{name:1,_id:0}) // by doing like this only name field will show from all documents.


// 10) Validation

db.createCollection("nonfiction",{
    validator: {
     $jsonSchema:{
        required: ["name","price"], // field names
        properties:{// properties of these fields
            name:{
                bsonType: 'string',
                description: "Must be a string and required"
            },
            price:{
                bsonType:'number',
                description: "Must be a number and required"
            }
        }
     }
    },
   validationAction: "error"
})

// 11) want to change validation later

db.runCommand({
    collMod: 'nonfiction',
    validator: {
     $jsonSchema:{
        required: ["name","price","authors"], // field names
        properties:{// properties of these fields
            name:{
                bsonType: 'string',// type of the field
                description: "Must be a string and required"
            },
            price:{
                bsonType:'number',// type of the field
                description: "Must be a number and required"
            },
            authors:{
                bsonType:'array',// type of the field
                description: "Must be an array and is required",
                items:{// this defines the type of array
                    bsonType:'object', // means array of objects,
                    required:["name","email"],
                    properties: {
                        name:{
                            bsonType:'string'
                        },
                        email:{
                            bsonType:'string'
                        }
                    }
                }
            }
        }
     }
    },
   validationAction: "error"
})

// 12) comparison operators {$eq,$ne,$lte,$lt,$in,$nin}
/**
 *  // sample data for below queries:-
 [
 {
    _id: ObjectId('697b58cdee1ea0c61c69e33b'),
    name: 'Robert',
    age: 19,
    hobbies: [ 'Series', 'Movies', 'Travel' ],
    idCards: { hasPanCard: true, hasAdhaarCard: false }
  }
]
 */
db.students.find({age:{$eq:19}}); // or db.students.find({age:19})
db.students.find({age:{$ne:19}});
db.students.find({age:{$lte:19}});
db.students.find({age:{$lt:19}});
db.students.find({age:{$in:[19,49,9,17,5,15]}}); //in case of $in operator we give values inside list and then it will fetch docs that satisfy any of these values.
db.students.find({age:{$nin:[19,49,9,17,5,15]}}); //in case of $in operator we give values inside list and then it will fetch docs that satisfy any of these values.
db.students.find({hobbies:{$eq:"Series"}}); //or db.students.find({hobbies:"Series"});
db.students.find({'idCards.hasPanCard':{$eq:true}}); // here to search nested docs we must apply it under '' else query will not work.

// 13) logical operators {$or,$nor,$and}

// here syntax is different compare to comparsion operators.
// $or,$and:- it's value is list of conditions i.e. $or/$and:[{condn1},{condn2},....]
db.students.find({$or:[{age:{$lte:20}},{age:{$gte:50}}]});
db.students.find({$nor:[{age:{$lte:20}},{age:{$gte:50}}]});// excludes the conditions
db.students.find({$and:[{age:{$lte:21}},{hobbies:{$eq:'Series'}}]});

// 14) Elementry query operators {$exists,$type}

// $exists :- when we need to check that this particular field exists in a document.it can have any value doesn't matter.
db.students.find({hasMacbook:{$exists:true}});

//$type :- when we need to fetch docs based on it's data type(like ,bool,string.object etc).
db.students.find({hasMacbook:{$type:"bool"}});

 // here db.students.find({hasMacbook:{$exists:{$eq:true}}}) will not work because $exists or $type doesn't support $eq.

 // 15) Evaluation query operators($expr,$jsonSchema,$regex,$text,$mod)

 /**
  $expr:- It allows mongodb expression as it's argument and returns the result of the expression. we can use this operator to perform comparisons,
  arithematic operations, and other types of expressions within the query pipeline.
  */
 db.collecitonName.find({
    $expr:{
        $gt:["$field1","$field2"] // means find those docs where field1>field2.
    }
 });

 /**
  * $regex:- regular expression.if need to match any pattern
  * $regexMatch:{
  *   input: <field name jispe regex check karna hai>,
  *   regex: <your regex pattern>,
  *   options: "options" //optional , e.g. "i" for case insensitive.
  * }
  */
db.students.find({name:{$regex:'^N'}});// find names that start with 'N'
/**
  $text:- To use the $text operator,you must create a text index on the fields you want to search.A text index allows to search for specific words and phrases
  in the indexed fields and return documents that match the search criteria.
  (means $text opeartor wahi pe use hoga, ussi field pe use hoga jis field ko humne text index kiya hua hai)
  */
db.students.createIndex({bio:"text"}); // yha text index create kar rhe hai for bio field.
db.students.find({$text:{$search:"teacher"}}); // ab yha search kar rhe hai 'teacher' ko so ye bio field me hi search karega.

/**
 * $mod:- performs a modulo operation on the value of a field and select docs with a specified result.
 * we can use this operator to find even/odd evaluation.
 */
db.collectionName.find({
    quantity:{
        $mod:[3,0]// matlab wo saare docs lao jisme ki field 'quantity' ho and uski value ko 3 se divide karne par remainder '0' aaye.
    }
})
// or find all the students whose age is divided by 5.

db.students.find({age:{$mod:[5,0]}});

// 16) Quering arrays in mongodb
[// sample data for pratice
  {
    _id: ObjectId('697b58cdee1ea0c61c69e33b'),
    name: 'Robert',
    age: 19,
    hobbies: [ 'Series', 'Movies', 'Travel' ],
    idCards: { hasPanCard: true, hasAdhaarCard: false },
    bio: 'He is a teacher',
    experience: [
      { company: 'Amazon', duration: 3 },
      { company: 'Accenture', duration: 11 }
    ]
  }
]

db.students.find({hobbies:"Series"});// find students whose hobbies are 'Series'.
db.students.find({'experience.company':'Amazon'});// find students who has worked in amazon.
db.students.find({'experience.company':'Amazon'}).size();// find how many students has worked in amazon.
db.students.find({experience:{$size:3}});//find all the students who has exactly 3 years of experience.

// note:- above $size operator directly will not work for $gte or any comparison operator we will have to use with $expr in that case.
db.students.find({$expr:{$gte:[{$size:'$experience'},2]}});
// still above query will only work if experience field exist in a doc else it will throw an error.
db.students.find({$and:[{experience:{$exists:true}},{$expr:{$gte:[{$size:'$experience'},2]}}]});// yha pe pehle check kar rhe hai ki experience field
// must exists then only we will do $expr part.

db.students.find({$and:[{hobbies:'walking'},{hobbies:'reading'}]}); // how many students whose hobbies are walking and reading.
db.students.find({hobbies:{$all:["walking","reading"]}}); // works same as above but better one. always prefer this over above one.

// Note :-
/**
 * [
  {
    _id: ObjectId('697b58cdee1ea0c61c69e33b'),
    name: 'Robert',
    age: 19,
    hobbies: [ 'Series', 'Movies', 'Travel' ],
    idCards: { hasPanCard: true, hasAdhaarCard: false },
    bio: 'He is a teacher',
    experience: [
      { company: 'Amazon', duration: 3 },
      { company: 'Accenture', duration: 11 }
    ]
  }
]

 */
db.students.find({$and:[{'experience.company':'Amazon'},{'experience.duration':{$gte:10}}]})// documents that have atleast a experience in 'amazon' and for 3.

// see above data and query. here i wrote company should be amazon and duration should be gte 10. but still above query returns above data.
// so actually what is happening here is $and operators search company names in the students collection and when it matches with 'amazon' then 
// it selects that docuement and then as per next exp i.e.$gte:10 it searches in the complete doc and not with that specific object, where amazon is present.


// so to match query in that specific element or object we need to use different query i.e. $elemMatch


// $elemMatch:- (when we need to query in that specific element or object).

db.students.find({experience:{$elemMatch:{duration:{$gte:5},company:'Amazon'}}});

// sort() :-
db.students.find({}).sort({age:-1});// jis bhi field se sort karna ho usko sort ke andar dal kar 1(asc) or -1(desc) kar do.

// $inc,$min,$max,$mul,$unset,$rename,upsert :-

//increase age of all students by 2.
db.students.updateMany({},{$inc:{age:-2}});// first one is filter so it will decrease all students age by 2

//increase age of robert to 30 but only if his age is less than it.
db.students.updateOne({name:'Robert'},{$max:{age:30}});// diff between $set and $max is that max will only update if robert current age is less than 30 but $set will update in any condition.

//decrease age of robert to 10 but only if he has age lesser than it.
db.students.updateOne({name:'Robert'},{$min:{age:20}})// similarly $min will only work if current age is greater than 20. if robert already has less than 20 age then it will do nothing.

//multiply robert age by 2.
db.students.updateOne({name:'Robert'},{$mul:{age:2}});

//Remove the age field from robert
db.students.updateOne({name:'Robert'},{$unset:{age:'anything put doesnt matter'}});

//rename age field in to studentAge
db.students.updateMany({},{$rename:{age:'studentAge'}});// this will update all docs age field in to studentAge.

//update Golu age if it exist else create doc
db.students.updateOne({name:'Golu'},{$set:{age:5}},{upsert:true});//update golu age if it exist else upsert:true will create doc with these values.

/**
 * VVI
 * Update Nested arrays and use $pop,$pull,$push,and $addToSet operators
 */

//for all experiences lesser than and equal to 4 year for all students add a new field neglect:true in that object itself where experience details are.
db.students.updateMany({experience:{$eleMatch:{duraton:{$lte:4}}}},{$set:{'experience.$.neglect':true}});
//yha pe {'experience.$.neglect':true} yha pe experience.$ ka matlab hai first element of experience array.and jab .neglect:true kar diye to fir
// ek nya field usi object me add kar dega.

db.students.updateMany({experience:{$elemMatch:{duration:{$lte:4}}}},{$set:{'experience.$[].neglect':1}});
// yha pe experience array ke saare objects me new field create kar dega i.e. neglect:1

db.students.updateMany({experience:{$elemMatch:{duration:{$lte:4}}}},{$set:{'experience.$[ele].neglect':2}},{arrayFilters:[{'ele.company':'Amazon'}]});
// isme kya hai ki maan lo experience array ke andar bahut saare objects hai aur mujhe first yaa fir sabko update nhi karna hai only selective
// items ko hi update karna hai inside experience array to uss me jis item ko bhi update karna hai uske liye condn laga diya hai
//$[ele] means hum har ek object ko access kar rhe hai.
//{arrayFilters:[{'ele.company':'Amazon'}]} yha pe wo wo object jisme company:amazon ho sirf usme neglect: 2 kar do.


//$push (when we need to push new object or element in an array)
db.students.updateOne({name:'Robert'},{$push:{experience:{company:'Meta',duration:6}}});

//$addToSet
db.students.updateOne({name:'Robert'},{$addToSet:{experience:{company:'Meta',duration:6}}}); // ye add nhi karega agar bilkul same object pehle se hoga experience array me to

//$pull
db.studens.updateOne({name:'Robert'},{$pull:{experience:{company:'Meta',duration:6}}})// ye saara aisa doc ko remove kar dega experience array se

//$pop
db.students.updateOne({name:'Robert'},{$pop:{experience:1}})// ye last element ho hata dega experience array se. agar -1 kiye to first wale ko.

/**
 * Indexing :-
 * 
  in normal queries like db.collectionName.find({name:john}); it searchs one by one each document in the collection.just like linear search in an
  array.which is slower.

  but when we do indexing of the field in a document then searching becomes very fast.just like how we do binary search in DSA.
  so indexing creates a sperate data structure(B-Tree) record of that field in a sorted format apart from that collection.
  e.g. when we do indexing of a 'name' field from the collection. then all the values of name fields with their memory location from that collection will be stored in to a 
  separate data structure in a sorted format. so now searching becomes easy.

  Cons :-
  1) it takes more storage.
  2) slows during write performance (because ab do jagah write karna padega na pehle to normal doc me fir index wale data structure(B-tree) me)

  conclusion:- read intensive task me indexing is better. but write wale task me indexing slow kar degi process ko.

  Types of indexes in mongoDB :-
  1) Single field indexes
  2) Compound indexes
  3) Text indexes
  4) Multi key indexes
  When not to use indexing :-
  1) When the collection is small.
  2) When the collection is frequently updated.
  3) When the queries are complex.(multiple fields).
  4) When the collection is large(make less indices).
 */

// 1) single field indexes :-
db.students.createIndex({age:1}); // creating an index. 1 is for sorting in ascending way inside data structure
db.students.getIndexes();// fetching all indexes.
db.students.dropIndex("name of the index");// deleting an index.

// 2) Compound indexes :-
db.students.createIndex({age:1,gender:1});// here order matters. so sabse pehle sort honge by age and then by gender. 

// Partial Filters Indexes :-
db.students.createIndex({age:1},{partialFilterExpression:{age:{$gt:22}}});// yha pe kya hoga ki saare age values ko data structure me nhi dalega
// balki only >22 wale ko dalega. kyu ki 22 se kam wale pe maan lo ki mujhe query karne ki need nhi hai so faltu me kyu dale usko DS me.
// aise hi aur koi condn bhi laga sakte hai partialFilterExpression ke andar apne need ke according.

db.students.createIndex({expires:1},{expireAfterSeconds:3600});// is se ye index apne aap itne time ke baad delete ho jayega.

// 4) Multi key indexes :-
// a multi key index is an index that can be created on an array field.
db.students.createIndex({hobbies:1});// remember ki array pe indexing karne se space bhut jyada consule hoga.

//3) Text index :-
/**
 * [
  { bio: 'He is a manager and taveller' },
  { bio: 'He is a teacher and blogger' },
  { bio: 'He is a manager' },
  { bio: 'He is a teacher' },
  { bio: 'He is a teacher' }
]

for e.g. above data hai isme main chahta hu ki bss main 'manager' search karu aur automatically query mujhe manager se related saare docs de de.
just like google me search krte time suggestions aate hai. 

Note :-
1) single text index per collection.(means ek collection me sirf ek hi text index banega but remember uss ek index me hi hum multiple fields kon include
   kar sakte hai).
2) Tokenization and Stemming :- means suffix letters hata deta hai words se. e.g. singing---->sing, hobbies---->hobby, games----->game.
3) Relevance Score :-    
 */
db.students.createIndex({bio:"text",name:"text"});// creating text indexes and here i have added multiple fields in to one index.
db.students.find({$text:{$search:"teacher"}}); // yha $text means mujhe text index me search karna hai. aur jisko search karn hai wo $search ke saamne.


/**
 * Aggregation :-
 * 
 * It groups the data from multiple documents in to a single document based on the specified expression.
 * 
 * The aggregation process in mongoDB consists of several stages each stage transforming data in some way.
 * The output of one stage is fed as the input to the next stage, and so on, until the final stage produces the desired result.
 * MongoDB provides several built-in aggregation pipelines stages to perform various operations on data , such as $group,$sum.$avg,$min,$max etc.
 * We can create pipeline as much as we want.
 */

db.collecionName.aggregate(pipeline,options);// basic syntax of aggregation.here pipeline is a array of different operations.

db.students.aggregate([{$match:{age:35}}]);
db.students.aggregate([{$group:{_id:"$age"}}]);
// here the $group operator groups docs by age field, creating a new document for each unique age value. 
// the _id field in the group stage specifies the field based on which the docs will be grouped.


//$group :- $group :{_id:wo field jiss se group karna hai,field 1(jo result me chahiye): expression, field 2(jo result me chahiye): expression..........etc};

// group teachers by age and show all students names per age group
db.students.aggregate([{$group:{_id:"$age", names:{$push:"$name"}}}]);// here names is an array. hum ab ek group me aa gye hai, now uss group ke andar 
// jitne bhi documents hai sabse name ki value nikal kar names naam ke array me push karte jaa rahe hai.

// group teachers by age and also show complete document per age group.
db.students.aggregate([{$group:{_id:"$age",pooraDocument:{$push:"$$ROOT"}}}]); // here $$ROOT value is a reference to the current document being processed in the pipeline,which represents complete document.

// give a count per age of students of male students.
db.students.aggregate([{$match:{gender:'male'}},{$group:{_id:"$age",totalCount:{$sum:1}}}]);// pehle match ka filter laga liye so that ussi ka group kare
// jo ki 13 saal ke hai.. fir group banaye unn sab ka jo ki 13 saal ke hai....fir count  kar liye.
// the value of sum is 1, which means that for each document in the group, the value of "number" will be increamented by 1.

//give a count per age of male students and sort them by count in desc manner.
db.students.aggregate([{$match:{gender:"female"}},{$group:{_id:"$age", studentsCount:{$sum:1}}},{$sort:{studentsCount:-1}}]);

// find max of above query. means studentsCount jo upar nikale hai uska max nikalo.
db.students.aggregate([{$match:{gender:"female"}},{$group:{_id:"$age", studentsCount:{$sum:1}}},{$group:{_id:null,maxNumberInAgeGroup:{$max:"$studentsCount"}}}]);
// {$group:{_id:null,maxNumberInAgeGroup:{$max:"$studentsCount"}}} ye part me pehle group ka id null kiye to isne iss se pehle ke saare process ko 
// ek document me kar diya hai then fir uska max nikal liye.

// find hobbies per age group
db.students.aggregate([{$group:{_id:"$age",Hobbies:{$push:"$hobbies"}}}]);

//$unwind :- 
/**
 * In MongoDB, the $unwind stage is used to deconstruct an array field from the input documents to output a separate document 
 * for each element in that array.
 * Basic Example:
If you have a document with an array:
{ _id: 1, item: "ABC", sizes: ["S", "M", "L"] }

Running { $unwind: "$sizes" } will result in three documents:
{ _id: 1, item: "ABC", sizes: "S" }
{ _id: 1, item: "ABC", sizes: "M" }
{ _id: 1, item: "ABC", sizes: "L" }

 */
// but yha par hobbies to pehle se array me tha but ab again ye ek aur new array i.e. Hobbies ke andar chala jayega....so if we need in a single array
// then use $unwind operator see below query.

db.students.aggregate([{$unwind:"$hobbies"},{$group:{_id:"$age",Hobbies:{$push:"$hobbies"}}}]);// $unwind makes multiple copies of original doc as 
// per given field i.e. Hobbies in this case.

// find number of students per each hobbies
db.students.aggregate([{$unwind:"$hobbies"},{$group:{_id:"$hobbies",count:{$sum:1}}}]);

// find average age of all students
db.students.aggregate([{$group:{_id:null,totalAvg:{$avg:"$age"}}}]);
// Note:- if we specify _id:null in the $group operator, it means that all the documents in the collection will be grouped together in to a single group.

// find the total numbers of hobbies for all the students in a collection.
//Method 1:-
db.students.aggregate([{$unwind:"$hobbies"},{$group:{_id:null, totalHobbies:{$sum:1}}}]);
//Method 2:-
db.students.aggregate([{$group:{_id:null, totalHobbies:{$sum:{$size:"$hobbies"}}}}]); // but this might fail because hobbies field might be missing in any doc.
// use ifNull in above condition.
db.students.aggregate([{$group:{_id:null, totalHobbies:{$sum:{$size:{$ifNull:["$hobbies",[]]}}}}}]);

// list all hobbies
db.students.aggregate([{$unwind:"$hobbies"},{$group:{_id:null, hobbiesList:{$push:"$hobbies"}}}]);
db.students.aggregate([{$unwind:"$hobbies"},{$group:{_id:null, hobbbiesList:{$addToSet:"$hobbies"}}}]);// to only includes unique hobbies.

/**
 * $filter :-
 * 
  syntax :

  $filter :{
   input:<array expression>,
   as:<identifier>,
   cond:<expression>
  }

  input :- specifies the array expression to filter.
  as :- specifies a variable name that can be used inside the condition expression to reference the current element of the input array.
  cond :- specifies the condition that must be met in order for an element to be included in the result set. the expression must return either true or false.
 */

  // find the average of scores for students whose age is greater than 30.
  // Note :- ye above question me kuch condition hai so jab bhi condition aaye to filter operator ke baare me sochna hai.
  
  // below solution is given in the video which is wrong i will do below one later.
  db.students.aggregate([{$group:{_id:null, totalAvgScores:{$avg:{$filter:{input:"$scores",as:"score",cond:{$gt:["$age",30]}}}}}}]); // this solution is wrong
  //because 1st stage me group kiye so yha pe saara fields hatt jayega except unke jisko ki hum define karte hai $group stage me
  // fir group ke baad jab stage 2 i.e. totalAvhScores me jab gaye to iske pass to koi field mila hi nahi. to jab filter me $age search 
  // karne ka try kiya to wha pe 'age' field usko milega hi nhi(kyu ki $group stage me humne dala hi nahi) so above query null or error return karegi

  // correct solution :-
  db.students.aggregate([{$match:{"age":{$gt:30}}},{$unwind:"$scores"},{$group:{_id:null,totalAvgScores:{$avg:"$scores"}}}]);

  /**
   * $bucket :-
   * 
   * when to use :- when you want to categorize in to descrete groups based on specified boundaries.
   * e.g. :- maan lo hamare pass 6 students hai of age 22,27,33,38,41 and 47. ab task ye hai ek in saare students teen group banao like 20-30 age walo ka
   *         ek group , 30-40 ki age walo ka ek group and 40-50 ki age walo ka ek group. to aise case me $bucket ka use karenge.
   * 
   * Syntax :-
   * 
            * {
                $bucket:{
                  guoupBy:<expression>, // jis field ke liye grouping karni hai.
                  boundaries:[<boundary1>,<boundary2>],
                  default:<expression>,
                  output:{
                    <outputField>:{<accumulator>:<expression>}
                  }
                }
            * }
   */

  // categorize male students based on their ages in to three buckets age less than 30, ages between 30 and 40, and ages greater than 40.
/*
  {
    $bucket:{
      groupBy:"$age", // jis bhi field ke liye grouping karni hai
      boundaries:[0,30,40], // yha pe condition i.e. 0-30 ke liye ek group and 30 se 40 ke liye ek group
      default: "Greater than 40 wala group", // ab jo above condition me rehh gya wahi to else me jayega i.e. boundaries wali condition satisfy hone ke baad jo rehh gya wo default me jayega.
      output : {
        count:{$sum:1} // yha outputField me count hai means aapko output me kya chahiye
      }
    }
  }
*/

db.students.aggregate([{$match:{gender:"male"}},
  {$bucket:{
    groupBy:"$age",
    boundaries:[0,30,40],
    default:"Greater than 40 wala group",
    output:{
      count:{$sum:1}
    }
}}]);

/**
 * after running above query got below response see,
 * [
  { _id: 0, count: 1 }, // iss group me yha pe 0-30 wale hai i.e. excluding 30
  { _id: 30, count: 1 },// iss group me yha pe 30-40 wale hai i.e. including 30 and excluding 40
  { _id: 'Greater than 40 wala group', count: 1 } iss group me yha pe greater than 40 wale hai i.e. including 40
]
 */

// ab above question me output me students ka count ke saath me names bhi chahiye to :-
db.students.aggregate([{$match:{gender:"male"}},
  {$bucket:{
    groupBy:"$age",
    boundaries:[0,30,40],
    default:"Greater than 40 wala group",
    output:{
      count:{$sum:1},
      names:{$push:"$name"}
    }
}}]);

/**
 * $join :-
 * 
 * 1. Inner Join (The "Strict" Join) :- This only returns records where there is a match in both tables.
 * 2. Left Outer Join (The "Left-Biased" Join):- This returns everything from the left table, plus matching records from the right table. 
 * 3. Right Outer Join (The "Right-Biased" Join):- This is the mirror of the Left Join, it returns everything from the right table, plus matching records from the left
 * 4. Full Outer Join (The "Inclusive" Join):- This returns everything from both tables, regardless of matches.
 * 
 * 
 * To explain joins clearly, let’s use two sample tables: Students and Courses :-
 * 
    Table A:   Students (Left)
    ID	          Names
    11	          Hardeep
    22	          Sunita
    33	          Mark

    Table B:    Courses (Right)
    ID	Course_Name        student_ID
    1	   MongoDB             11
    2	   SQL                 22
    3	   Python              55

    1). Inner Join
        Returns only the records that have matching values in both tables.
        Example: You want a list of students who are actually enrolled in a course.
        Result:
          | Name | Course_Name |
          | :--- | :--- |
          | Hardeep | MongoDB |
          | Sunita | SQL |
        Note: Mark (no course) and Python (no student) are excluded
       
    2). Left (Outer) Join
        Returns all records from the left table, plus any matching records from the right table. 
        Example: You want a list of every student, showing their course if they have one.
        Result:
          | Name | Course_Name |
          | :--- | :--- |
          | Hardeep | MongoDB |
          | Sunita | SQL |
          | Mark | NULL |
        Note: Mark stays on the list, but his course is NULL because he hasn't joined one.      
 
    3). Right (Outer) Join 
        Returns all records from the right table, plus any matching records from the left table.
        Example: You want a list of every course, showing the student enrolled in it.
        Result:
          | Name | Course_Name |
          | :--- | :--- |
          | Hardeep | MongoDB |
          | Sunita | SQL |
          | NULL | Python |
        Note: Python is listed, but the student name is NULL because no one from your student table is taking it.

    4). Full (Outer) Join
        Returns all records from both tables, regardless of whether they match. 1.1.1, 1.1.9 
        Example: You want the "full picture"—every student and every course.
          Result:
          | Name | Course_Name |
          | :--- | :--- |
          | Hardeep | MongoDB |
          | Sunita | SQL |
          | Mark | NULL |
          | NULL | Python |
        Note: This combines the Left and Right joins into one big table. 

 */

 /**
   $lookup :- The $lookup is an aggregation pipeline stage that allows you to perform a left outer join between two collections.

     db.firstCollectionName.aggregate([{
      $lookup:{
        from:"foreignCollection", // wo collection jiss se join karna hai i.e. secondCollectionName 
        localField:"localField",  // local field means first collection ka wo field jo ki match hogi second collection se
        foreignField:"foreignfield", // second collection me wo field jo first wale se match hogi.
        as:"outputArray"          // new field name
      }
     }])

     // below query from above example:-

     db.Students.aggregate([{
      $lookup:{
        from:"Courses",
        localField:"ID",
        foreignField:"student_ID",
        as: "newFieldName"
      }
     
     }])

  *  */      
 
     // left join
     db.students.aggregate([{
      $lookup:{
        from:"courses",
        localField:"_id",
        foreignField:"student_id",
        as:"courseDetails"
      }
     }]);

     //right join
     db.courses.aggregate([{
      $lookup:{
        from:"students",
        localField:"student_id",
        foreignField:"_id",
        as:"studentDetails"
      }
     }]);

     //inner join
     db.students.aggregate([{
      $lookup:{
        from:"courses",
        localField:"_id",
        foreignField:"student_id",
        as:"courseDetails"
      }
     },
     {$match:{'courseDetails.0':{$exists:true}}} // ab iss se sirf matching wale docs hi aayenge.
    ]);

    //Full join (VVI)
    // little bit complex but very imp, i will do later.



    /**
     * $project :-
     * project stage is used in the aggregation pipeline to reshape documents, include or exclude fields, and create computed fields,
     * applying expression to the existing fields, and renaming fields.
     * 
     * Syntax :-
     * 
     * $project:{
      // yha pe field inclusion/exclusion or field transformations.
     * }
     */

    db.students.aggregate([{$project:{_id:0,name:1,hobbies:1,age:1,personalInfo:"$bio",doubleAge:{$multiply:[2,"$age"]}}}]);
    // yha pe personalInfo:"$bio" , ye rename kar rha hai bio field ko.

    /**
     * create a new collection using aggregated results :-
     * $out :- // ye ek nya collection hi bana dega result ko lekar.
     * 
     */
    db.cars.aggregate([{$match:{'maker':'Hyundai'}},{$project:{_id:0,carName:{$concat:["$maker"," ","$model"]}}},{$out:'hyundai_cars'}])

    /**
     * conditional operator ($cond,$ifNull,$switch) :-
       
       $cond :- it is like a ternary operator in mongoDB.
       syntax :-

       $cond: { // most common one
                if: { <boolean-expression> },
                then: <return-value-if-true>,
                else: <return-value-if-false>
              }
       or,
       $cond:[<condition>,<true case>,<false case>] // like ternary operator

       $switch :- jab bhi multiple condition check karne ho tab use karo iska.

       syntax :-
       {
         $switch: {
            branches:[
                {case: <condition 1>, then:<result1>},
                {case: <condition 2>, then:<result2>},
                {case: <condition 3>, then:<result3>},
                ......
                ],
            default: <defaultResult>
         }
       }

     */
    //suppose we want to check if car is petrol car and categorize cars in to petrol and non petrol car. 
    db.cars.aggregate([{$project:{model:1, fuelCategory:{$cond:{if:{$eq:["$fuel_type","Petrol"]},then:"Petrol Car",else:"Non Petrol Car"}}}}]);

    //suppose we want to categorize the price of the cars in to three categories "Budget","Midrange" or "Premium".
    db.cars.aggregate([{$project:{model:1,budgetCar:{$switch:{branches:[{case:{$lte:['$price',800000]},then:"Budget"},{case:{$and:[{$gt:['$price',800000]},{$lte:['$price',1000000]}]},then:"Midrange"},{case:{$gt:['$price',1000000]},then:"Premium"}],default:"Expensive"}}}}]);
    /**
     * Capped colleciton :-
     * 
     * this collection is useful during logging like in our projects many time we log the errors or responses etc. 
     * so maan  lo ki 100000 docs ho gye and fir daily to ye badhta hi jaa rha hai, so iss se bacchne ke liye we use this collection.
     * ki ek specific amount of docs and size hi hum store kare collection me.
     */
      db.createCollection("order_logs",{capped:true,max:4,size:100000});
      // ab iss se only upto 4 docs hi create honge "order_logs" ke andar 5th one aate hi sabse purana wala remove hona shuru ho jayega. and size bhi 100000 rahega max.

      /**
       * Authentication and Authorization in mongoDB :-
       * 
       * Ebabling authentication in mongoDB involves making configuration changes.
       * jab mongoDB install karte hai to uski configs file bhi save hue hogi to usme changes karna hoga. 
       * sudo nano /etc/mongod.conf ------ for ubuntu
        security:
          authorization: enabled // upar wale path me isko paste kar do
         now restart mongoDB finally.(sudo systemctl restart mongod)  
        
         ab jab hum kuch bhi karne ka try  karenge mongoDB me to error dega wo authorization ka ab iske liye below commands run karna hoga.
       */
      db.createUser({// syntax to create user inside admin db.
          user: "adminUser",
          pwd: "password",
          roles: ["userAdminAnyDatabase","dbAdminAnyDatabase"]
      });

      /**
       * Why those roles?
          userAdminAnyDatabase: Allows you to create and manage users across the whole system. Built-in Roles Documentation
          dbAdminAnyDatabase: Gives you administrative rights (indexes, stats) for every database. Built-in Roles Documentation

          Note: If you want this user to also be able to read and write data everywhere, you should also add the "readWriteAnyDatabase" role to your array.
       */
       
         db.auth('user name dalo','apna password'); // command to login
         db.logout() // command to logout

         /**
          * Replication and Sharding
          * 
          * Replication :- replication is the process of synchronizing data across multiple servers (nodes) to ensure high availability
          * and data redundancy. It protects your database from data loss due to a single server failure and allows for disaster recovery. 
          * 
            means we will have one main server. and apart from this we will also create 2-3 same replica server that contains the same data.
            so when client requests comes up and main server fails to response due to any failure then at that situation our replica servers wll
            give responses so by doing like this we can avoid faulty behavior because then the client will never know that there was any issue.

            one more use is let's say client requests too many read requests and write requestes to the server so we can redierct read requestes to
            replica servers to respond so main server can handle write requestes more effictvely.

            Sharding :- Method of distributing data across multiple machines.

            vertical scaling:- To upgrade your single local machines to higher cpu,ram or hard disk so that it can handle more users.
            but vertical scaling has a limit it can't go beyond that.

            horizontal scaling :- this one is better than vertical scaling, in horizontal scaling we split the data. by adding more DB server we 
            reduced the load. this one is better if you have huge users like hotstar , netflix uses horizontal scaling.
          */

        
    /**
      Transactions :- A transaction is a set of operations that are executed as single, atomic unit.

      lets say 3 operaitons are happening so we will only call it transaction only when either all opeartions happens successfully together and if any
      one fails then all must fail simultanously.

      for e.g. :- let's say ram has 500rs in his account and he sends 100rs to shyam who had 0rs.
      so here two operations are happeing first is 100rs deduction from ram's account and second one is 100rs addition to the shyam account.
      but lets say 100rs got deducted from ram's money and then suddenly db server crashes/fails. and operation second didn't happen. so this
      is not a transaction. here transaction means yaa to dono ho yaa to kuch bhi nahi.

      Transactions provide data consistency by ensuring that either all operations within the transacitons are commited to the database, or 
      none of them are.

      Transactions are designed ot provide ACID properties.

      Atomicity:- Atomicity gurantees that a transaction is treated as a single, indivisible unit of work.Either all the opeartions within 
                  the transaction are successfully completed and committed or none of them are. If any part of the transaction fails, all 
                  changes made by the transaction are rolled back,leaving the data in its original state.

      Consistency:- Consistency means that the database must follow all its rules (like Schema Validation) before and after the change.
                    It ensures that a transaction brings the database from one valid state to another. It enforces any integrity constraints
                    defined on a data, such as refrential integrity(means kisi aur colleciton se ref kar ke data fetch kar rhe hai to ye dekhega 
                    ki dusra collection hai bhi ya nhi) or uniqeness constraints(jaise ki koi field unique honi chahiye e.g. 'email' to isko 
                    bhi validate karega). if a transaction violates any constraints, the entire transaction is rolled back, preserving data integrity. 
                   
      Isolation:- Isolation ensures that each transaction operated independently of other concurrent transaction. It prevent interference between 
                  concurrent transactions, preserving data integrity and preventing unintended side effects.
                  
                  It is the "Privacy" rule for database changes. It ensures that while a transaction is in progress, no other user or process can see its 
                  "half-baked" or unfinished steps.
                  
                  The Easy Example: Online Shopping Imagine there is only 1 iPhone left in stock. Two people, User A and User B, click "Buy" at the exact
                  same millisecond.
                  Without Isolation: User A starts the checkout. The database begins processing.For a split second, the database is "confused" and tells User B the phone is still available. Both people pay for the same phone. Chaos.
                  With Isolation: As soon as User A starts the transaction, MongoDB puts a "virtual curtain" around that process. Even though the transaction isn't finished yet, User B is kept "isolated" from the changes until User A either finishes or cancels. User B will see the phone is gone only after User A’s transaction is fully committed.

      Durability:- Durability gurantees that once a transaction is committed, its changes are permanently stored and will survive any subsequent system
                   failures.Committed transaction are made durable by writing their changes to disk or other persistent storage(means backup leke rakh lo 
                   hard disk me ya kahi bhi like replica bhi bana sakte hai).This ensures data is not lost and can be recovered in the event of crash or failure.

                  
       *  */   

 //  Date queries in mongoDB :-
    
     db.students.insetOne({name:'Rajpal',dob:ISODate('2000-01-30')});// yha pe UTC aayega i.e. universal timezone
     db.students.insertOne({name:'Ramanujan',dob:ISODate('2005-02-14T14:20:32+02:00')});// yha pe +02:00 ka matlab hai UTC se 2hr aage offset v kehte hai isse.
     
     db.students.find({dob:{$gte: ISODate('2000-12-12')}});
     db.students.aggregate([{$group:{_id:{$year:"$dob"},names:{$push:"$name"}}}]);// year se grouping ke liye $year operator hota hai mongo me  


// jaise upar $year hai year extract karne ke liye dob se waise hi bhut saare fields hote hai jinko extract kar sakte hai like,
   $dayofMonth,

    db.collecitonName.aggregate([{
      $project:{
        dayofMonth:{$dayOfMonth:"your_ISO_DateField"} //exact date nikalne ke liye
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        month:{$month:"your_ISO_DateField"} //month extract karne ke liye
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        dayofYear:{$dayOfYear:"your_ISO_DateField"} //
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        hour:{$hour:"your_ISO_DateField"} //
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        minute:{$minute:"your_ISO_DateField"} //
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        second:{$second:"your_ISO_DateField"} //
      }
    }]);

    db.collecitonName.aggregate([{
      $project:{
        millisecond:{$millisecond:"your_ISO_DateField"} //
      }
    }]);

    db.students.aggregate([{$match:{name:"Ramu"}},{$project:{dayofMonth:{$dayOfMonth:"$dob"},month:{$month:"$dob"},dayofyear:{$dayOfYear:"$dob"},hour:{$hour:"$dob"},millisecond:{$millisecond:"$dob"}}}]);

    // new Date() :- this represents current date.
    db.students.insertOne({name:'Richa',dob:new Date()});

    //now if i want to change the format of ISO Date();
    //{$dateToString:{format:"<your custom format>",date:<date_expression_here>}}

    db.students.aggregate([{$project:{dob:{$dateToString:{format:"%d/%m/%Y %H:%M%S",date:"$dob"}}}}]);

    // MongoDB Atlas :-