import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers - switched from github to google
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    //theme object to customize default login screen
    theme: {
        logo:"https://links.papareact.com/sq0",
        brandColor:"#f13287",
        colorScheme:"Auto",
    },
    callbacks:{
        async session({session, token, user}){
            session.user.username = session.user.name.split(' ').join('').toLocaleLowerCase();
            session.user.uid = token.sub;
            return session;
        }
    }
    //pages obj is an option for fully customized sign in page
}

export default NextAuth(authOptions)