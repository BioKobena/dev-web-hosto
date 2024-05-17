"use client";

import { Footer } from "flowbite-react";

export function FooterComponenet() {

  const date = new Date().getFullYear()

  return (
    <Footer container className=" bg-transparent">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://cdn4.iconfinder.com/data/icons/medical-115/60/medical-flat-098-heart-beat-1024.png"
            alt="Logo de Hosto"
            name="Hosto"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">À propos de nous</Footer.Link>
            <Footer.Link href="#">Accueil</Footer.Link>
            {/* <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link> */}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Hosto™" year={date} />
      </div>
    </Footer>
  )
};