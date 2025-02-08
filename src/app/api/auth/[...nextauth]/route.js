import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
    session : {
        strategy :"jwt"
    }, 
    providers : [
    CredentialsProvider({
        credentials : {
            userName  : {
                label : "userName",
                type : "text",
                required : true,
                placeholder: "enter user name"             
            },
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
            if(!credentials) {
                return null
            }
            return true;
        }
    })
    ], 
 
})

export {handler as GET , handler as POST}