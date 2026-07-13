    const mockCommentsData = [
        {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[

            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {

            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
             {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
             {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                     {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                     {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        },
             {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        }
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
                 },
                  {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        }
            ]
        }
            ]
        }
            ]
        }
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                 {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        },
           {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                   {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                   {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                   {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                   {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        }
            ]
        }
            ]
        }
            ]
        }
        
            ]
        },
         {
            name:'Ankur Raj',
            text:'It is a long established fact that a reader will be distracted by the readable c',
            replies:[
                
            ]
        }
            ]
        }
    ]
const Comment = ({ data }) => {
  return (
    <div className="comment-box" style={{ marginLeft: "20px", borderLeft: "1px dashed #ccc", paddingLeft: "10px" }}>
      {/* 1. Render the current parent comment details */}
      <p><strong>{data?.name}</strong></p>
      <p>{data?.text}</p>
      
      {/* 2. Fix: Check if replies exist, and LOOP through the array recursively */}
      <div className="comment-replies">
        {data?.replies && data.replies.map((reply, index) => (
          <Comment data={reply} key={reply.id || index} />
        ))}
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="comments-container-wrapper">
      <h3>Comments</h3>
      {mockCommentsData.map((item, index) => {
        return <Comment data={item} key={item.id || index} />;
      })}
    </div>
  );
};

export default CommentContainer;
