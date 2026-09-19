/**
8. File Upload Service
Build an API for uploading files with validation, size restrictions, unique filenames, and storage handling.
 */

// Router.post('/api/file/upload',fileUpload)

/**
 Browser
   ↓
multipart/form-data (browser sends file in this format)
   ↓
Express (Express by itself doesn't conveniently parse multipart file uploads that's why we need Multer)
   ↓
Multer (npm install multer now)
   ↓
req.file (after multer processed it now we can do req.file)
   ↓
Your controller
 */

// - Step 1 :- npm install multer


// - Step 2 :- create a multer configuration file 
const multer = require('multer');
const crypto = require('crypto');

const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf"
];

const storage = multer.diskStorage({ //- diskStorage means Store the uploaded file on my server's disk."
    
    destination: function(req,file,cb){ //- destination means Where should the file go?
        cb(null,'uploads/'); // - Put uploaded files inside the uploads directory.
    },
    filename: function(req,file,cb){
        const uniqueId = crypto.randomUUID();
        // Preserve the original extension
        const extension = file.originalname.substring(
            file.originalname.lastIndexOf('.')
        );
        cb(null,`${uniqueId}${extension}`);
    }
});

const upload = multer({
    storage:storage,
    limits: {
    fileSize: 5 * 1024 * 1024 //- maximum file size to be 5 MB
    },
    fileFilter:function(req,file,cb){
        if(!allowedMimeTypes.includes(file.mimetype)){
            return cb(new Error('Invalid File Type'));
        }
        cb(null, true);
    }
})

// - Step 3 :- Connect multer to our route
Router.post('/api/file/upload',upload.single('file'),uploadFile) // - here upload.single('file') means Expect exactly one uploaded file, and the multipart field should be named file.


function uploadFile(req,res){
    try {
        const file = req.file;
        if(!file){
            return res.status(400).json({message:'No File Uploaded'});
        }
        return res.status(200).json({
            message:'File Uploaded Successfully',
            data:{
                originalName:file.originalname,
                fileName:file.filename,
                size:file.size,
                mimeType:file.mimetype,
                path:file.path
            }
        })
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error',error:error.message});
    }

}

/**
 So the overall flow becomes :-

                    Upload request
                         │
                         ↓
              multipart/form-data
                         │
                         ↓
                  Multer middleware
                         │
                         ↓
                  Validate/process
                         │
                         ↓
                    Save file
                         │
                         ↓
                      req.file
                         │
                         ↓
                    Controller
                         │
                         ↓
                      Response
 */

                      /**
                        File upload
                            ↓
                        multipart/form-data
                            ↓
                        Multer parses it
                            ↓
                        Validate
                        ┌───┴───────────┐
                        │               │
                        size            type
                        │               │
                        └───────┬───────┘
                                ↓
                        Generate unique filename
                                ↓
                        Store file
                                ↓
                        Return metadata
                       */
/**
 * Follow Up 1 :- Explain why local disk storage is problematic in production and how S3/object storage solves it.
 * 
 * Solution :-
 * 
 * The key problem is that your Node.js server's local disk is tied to that particular server instance. 
 * 
 // * 1. What happens with local disk?

Suppose your API is running on one server:

                 Node.js Server 1
                 ┌───────────────┐
User ───────────►│ Upload API    │
                 │               │
                 │ uploads/      │
                 │   photo.jpg   │
                 └───────────────┘

The file physically exists on Server 1's disk.

That works perfectly for development and a single-server application.

But production usually looks more like this:-

                         ┌── Server 1 ── uploads/photo.jpg
                         │
Users → Load Balancer ───┼── Server 2 ── uploads/ ❌
                         │
                         └── Server 3 ── uploads/ ❌

Now imagine the user uploads a file and the next request goes to Server 2.

Server 2 doesn't have that file.

That's the first major problem.

// * 2. Problem: Multiple servers :-

Production applications are often horizontally scaled:-

                Load Balancer
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Server 1   Server 2   Server 3

If photo.jpg is stored on Server 1:

Server 1 → photo.jpg ✅
Server 2 → photo.jpg ❌
Server 3 → photo.jpg ❌

So local disk doesn't provide shared storage.

You could technically synchronize files between servers, but that's complicated and unreliable.

// * 3. Problem: Server can be destroyed

Cloud servers/containers are often treated as disposable.

For example:-

Server 1
   ↓
uploaded files
   ↓
Server crashes / redeployed
   ↓
New Server 1
   ↓
old disk/files may be gone ❌

With Docker/Kubernetes/autoscaling, containers can be replaced frequently.

You don't want important user files to depend on the lifetime of a particular container.

// * 4. Problem: Scaling becomes difficult

Suppose today you have:

1 server

Tomorrow:

10 servers

Then:-

                Load Balancer
                     │
       ┌─────┬───────┼───────┬─────┐
       ↓     ↓       ↓       ↓     ↓
      S1    S2      S3      S4    ...

Where should files live?

If every server has its own disk:

S1 → 10 GB files
S2 → 7 GB files
S3 → 15 GB files
...

Now you have a distributed-file-management problem.

That's something you generally don't want your application servers to solve.


// * 5. Problem: Backups become painful

Imagine your server contains:

Server disk
├── application
├── logs
├── uploads
│   ├── user1.pdf
│   ├── user2.jpg
│   ├── user3.png
│   └── ...

If that server dies, you need reliable backups of those files.

As the number and size of files grows, backing up every application server becomes increasingly inconvenient.

// * So what does S3 change?

Instead of storing the actual file on your Node.js server:

User
  ↓
Node.js
  ↓
Local Disk ❌

you store it in object storage:

User
  ↓
Node.js
  ↓
S3

Think of S3 as a huge, durable, shared storage system specifically designed for files/objects.

For example:-

S3 Bucket
│
├── users/
│   ├── 123/
│   │   ├── profile.jpg
│   │   └── resume.pdf
│   │
│   └── 456/
│       └── invoice.pdf

Your Node.js server doesn't need to permanently own those files.

// * 6. Now multiple servers are easy :-

Imagine:

                    ┌── Server 1 ──┐
                    │              │
User → Load Balancer├── Server 2 ──┼──→ S3
                    │              │
                    └── Server 3 ──┘

All servers can access the same S3 bucket.

So:

Server 1 → S3 → photo.jpg
Server 2 → S3 → photo.jpg
Server 3 → S3 → photo.jpg

The file isn't tied to Server 1 anymore.

That's the big architectural difference.

// * 7. What happens when Server 1 dies?

With local disk:

Server 1
   ↓
💥 destroyed
   ↓
photo.jpg ❌

With S3:

Server 1
   ↓
💥 destroyed

S3
   ↓
photo.jpg ✅

You can start a completely new server and it can still access the file.

// * 8. S3 also scales much better

You don't need to think:

"How much disk space should I give each Node.js server?"

Instead:

Node servers
     ↓
     S3
     ↓
Millions of objects

The storage system is separate from your compute/application servers.

This gives you a very important production architecture principle:

Compute and storage should be separated.

Your Node.js servers are responsible for processing requests.

S3 is responsible for storing files.


// * 9. One important interview point: don't send huge files through Node unnecessarily

A more advanced architecture is:

                 ┌──────────────┐
User ───────────►│ Node.js API  │
                 └──────┬───────┘
                        │
                 Generate upload URL
                        │
                        ↓
User ─────────────────► S3
                     uploads file

This is called a pre-signed URL approach.

The Node server doesn't necessarily have to receive the entire 100 MB / 500 MB file.

Instead:

Client asks Node: "I want to upload a file."
Node authenticates the user.
Node generates a temporary S3 upload URL.
Client uploads directly to S3.
Node stores the S3 object key/metadata in MongoDB.

For example:

MongoDB

{
   userId: "...",
   fileName: "resume.pdf",
   storageKey: "users/123/resume-abc.pdf"
}

The actual file lives in S3.
 *  */

/**
 // * Summary :-

 The mental model I want you to remember :-

Local disk :-
              ┌───────────────┐
User → Node → │ Server Disk   │
              └───────────────┘
                    ↑
              tied to server

Problems:

Doesn't work naturally with multiple servers
Files can disappear when instances are replaced
Scaling is difficult
Backups become your responsibility
Containers/VMs may be ephemeral


S3/object storage :-
                 ┌──────────┐
Server 1 ───────►│          │
Server 2 ───────►│    S3    │
Server 3 ───────►│          │
                 └──────────┘

Benefits:

Shared storage
Independent of application servers
Highly scalable
Designed for durable file storage
Works naturally with multiple instances
Supports direct uploads via pre-signed URLs


If an interviewer asks:-

// 1) "Why wouldn't you store uploaded files on the Node.js server in production?"

A strong ~30-second answer would be:

"Local disk is tied to a particular application instance. Once we horizontally scale to multiple servers, a file uploaded to one
server may not be available on another server. Also, instances can be replaced or destroyed, which makes local files unreliable.
I'd use object storage such as S3 so files are stored independently of the application servers. All instances can access the same 
storage, and for large uploads I can use pre-signed URLs so the client uploads directly to S3."
 */

/**
// * Follow up 2 :-
"Your current implementation stores files on the local server using Multer's diskStorage. In production, we want to store uploaded
files in S3. How would you modify your architecture?"

Also tell me:

1.Where would the actual file be stored?
2.What would MongoDB store?
3.Would you keep the local uploads/ folder?
4.How would the client download the file?

1. i will store actual file inside s3 storage. so that every instance of my server can access it flawlessly 
2.my mongodb will store the meta data. like file information etc. \
3. and no i will not keep uploads folder anymore. 

4. Pre-signed URL ⭐
so basically i had saved the S3 key inside mongodb. so using this s3 key i will generate the unique temporary s3 url
and send this to client. so i will say :- 
I've verified that you're allowed to access this file. Here's a temporary URL that allows you to download it from S3

The flow becomes:-

Client
   ↓
GET /files/:id
   ↓
Node.js
   ↓
MongoDB
   ↓
gets s3Key
   ↓
generates temporary S3 URL
   ↓
Client
   ↓
S3 directly
   ↓
File
 */

// * NOW USING S3 IMPLEMENTATION :-

const multer = require('multer');
const crypto = require('crypto');
const {
  S3Client,
  PutObjectCommand
} = require('@aws-sdk/client-s3');

const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "application/pdf"
];

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024
  },

  fileFilter: function(req, file, cb) {
    if(!allowedMimeTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid File Type'));
    }

    cb(null, true);
  }
});

/**
 The biggest difference from your previous implementation is:

storage: multer.memoryStorage()

instead of:

storage: multer.diskStorage(...)

So Multer now gives us:

req.file
   │
   ├── originalname
   ├── mimetype
   ├── size
   └── buffer   ← actual file contents
 */

Router.post('/api/file/upload',upload.single('file'),uploadFile) // - here upload.single('file') means Expect exactly one uploaded file, and the multipart field should be named file.


// - controller file :-
async function uploadFile(req, res) {
  try {
    const file = req.file;

    if(!file) {
      return res.status(400).json({
        message: 'No File Uploaded'
      });
    }

    const uniqueId = crypto.randomUUID();

    const extension = file.originalname.substring(
      file.originalname.lastIndexOf('.')
    );

    const fileName = `${uniqueId}${extension}`;

    const s3Key = `uploads/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: s3Key,
      Body: file.buffer,
      ContentType: file.mimetype
    });

    await s3.send(command);

    return res.status(200).json({
      message: 'File Uploaded Successfully',

      data: {
        originalName: file.originalname,
        fileName: fileName,
        size: file.size,
        mimeType: file.mimetype,
        s3Key: s3Key
      }
    });

  } catch(error) {
    console.error(error);

    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

Router.post(
  '/api/file/upload',
  upload.single('file'),
  uploadFile
);
/**
 Now compare this with your original implementation

Your original :-

Multer
   ↓
diskStorage()
   ↓
uploads/
   ↓
Node server's disk

New implementation :-

Multer
   ↓
memoryStorage()
   ↓
file.buffer
   ↓
PutObjectCommand
   ↓
S3

That's the main architectural change.

//-So What exactly is happening inside the controller?

Suppose the user uploads:

resume.pdf

Multer temporarily gives Node:

req.file

{
   originalname: "resume.pdf",
   mimetype: "application/pdf",
   size: 200000,
   buffer: <actual PDF bytes>
}

We generate:

uniqueId = "abc-123..."

Then:

fileName
   ↓
abc-123.pdf

Then:

s3Key
   ↓
uploads/abc-123.pdf

And finally:

PutObjectCommand
        │
        ├── Bucket → your S3 bucket
        ├── Key → uploads/abc-123.pdf
        ├── Body → file.buffer
        └── ContentType → application/pdf

S3 stores the actual file.
 */

/**
 // * Follow up 3 :- The file is now stored privately in S3, and MongoDB stores its s3Key. Implement GET /api/files/:id/download
 // * so an authorized user can download the file."
 */

 /**
  Client
   ↓
GET /api/files/:id/download
   ↓
Node.js
   ↓
MongoDB → find file + s3Key (use :id from params)
   ↓
Generate pre-signed S3 URL
   ↓
Return URL to client
   ↓
Client → S3
   ↓
File
  */

//- Step 1:- First, import the S3 signing utilities

//- With AWS SDK v3:

const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

//- Step 2:- Then create your S3 client:

const s3 = new S3Client({
  region: process.env.AWS_REGION
});

//- Your AWS credentials should normally come from environment/IAM configuration rather than being hard-coded.

const downloadFile  = async(req,res)=>{
    try {
        const id = req.params.id;

        const fileExists = await ExportDocs.findOne({_id:id});
        if(!fileExists) return res.status(404).json({message:'File Not Found'});

        const {s3Key} = fileExists;

        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET, //- Think of it as telling AWS:- "I want to GET this particular object from this particular bucket."
            Key: s3Key
        });

        const downloadUrl = await getSignedUrl( //-You're basically saying:- AWS, create a temporary URL that authorizes whoever has this URL to perform this GetObject operation."
            s3,
            command,
            {
                expiresIn: 60 * 60
            }
        );

        return res.status(200).json({message:'Url generated successfully',data:downloadUrl});
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error',error:error.message})
    }
}

/**
 * One important interview point

The Node.js server doesn't have to download the file and send it to the client.

It only:

authenticates/authorizes the request,
gets the s3Key,
generates a temporary signed URL,
gives that URL to the client.

Then the client downloads directly from S3.

That is the key reason pre-signed URLs are so useful for large files.
 */