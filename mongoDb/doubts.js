/**
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