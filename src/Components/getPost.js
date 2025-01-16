const getPosts = async ()=>{
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
   } catch (err) {
    console.error(err);
   }
}

export default getPosts;