import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../Components/HeaderComponent";
import Image from "next/image";
import phone1 from "@/public/phone1.png";
import Link from "next/link";
import logo from "@/public/logo.png";
import whatsapp1 from "@/public/whatsapp1.png";
import React from "react";
import phone from "@/public/phone.png";
import whatsapp from "@/public/whatsapp.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiriş Asansör |7/24 Denizli Kiralık Mobil Asansör",
  description: "faramps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <header
        className={"flex justify-center text-center items-center md:px-4 px-2 gap-4 md:space-x-16 border-b border-blue-500 shadow-blue-100"}>
        <div className={"hidden md:flex items-center hover:text-lg duration-300 hover:text-red-600 "}>
            <Image src={phone1} alt={""} height={32} width={32}>

            </Image>
            <a href={"tel:+905327195092"} className={"ml-2"}>0532 719 50 92</a>
        </div>
        <ul className={"flex space-x-8"}>
            <li className={"hidden md:flex text-blue-900 hover:text-blue-700"}>
                <a href={"/"} className={"hover:text-lg duration-300"}>Ana Sayfa</a>
            </li>
            <li className={"text-blue-900 hover:text-blue-700"}>
                <a href={"/hakkimizda"} className={"hover:text-lg duration-300"}>Hakkımızda</a>
            </li>
        </ul>
        <Link href={"/"}><Image src={logo} width={125} height={125} alt={"Kiriş Nakliyat"} className={"hover:h-[150px] hover:w-[150px] duration-300"}></Image></Link>
        <ul className={"flex space-x-6"}>
            <li className={"text-blue-900 hover:text-blue-700"}>
                <a href={"/Galeri"} className={"hover:text-lg duration-300"}>Galeri</a>
            </li>
            <li className={"hidden md:flex text-blue-900 hover:text-blue-700"}>
                <a href={"/iletisim"} className={"hover:text-lg duration-300"}>İletişim</a>
            </li>
        </ul>
        <div className={"hidden md:flex items-center hover:text-lg duration-300 hover:text-green-600"}>
            <Image src={whatsapp1} alt={""} height={32} width={32}>

            </Image>
            <a href={"https://wa.me/+905327195092"} className={"ml-2"}>Bize Ulaşın&nbsp;&nbsp;&nbsp;</a>
        </div>
    </header>

    {children}

    <footer className={"flex bg-blue-900 "}>
        <div>
            <ul className={"md:grid grid-cols-2 gap-4 my-16"}>
                <li className={" grid text-center justify-center gap-4 mb-4"}>
                    <h1 className={"text-5xl font-bold text-white mt-8 my-8"}>İletişim</h1>
                    <div className={"flex items-center"}>
                        <Image src={phone} alt={"telefon"} height={34} width={34} className={"flex "}>

                        </Image>
                        <a href={"tel:+905327195092"} className={"ml-2 text-white"}>0532 719 50 92</a>
                    </div>
                    <div className={"flex items-center "}>
                        <Image src={whatsapp} alt={""} height={32} width={32} className={""}>

                        </Image>
                        <a href={"https://wa.me/+905327195092"} className={"ml-2 text-white"}>Bize
                            Ulaşın&nbsp;&nbsp;&nbsp;</a>
                    </div>
                </li>
                <li className={"grid text-white mx-4"}>
                    Kiriş Kiralık Mobil Asansör olarak, Denizli’de evden eve nakliyat sektöründe yenilikçi ve
                    güvenilir çözümler sunmak için buradayız. Yılların verdiği tecrübe ile taşınma sürecinizi
                    kolaylaştırmak ve eşyalarınızı en güvenli şekilde yeni adresinize ulaştırmak için mobil
                    asansörlü nakliyat hizmetini hayata geçirdik. Nakliyat sektörü, her zaman dikkat ve özen
                    gerektiren bir alandır. Biz de bu bilinçle hareket ederek, eşyalarınızı taşırken en yüksek
                    kalite standartlarını koruyoruz.

                    Denizli ve çevresinde taşınmanın ne kadar zahmetli olabileceğini biliyoruz. Özellikle yüksek
                    katlı binalarda oturanlar için eşyaların taşınması büyük bir stres kaynağı olabilir. Geleneksel
                    yöntemlerle taşınmak, eşyalarınızın zarar görme riskini artırırken, aynı zamanda zaman kaybına
                    da neden olabilir. İşte tam bu noktada, Kiriş Kiralık Mobil Asansör olarak devreye giriyoruz.


                </li>

            </ul>
        </div>


    </footer>
    </body>
    </html>
  );
}
