import whatsapp from "../../public/whatsapp.png";
import phone from "../../public/phone.png";
import Image from "next/image";
export default function Iletisim() {

    return (
        <div className="min-h-screen block bg-gradient-to-r from-blue-500 via-red-500 to-white p-4 text-center justify-center">
            <h2 className="text-4xl text-white font-bold text-center my-8">İletişim</h2>
            <div className="grid grid-rows-6 items-center justify-center gap-4 text-center text-2xl md:text-4xl">
                <div className=""></div>
                <div className=""></div>
                <div className="">
                    <div className="flex items-center hover:text-sky-500 duration-300 text-white">
                        <Image src={phone} alt="telefon" height={64} width={64} className="flex"></Image>
                        <a href="tel:+905327195092" className="ml-2 ">0532 719 50 92</a>
                    </div>
                </div>
                <div className="flex items-center hover:text-green-400 duration-300 text-white">
                    <Image src={whatsapp} alt="" height={64} width={64} className=""></Image>
                    <a href="https://wa.me/+905327195092" className="ml-2 ">Bize Ulaşın&nbsp;&nbsp;&nbsp;</a>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    );
}
