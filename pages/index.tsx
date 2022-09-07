import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <div className="">
          <h1 className="text-blue-400 text-2xl mb-4">Walt.id Auth</h1>
          <svg
            width="141"
            height="141"
            viewBox="0 0 141 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="70.5" cy="70.5" r="70.5" fill="#0573F0" />
            <rect
              x="39.0461"
              y="45.5538"
              width="30.3692"
              height="8.67692"
              fill="#E6F6FF"
            />
            <path
              d="M112.8 74.8385L105.208 73.7538C99.7846 103.038 68.3308 103.038 68.3308 103.038L67.2462 111.715C100.218 112.583 111.354 87.4923 112.8 74.8385Z"
              fill="#E6F6FF"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
