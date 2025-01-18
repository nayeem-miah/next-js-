export async function GET(request, {params}){
    // console.log(params.id);
    const body = request.json()
    const index = comments.findIndex((c)=> c.id === parseInt(params.id));
    comments[index] = {
        text : body.text
    }
    return Response.json({
        message: "comment updated",
        comments
    })
}



const comments = [
    {
        id: 1,
        text: "comments 1 "
    },
    {
        id: 2,
        text: "comments 2"
    },
    {
        id :3,
        text: "comments3"     
    }
]