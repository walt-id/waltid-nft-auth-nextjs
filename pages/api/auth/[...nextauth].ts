import NextAuth, { NextAuthOptions } from 'next-auth';
import NFTProvider from '../../../lib/nft-provider';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    NFTProvider(
      'YCg7_9h9U5uo23yGDZ-Q5DLVXo-MdRwIzTbJnLaFaRs',
      'CT1thprVKEGvFxZfNeySteChA2PwBaFCksfxXy0UjgI',
      'http:localhost:8080'
    ),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.name = token.sub;
      token.userRole = 'admin';
      return token;
    },
  },
};

export default NextAuth(authOptions);
