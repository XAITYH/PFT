import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <body>
    <header className="h-28">
      <nav className="flex">
        <Image src={'@/public/icons/logo_black.svg'} alt={'logotype'} />
        <a href="#"><button className="auth_btn kavoon">SIGN IN</button></a>
        <a href="#"><button className="auth_btn kavoon">SIGN UP</button></a>
      </nav>
    </header>
  </body>
  );
}
