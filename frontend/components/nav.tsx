export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-5">
        <li>
          <img className="inline w-5 h-5" src="/images/menu.svg" alt="menu" />
        </li>
        <li>
          <img
            className="inline w-32 h-5"
            src="/images/qunomedical-logo.svg"
            alt="logo"
          />
        </li>
        <li>
          <img
            className="inline w-6 h-6"
            src="/images/search.svg"
            alt="search"
          />
        </li>
      </ul>
    </nav>
  );
}
