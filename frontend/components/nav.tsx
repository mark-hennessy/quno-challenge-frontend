import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <span className="material-icons">menu</span>
        </li>
        <li>
          <img className="inline w-32" src="/images/qunomedical-logo.svg" />
        </li>
        <li>
          <span className="material-icons">search</span>
        </li>
      </ul>
    </nav>
  );
}
