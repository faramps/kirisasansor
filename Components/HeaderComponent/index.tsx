import React from "react";
import phone from "@/public/phone.png"
import Image from "next/image";
import whatsapp from "@/public/whatsapp.png";
import "../../app/globals.css";
import phone1 from "@/public/phone1.png";
import Link from "next/link";
import logo from "@/public/logo.png";
import whatsapp1 from "@/public/whatsapp1.png";
const Index = () => {
    return (
        <header
            className={"flex justify-center text-center items-center px-4 space-x-16 border-b border-blue-500 shadow-blue-100"}>
            <div className={"flex items-center"}>
                <Image src={phone1} alt={""} height={32} width={32}>

                </Image>
                <a href={"tel:+905327195092"} className={"ml-2"}>0532 719 50 92</a>
            </div>
            <ul className={"flex space-x-8"}>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/"}>Ana Sayfa</a>
                </li>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/hakkimizda"}>porn</a>
                </li>
            </ul>
            <Link href={"/"}><Image src={logo} width={125} height={125} alt={"Kiriş Nakliyat"}/></Link>
            <ul className={"flex space-x-6"}>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/Galeri"}>Galeri</a>
                </li>
                <li className={"text-blue-900 hover:text-blue-700"}>
                    <a href={"/iletisim"}>İletişim</a>
                </li>
            </ul>
            <div className={"flex items-center "}>
                <Image src={whatsapp1} alt={""} height={32} width={32}>

                </Image>
                <a href={"https://wa.me/+905327195092"} className={"ml-2"}>Bize Ulaşın&nbsp;&nbsp;&nbsp;</a>
            </div>
        </header>
    );
}

export default Index;