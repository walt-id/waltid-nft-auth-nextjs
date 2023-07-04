import { DefaultSession } from 'next-auth';

interface CustomSession extends DefaultSession {
  sub?: string;
}

declare module 'next-auth' {
  interface Session extends CustomSession {}
}
