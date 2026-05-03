/**
 * 
 * practice where group operator inside aggregation takes more than one field. like this :-
 * $group:{_id:{userId:'$userId',category:'$productDetails.category'}} ?? how to solve and when we take multiple fields inside group ?
 * 
 
 need more practice on :- $expr operator
 1)$expr

 {age:{$gt:15,$lt:35}},{$set:{age:105}}

 find({age:{$eq:19}});

 find({$or:[{age:{$lte:20}},{age:{$gte:50}}]})

 find({hasMacbook:{$exists:true}}

 $expr:{
        $gt:["$field1","$field2"] // means find those docs where field1>field2.
    }

find({name:{$regex:'^N'}})

find({age:{$mod:[5,0]}}

{$inc:{age:-2}}






find({experience:{$size:3}})
find({$expr:{$gte:[{$size:'$experience'},2]}})

 */

/**
 DOUBT :-

 Working on Array of objects :- sometimes i must $unwind the array to access the items inside it and sometimes i don't need to $unwind it
                                so here confusion arises so read below notes for solution :-
                                


give me the whole list of operators where i can skip this $unwind operator while dealing with array of objects . and also give me the whole list of
operators where i must use $unwind while dealing with array of objects in mongoDB.

Here's a clear and practical breakdown of MongoDB aggregation operators regarding array traversal behavior when the field path points to an array of objects (e.g., $items.discountApplied where items is [{discountApplied: 15}, ...]).

1. Operators Where You Can Safely Skip $unwind (Auto-traversal supported) :-

These operators have special built-in behavior:
When given a single expression that resolves to an array, they automatically traverse the array and operate on the values of the specified field from each object inside the array.

$sum,$avg,$min,$max

Operator             Where it works (stages),                   What it does on array of objects,                               Notes / Limitations
$sum,               "$group, $project, $addFields, etc.         Sums the field values across all array elements,                Most commonly used
$avg,               "$group, $project, $addFields, etc."        Calculates average of the field values,                         Ignores non-numeric
$min,               "$group,$project, $addFields, etc.",        Finds minimum value of the field across array elements,                 -
$max,               "$group, $project, $addFields, etc."        Finds maximum value of the field across array elements,                 -


Important note:-

This auto-traversal works only when you pass a single expression (e.g. { $sum: "$items.discountApplied" }).
If you pass multiple expressions (array of expressions), it does not traverse and treats the whole array as one value.
These are mainly accumulator-style operators.

Example (safe without unwind):
{ $sum: "$items.discountApplied" }     // works → sums all discounts, note ek hi expression ke saath kaam karega
{ $avg: "$reviews.score" }             // works → average score

// below one will not work like this
{ $multiply: ["$actualProductDetails.price", "$items.quantity"] }   // → fails (undefined)


2. Operators Where You Must (or Should) Use $unwind :-

For almost all other operators, MongoDB does NOT automatically traverse into the array of objects.
$field.subfield where field is an array → usually resolves to undefined / null.

You must use $unwind (or alternatives like $arrayElemAt, $map, $reduce) in these cases:-

Common categories that require $unwind or explicit handling:-

Arithmetic operators:-
    $multiply
    $subtract
    $add (when used as expression, not accumulator)
    $divide
    $mod

Comparison & Conditional:-
    $eq, $ne, $gt, $gte, $lt, $lte
    $cond, $ifNull, $switch

String, Date, Type operators:
    $concat, $toUpper, $dateToString, etc.
    $type, $toString, etc.

Most expression operators in general (except the 4 listed above)

Complex calculations like:-
    price × quantity - discount
    Any per-item computation followed by further logic

Example where unwind is required:-
    { $multiply: ["$actualProductDetails.price", "$items.quantity"] }   // → fails (undefined)

You need to unwind first so the path becomes a scalar value ($product.price).



Best Practice Recommendation (To Avoid Confusion) :-
Use this consistent rule everywhere:

Use $unwind first whenever you are doing per-item calculations (especially anything involving $multiply, $subtract, $cond, etc.).
Only skip $unwind when you are doing a simple aggregation using $sum, $avg, $min, or $max on a single field path.

This "always unwind for complex logic" approach is what most experienced MongoDB developers follow because it is predictable and much easier to debug.

Other Ways to Handle Arrays Without Unwind (Advanced) :-
If you want to avoid $unwind for performance reasons, you can use these array-specific operators:

$map → transform each element
$reduce → compute a single value from the array (very powerful for custom sums)
$filter → filter elements
$arrayElemAt → pick one element (useful after $lookup)
 */

/**
 VVI :-

To understand performance tuning in MongoDB, it is important to know how MongoDB determines if a query is fast or slow.
When you run a query, MongoDB acts like a detective searching for matching documents.
 These two terms are the exact metrics MongoDB uses to show you its work.

1. What is .explain("executionStats")?
By default, when you run a query like db.users.find({ city: "Gurugram" }), MongoDB just returns the matching documents.
It doesn't tell you how it found them.By appending .explain("executionStats") to your query, you are asking MongoDB to run the query
and give you a detailed performance diagnostic report instead of the data.
db.users.find({ city: "Gurugram", age: { $gt: 25 } }).explain("executionStats")
This diagnostic report shows you exactly:
Which index was used (or if it did a full collection scan).How long the query took to execute in milliseconds (executionTimeMillis).
How many index keys and documents it had to scan.

2. What is totalKeysExamined?
When you create an index on a field, MongoDB creates a separate, sorted list of pointers to your documents.
This list is made of index keys.
totalKeysExamined tells you the exact number of index entries MongoDB had to look at to fulfill your query.
An Analogy: The Index in the Back of a BookImagine you are reading a history book and want to find every page that mentions "Rome".
You flip to the Index at the back of the book.You see the entry for Rome has 5 page numbers listed: 12, 14, 15, 88, 90.
Your eyes scan those 5 entries in the index.In this scenario, your totalKeysExamined is 5, because you looked at 5 index entries to
find where the information lives.Why these two terms matter togetherIn your .explain("executionStats") output, you will see two very 
important metrics sitting next to each other:totalKeysExamined (How many index entries were scanned).totalDocsExamined 
(How many actual documents were fetched from disk).

How to tell if your index is good:-

Metric Scenario                 What it means                                   Performance Level
totalKeysExamined: 100          Perfect. Every single index entry               Optimal (100% efficient)
                                MongoDB looked at led directly to a 
totalDocsExamined: 100          document that matched the query. 
                                No wasted scans.
                                
                                 
 totalKeysExamined: 10,000       Bad. MongoDB had to scan through 10,000         Inefficient (High CPU)
                                 index keys just to find the 100 documents
 totalDocsExamined: 100          that actually matched. Your index order 
                                 isn't correct.




*/
