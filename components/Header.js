import Link from "next/link";

export default function Header() {
  return (
    <div className="Header w-full h-14 fixed top-0 left-0 backdrop-filter backdrop-blur-xl flex items-center">
      <div className="w-11/12 m-auto">
        <Link href="/">
          <a className="text-xl font-semibold">Pokebum App</a>
        </Link>
      </div>
    </div>
  );
}
