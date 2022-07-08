export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-5">
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
