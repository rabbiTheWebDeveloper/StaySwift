import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import mongoClientPromise from "./database/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";

export const { handlers :{GET ,POST}, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({

      credentials: {
        email : {},
        password : {}
      },
      async authorize(credentials) {
        if(credentials === null) return null;

        try{
          const user = await userModel.findOne({email: credentials.email});
          return user
          console.log(user);
        }catch(e){
          console.log(e)
        }

        
      }
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
});
