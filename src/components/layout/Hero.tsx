// import Right from "@/components/icons/Right";
 import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "../auth/login-button";
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#e0b095] from-5% via-[#E6CCB8] via-15% to-[#F1EBE0] to-90% h-screen space-y-12">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <Link href="#">LA PIZZERIA</Link>
          <ul className="flex gap-4">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Who we Are</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <LoginButton mode="redirect" asChild>
            <button>Login</button>
          </LoginButton>
        </nav>
      </header>

      {/* Center text */}
      <div className="font-bold text-center text-3xl ">
        <p>Made by Nigerians.</p>
        <p>Loved by all.</p>
      </div>

      {/* Pizza image */}
      <div className="relative flex items-center">
        <div className=" w-[400px] h-[400px] z-[1000]">
          <Image
            src={"/Frame.png"}
            fill={true}
            style={{ objectFit: "contain" }}
            alt={"pizza"}
            className="motion-safe:animate-[bounce_5s_linear_infinite] delay-100"
          ></Image>
        </div>
        <div className="absolute w-40 h-40 top-0 left-[100px] motion-safe:animate-[bounce_5s_linear_infinite] delay-100">
          <Image src={"/leaf.svg"} fill={true} alt={"pizza"}></Image>
        </div>
        <div className="absolute w-40 h-40 top-0 right-[100px] motion-safe:animate-[bounce_5s_linear_infinite] delay-100">
          <Image src={"/leaves.svg"} fill={true} alt={"pizza"}></Image>
        </div>
        <div className="absolute w-40 h-40 top-0 motion-safe:animate-[bounce_5s_linear_infinite] delay-100">
          <Image src={"/shombo1.png"} fill={true} alt={"pizza"}></Image>
        </div>
        <div className="absolute w-40 h-40 top-0 right-6 motion-safe:animate-[bounce_5s_linear_infinite] delay-100">
          <Image src={"/shombo1.png"} fill={true} alt={"pizza"}></Image>
        </div>
      </div>
    </section>
  );
}
