import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="py-20">
        <h1 className="text-5xl text-center">
          <Link href="/doctors">
            <a>Find doctors!</a>
          </Link>
        </h1>
      </div>
    </>
  );
}
