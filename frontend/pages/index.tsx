import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="py-20">
      <h1 className="text-5xl text-center text-accent-1">
        <Link href="/doctors">
          <a>Find doctors!</a>
        </Link>
      </h1>
    </div>
  );
}
