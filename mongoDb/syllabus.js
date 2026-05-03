/**
 This is what interviewers and real projects expect from someone with ~4 years experience.

I’ve marked each topic with importance:

⭐⭐⭐⭐⭐ → Must master (interview + real work)
⭐⭐⭐⭐ → Very important
⭐⭐⭐ → Good to know
⭐⭐ → Rare but useful
⭐ → Optional/edge

🧠 LEVEL 1 — Data Modeling Mastery (Foundation for everything)
Topic	                                    Importance	                                     Why
Embedded vs Referenced schema design	    ⭐⭐⭐⭐⭐	                                    Most asked design question
One-to-many, many-to-many modeling	        ⭐⭐⭐⭐⭐	                                    Real APIs depend on this
Handling nested arrays & objects	        ⭐⭐⭐⭐⭐	                                    Required for aggregation
Schema anti-patterns	                    ⭐⭐⭐⭐	                                     Avoid performance issues
Designing for read vs write heavy systems	⭐⭐⭐⭐	                                     System design rounds


🔎 LEVEL 2 — Query & Index Expertise
Topic	                                    Importance	                                     Why
Advanced querying with operators	        ⭐⭐⭐⭐⭐	                                    Daily backend work
Projection, sorting, pagination	            ⭐⭐⭐⭐⭐	                                    Every API
Single, compound, text indexes	            ⭐⭐⭐⭐⭐	                                    Performance questions
Covered queries	                            ⭐⭐⭐⭐	                                     Optimization
Index strategy & pitfalls	                ⭐⭐⭐⭐	                                     Interview favorite


⚙️ LEVEL 3 — Aggregation Framework (Core strength)
Topic	                                    Importance	                                      Why
$match, $project, $group	                ⭐⭐⭐⭐⭐	                                    Base of all pipelines
$lookup, $unwind	                        ⭐⭐⭐⭐⭐	                                    Joins in MongoDB
$map, $filter, $reduce	                    ⭐⭐⭐⭐⭐	                                    Replace backend logic
$cond, $switch, $ifNull	                    ⭐⭐⭐⭐	                                     Handle messy data
$facet, $bucket	                            ⭐⭐⭐	                                          Analytics use cases
Pipeline optimization & ordering	        ⭐⭐⭐⭐	                                     Performance round


🔗 LEVEL 4 — Relations & Joins
Topic	                                    Importance	                                      Why
$lookup (basic & pipeline)	                ⭐⭐⭐⭐⭐	                                     Frequently asked
Joining large collections efficiently	    ⭐⭐⭐⭐	                                      Real production issue
$graphLookup	                            ⭐⭐	                                            Rare but impressive


🚀 LEVEL 5 — Performance & Scaling
Topic	                                    Importance	                                      Why
How MongoDB uses indexes internally	        ⭐⭐⭐⭐	                                      Deep understanding
Query explain plans                     	⭐⭐⭐⭐⭐	                                     Interview + debugging
Replication & Replica Sets	                ⭐⭐⭐⭐	                                      Production knowledge
Sharding basics	                            ⭐⭐⭐⭐	                                      Scaling question
Read vs write concerns	                    ⭐⭐⭐	                                           Good to know


🔐 LEVEL 6 — Transactions & Consistency
Topic	        
Multi-document transactions	                ⭐⭐⭐⭐	                                      Modern MongoDB feature
ACID in MongoDB	                            ⭐⭐⭐	                                           Conceptual
Handling race conditions	                ⭐⭐⭐	                                           Practical APIs


🧩 LEVEL 7 — Node.js / Backend Integration

Mongoose schemas & validation	            ⭐⭐⭐⭐⭐	                                     Daily work
Writing aggregation in Node APIs	        ⭐⭐⭐⭐⭐	                                     Real backend logic
Pagination, filtering, search APIs	        ⭐⭐⭐⭐⭐	                                     Common features
Handling large responses	                ⭐⭐⭐⭐	                                      Performance
Error handling patterns	                    ⭐⭐⭐	                                           Clean code


🧪 LEVEL 8 — Real Use Cases (What companies ask)
Use Case	Importance
Build analytics dashboard query	            ⭐⭐⭐⭐⭐
Build search + filter API	                ⭐⭐⭐⭐⭐
Calculate totals from nested arrays	        ⭐⭐⭐⭐⭐
Join 2 collections and reshape data	        ⭐⭐⭐⭐⭐
Optimize slow query                     	⭐⭐⭐⭐


🧠 LEVEL 9 — Rare but Powerful (Stand out topics)
Topic	Importance
$setWindowFields	                        ⭐⭐
$mergeObjects	                            ⭐⭐
$redact                                 	⭐
$densify, $fill                         	⭐
🎯 What Interviewers Expect from 4 YOE




They expect you to be able to:

✅ Design schema for a feature
✅ Write complex aggregation without Google
✅ Optimize slow queries using indexes
✅ Explain when to embed vs reference
✅ Use $lookup confidently
✅ Handle inconsistent data with $ifNull, $cond
✅ Integrate MongoDB properly in Node APIs

🗺️ Priority Order (Study in this order)
1. Data Modeling ⭐⭐⭐⭐⭐
2. Indexes & Querying ⭐⭐⭐⭐⭐
3. Aggregation Deep Dive ⭐⭐⭐⭐⭐
4. $lookup & Joins ⭐⭐⭐⭐⭐
5. Performance / Explain ⭐⭐⭐⭐
6. Transactions ⭐⭐⭐
7. Advanced operators ⭐⭐




Below syllabus i got form Gemini, chatGPT, Grok :-

can you give me a sample question paper of mongodb interview ptoblems for 4-5 years of experienced guy ?

🧱 Section 1 — Data Modeling (Schema Design) :-

Q1. E-commerce Orders

Design schema for orders where:

One order has many products
Product price can change later
Need fast “order history” API

Explain embed vs reference decisions.

Q2. Chat Application

Users, chat rooms, millions of messages.
API: open room → last 50 messages with sender name.

Design collections and justify.

🧱 Section 2: Performance & Indexing :-

The ESR Rule: Explain the Equality, Sort, Range rule for creating compound indexes. If you have a query filtering by status (equality), created_at (range), and sorting by priority, what is the optimal index order?
Index Intersection vs. Compound Index: When would you prefer two separate indexes over one compound index?
Covered Queries: Write a query that MongoDB can fulfill using only the index without ever looking at the actual documents. What are the limitations of this?

🧱 Section 3: Aggregation & Operations :-

Deep Aggregation: How would you use $facet to generate multiple sets of stats (e.g., total sales, average price, and top category) in a single pass over a collection?
Memory Management: What happens when an aggregation stage exceeds 100MB of RAM? How do you solve it using allowDiskUse?
Write Conflicts: In a high-concurrency environment, how does MongoDB handle two users trying to update the same document simultaneously?

🧱 Section 4: Architecture & Internals (Scaling & High Availability) / Sharding & Scalability :-
--- Theory part from basics.js file

Focus: Understanding how the engine breathes.

Storage Mechanics: Explain the role of the WiredTiger Cache. What happens to write performance when the "dirty data" in the cache exceeds 5 percent?

The Journal vs. Data Files: If a MongoDB instance crashes, how does the Journal ensure data consistency upon restart? Compare this to a Checkpoint.

Read/Write Concerns: You are building a high-stakes financial application. Which readConcern and writeConcern levels would you choose to avoid "dirty reads" and ensure the data is written to a majority of nodes?

Causal Consistency: In a distributed replica set, how do you ensure that a user can always read their own writes, even if the read hits a secondary node that is slightly lagging?

Shard Key Selection: You have Section 5: Scenario-Based / Troubleshooting / Production Experience (15-20 mins)

In a production e-commerce system, queries on the products collection are suddenly slow after a marketing campaign increased traffic. The collection has 10M+ documents. Walk through your step-by-step troubleshooting process.
Your MongoDB cluster is experiencing unbalanced shards (one shard overloaded, others idle). How would you diagnose and fix this? What role does the shard key play?
Describe a challenging MongoDB issue you faced in production (e.g., OOM errors, replication lag, transaction aborts, or upgrade problems) and how you resolved it.
How do you handle schema evolution/migration in a live MongoDB application with millions of documents? Mention tools or patterns like versioning fields or background jobs.
Explain security best practices in MongoDB (authentication, authorization with roles, network security, encryption at rest/transit, auditing). What would you do if there's a suspected data breach?a Logs collection with a timestamp field. Why is using timestamp as a shard key a bad idea for write-heavy loads? Suggest a better strategy.
Replica Set Elections: A primary node goes down. Describe the step-by-step election process. What is "Priority 0" and when would you use it?
Change Streams: How would you implement a real-time notification system using Change Streams? What are the overheads to consider?

🧱 Section 5: Scenario-Based / Troubleshooting / Production Experience (15-20 mins) :-

In a production e-commerce system, queries on the products collection are suddenly slow after a marketing campaign increased traffic. The collection has 10M+ documents. Walk through your step-by-step troubleshooting process.
Your MongoDB cluster is experiencing unbalanced shards (one shard overloaded, others idle). How would you diagnose and fix this? What role does the shard key play?
Describe a challenging MongoDB issue you faced in production (e.g., OOM errors, replication lag, transaction aborts, or upgrade problems) and how you resolved it.
How do you handle schema evolution/migration in a live MongoDB application with millions of documents? Mention tools or patterns like versioning fields or background jobs.
Explain security best practices in MongoDB (authentication, authorization with roles, network security, encryption at rest/transit, auditing). What would you do if there's a suspected data breach?

*/