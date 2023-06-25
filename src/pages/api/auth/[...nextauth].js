import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers - switched from github to google
    providers: [
        GithubProvider({
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
    }
    //pages obj is an option for fully customized sign in page
}

export default NextAuth(authOptions)