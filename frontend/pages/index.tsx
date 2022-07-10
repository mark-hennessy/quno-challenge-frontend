import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="py-20 bg-gray-200">
        <h1 className="text-5xl text-center">
          <Link href="/doctors">
            <a className="underline text-blue-600 hover:text-blue-800">
              Find doctors!
            </a>
          </Link>
        </h1>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/doctors",
      permanent: false,
    },
  };
};

export default IndexPage;
