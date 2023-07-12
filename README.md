## Login with NFT or SSI build with Next.js and NextAuth.js

Let your users authenticate in a Next.js app with NFTs from a specified collection or with specific traits or with SSI, their Verifiable Credential or DID.
The login requests and the validation is handled by the IDP Kit, an open-source product by walt.id.
NextAuth.js is used as an authentication solution for Next.js. It builds on the OIDC standards and can therefore
be easily configured to work with the IDP Kit.


## Usage
1. Set up the IDP Kit, either [locally](https://docs.walt.id/v/idpkit/getting-started/cli) or use a hosed solution.
2. Register a client with the IDP Kits CLI or the API exposed.
3. Update the `CLIENT_ID` and `CLIENT_SECRET` environment variables based on the response received from the client
registration
4. In `pages/api/auth/[...nextauth].ts` update the `identityProviderURL` parameter of the NFTProvider or SSIProvider
depending on where you host the IDP Kit.
5. Run the project in development mode with `yarn dev` or build it with `yarn build` and run it with `yarn start`
