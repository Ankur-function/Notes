/**
 
🧠 Big Picture First (Very Important)

MongoDB operators are mainly divided into:

1. Query Operators (used in find / match)
2. Update Operators (used in update)
3. Aggregation Pipeline Stages
4. Aggregation Expression Operators

1️⃣ QUERY OPERATORS (Used in find, $match)
📌 Comparison Operators
$eq   // equal
$ne   // not equal
$gt   // greater than
$gte  // greater than equal
$lt   // less than
$lte  // less than equal
$in
$nin

📌 Logical Operators
$and
$or
$not
$nor

📌 Element Operators
$exists
$type

📌 Evaluation Operators
$expr
$regex
$text
$where   // JS expression (avoid in production)
$jsonSchema

📌 Array Query Operators
$all
$elemMatch
$size

2️⃣ UPDATE OPERATORS

Used in: updateOne / updateMany

📌 Field Update Operators
$set
$unset
$rename
📌 Increment Operators
$inc
$mul
$min
$max
📌 Array Update Operators
$push
$pop
$pull
$addToSet
$pullAll
📌 Bitwise
$bit
3️⃣ AGGREGATION PIPELINE STAGES 
(A pipeline consists of one or more stages that process documents. Each stage transforms the documents as they pass through. The output of one stage becomes the input for the next.)

These control flow of aggregation pipeline.

📌 Core Stages
$match
$project
$group
$sort
$limit
$skip
$count

📌 Data Transformation
$addFields  // alias: $set
$unset
$replaceRoot
$replaceWith

📌 Array Handling
$unwind

📌 Join & Lookup
$lookup
$graphLookup

📌 Faceting & Multi Pipeline
$facet
$bucket
$bucketAuto

📌 Output Stages
$out
$merge

📌 Advanced / Special
$redact
$sample
$sortByCount
$densify
$fill
$documents

4️⃣ AGGREGATION EXPRESSION OPERATORS
(While stages define where and when data moves, operators define how the data is calculated or transformed within those stages (especially inside $project, $addFields, or $group).)

📌 Arithmetic Operators
$add
$subtract
$multiply
$divide
$mod
$abs
$ceil
$floor
$round
$trunc

📌 Array Operators
$arrayElemAt
$concatArrays
$filter
$map
$reduce
$size
$slice
$zip
$range
$reverseArray
$first
$last

📌 Boolean / Logical
$and
$or
$not

📌 Comparison
$eq
$ne
$gt
$gte
$lt
$lte
$cmp

📌 Conditional
$cond
$switch
$ifNull

📌 String Operators
$concat
$toUpper
$toLower
$trim
$ltrim
$rtrim
$strLenCP
$substr
$replaceOne
$replaceAll
$split
$regexMatch

📌 Date Operators
$dayOfMonth
$dayOfWeek
$month
$year
$hour
$minute
$second
$dateToString
$dateFromString
$addFields
$dateAdd
$dateSubtract

📌 Object Operators
$mergeObjects
$objectToArray
$arrayToObject
$getField
$setField

📌 Variable Operators
$let

📌 Type Operators
$type
$convert
$toString
$toInt
$toDouble
$toBool

📌 Set Operators
$setUnion
$setIntersection
$setDifference
$setEquals

📌 Accumulators (Used in $group)
$sum
$avg
$min
$max
$push
$addToSet
$first
$last
$stdDevPop
$stdDevSamp
$count

📌 Misc / Special
$literal
$rand

🔥 Important Notes (Senior Level Insight)
1️⃣ Same operator can exist in multiple places

Example:

$sum

As accumulator in $group

As expression inside $project

2️⃣ Not all operators are used daily

Most used in real backend:

$match
$project
$group
$lookup
$unwind
$map
$filter
$reduce
$cond
$switch
$ifNull
$arrayElemAt

3️⃣ Rare but powerful operators
$facet
$graphLookup
$bucket
$mergeObjects
$setWindowFields

Used in analytics systems.

🧠 Final Mental Model

Think like this:

Query Operators → filter documents
Update Operators → modify documents
Pipeline Stages → control flow
Expression Operators → compute values
 */