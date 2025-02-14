import Link from "next/link";

export default function Header() {
    return (
      <>
        <header className="flex items-center justify-between">
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            BILLS PIZZA
          </Link>
          <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            <Link href={""}>Home</Link>
            <Link href={""}>Menu</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            <button
              className="bg-primary text-white px-8 py-1 rounded-full"
            >
              Login
            </button>
          </nav>
        </header>
      </>
    );
}