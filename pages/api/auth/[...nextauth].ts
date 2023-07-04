import NextAuth, { NextAuthOptions } from 'next-auth';
import NFTProvider from '../../../lib/nft-provider';
import SSIProvider from '../../../lib/ssi-provider';
import { User } from 'next-auth';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    NFTProvider(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'http:localhost:8080'
    ),
    SSIProvider(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'http:localhost:8080'
    ),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async session({ session, user, token }) {
      session.sub = token.sub;
      return session;
    },
    async jwt({ token, profile }) {
      return token;
    },
  },
};

export default NextAuth(authOptions);
