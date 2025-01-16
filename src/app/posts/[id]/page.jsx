import React from 'react';


const fetchingDetails =async(id) =>{
   try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await res.json()
    return response;
   } catch (error) {
    console.error(error);
   }
} 


const postDetails =async ({params}) => {
    // console.log(params.id);
    const data = await fetchingDetails(params.id);
    console.log(data);
    return (
        <div className='mt-20'>
            post details id of : {params.id}
            

            <div className=" px-5 p-4">
                <h2>user id of : {data?.userId}</h2>
              <h3 className="text-2xl via-violet-500 my-3">{data?.title}</h3>
              <h3 className="text-gray-50"> {data?.body}</h3>
            </div>
        </div>
    );
};

export default postDetails;