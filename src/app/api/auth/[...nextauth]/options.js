import User from "@/app/(models)/User";
import CredentialsProvider from 'next-auth/providers/credentials'; // Make sure to import CredentialsProvider
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
export const options = {
  providers: [
    GoogleProvider({
      profile(profile){
        console.log("Google Provider",profile);
        let userRole = "Google user";
        return {
          ...profile,
          id:profile.sub,
          role:userRole,
        }
      },
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_Secret,
    }),
    // Add a comma here to separate the providers
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize (credentials){
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (foundUser) {
            console.log("User Exists");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (match) {
              console.log("Good pass");
              delete foundUser.password;
              foundUser["role"] = "Unverified Email";
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({session,token})
    {
      if(session?.user) session.user.role = token.role;
      return session;
    }
  },
  // pages:{
  //   signIn:"/Login"
  // }
};
