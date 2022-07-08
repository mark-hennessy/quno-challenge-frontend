import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="py-20">
      <h1 className="text-5xl text-center">
        <Link href="/doctors">
          <a>Find doctors!</a>
        </Link>
      </h1>
    </div>
  );
}
