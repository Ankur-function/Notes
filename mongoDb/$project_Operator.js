/**
 The $project stage in MongoDB aggregation is one of the most important operators because it controls the shape of the output documents.
 Think of it as “selecting, removing, renaming, or computing fields” from documents during an aggregation pipeline.

 When you want to perform a task on each document individually (without collapsing them into one result), you use $project or 
 $addFields. These stages act like a map() function in JavaScript—they go row by row.

 1. What $project Actually Does

$project is used to reshape documents.

It can:-

Include fields

Exclude fields

Rename fields

Create new fields

Compute values

Restructure nested objects

Extract array elements



Some advance operators :-

$ifNull (easy)

$map

$filter

$let

$switch

$reduce

$mergeObjects
 */