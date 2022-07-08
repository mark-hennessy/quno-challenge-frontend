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
          <img className="inline" src="/images/menu.svg" />
        </li>
        <li>
          <img className="inline w-32" src="/images/qunomedical-logo.svg" />
        </li>
        <li>
          <img className="inline" src="/images/search.svg" />
        </li>
      </ul>
    </nav>
  );
}
