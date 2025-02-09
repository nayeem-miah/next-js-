import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session : {
        strategy :"jwt",
    }, 
    providers : [
    CredentialsProvider({
        credentials : {
            email : {
                label : "Email",
                type : "text",
                required : true,
                placeholder: "enter your email"             
            },
            password : {
                label : "Password",
                type : "password",
                required : true,
                placeholder: "******"             
            },
        },
        async authorize (credentials){
            const {email, password} = credentials;
            if(!credentials) {
                return null
            }
            if(email){
                const currentUsers = users.find((user)=> user.email = email)
                if(currentUsers.password == password){
                    return currentUsers;
                }
            }
        }
    })
    ]
}

const handler = NextAuth(authOptions)


const users = [
    {
        id: 1,
        name : "emon", 
        email: "e@gmail.com",
        password: "password"
    },
    {
        id: 2,
        name : "hemon", 
        email: "h@gmail.com",
        password: "password"
    },
]

export {handler as GET , handler as POST}