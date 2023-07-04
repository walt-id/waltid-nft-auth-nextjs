import { TokenSetParameters } from 'openid-client';
import { Provider } from 'next-auth/providers';

/**
 *
 * @param clientId
 * @param clientSecret
 * @param identityProviderURL
 * The URL where the IDP Kit is hosted
 * @constructor
 */
const SSIProvider = (
  clientId: string,
  clientSecret: string,
  identityProviderURL: string
) =>
  ({
    id: 'walt-id-ssi',
    name: 'SSI',
    type: 'oauth',
    clientId,
    clientSecret,
    wellKnown: `${identityProviderURL}/api/oidc/.well-known/openid-configuration`,
    authorization: {
      params: {
        scope: `openid profile`,
        response_type: 'code',
      },
    },
    idToken: false,
    token: {
      async request(context) {
        const details = {
          grant_type: 'authorization_code',
          code: context.params.code,
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/walt-id-ssi`,
        };

        const formBody: string[] = [];
        for (const property in details) {
          const encodedKey = encodeURIComponent(property);
          // @ts-ignore
          const encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + '=' + encodedValue);
        }

        const finalFormBody = formBody.join('&');

        const response = await fetch(
          `${identityProviderURL}/api/oidc/token?${finalFormBody}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${Buffer.from(
                `${context.provider.clientId}:${context.provider.clientSecret}`
              ).toString('base64')}`,
            },
          }
        );
        if (response.ok) {
          const data = (await response.json()) as TokenSetParameters;
          return { tokens: data };
        } else {
          throw new Error('Response failed.');
        }
      },
    },
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
      };
    },
  } as Provider);

export default SSIProvider;
