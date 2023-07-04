import { signIn, signOut, useSession } from 'next-auth/react';
import Button from './Button';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const subjectNode = (
    <>
      <span>{session?.sub}</span>
    </>
  );

  const nameNode = <span>{session?.user?.name}</span>;

  return (
    <header>
      <div className="with-full bg-gray-200">
        <div className="w-6/12 h-22 m-auto flex justify-between p-4">
          {!session ? (
            <p>You are not authenticated</p>
          ) : (
            <div>
              <p>You are signed in as:</p>
              {session?.user?.name && nameNode}
              {session?.user?.name && session?.sub && <> | </>}
              {session?.sub && subjectNode}
            </div>
          )}
          {session?.user && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </Button>
          )}
          {!session && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
