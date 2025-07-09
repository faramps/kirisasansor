import React from "react";
import Image from "next/image";
import gal1 from "@/public/gal1.jpeg";
import gal2 from "@/public/gal2.jpeg";
import gal3 from "@/public/gal3.jpeg";
import gal4 from "@/public/gal4.jpeg";
import gal5 from "@/public/gal5.jpeg";

/**
 * Galeri bileşeni – görseller + video
 * MP4 dosyasını import etmek yerine /public kökünden doğrudan referanslıyoruz.
 * Böylece "Module parse failed" hatası ortadan kalkar.
 */

const galleryItems: { type: 'image' | 'video'; src: string | any; alt: string }[] = [
  { type: 'image', src: gal1, alt: 'Galeri 1' },
  { type: 'video', src: '/galvid.mp4', alt: 'Galeri video' }, // public/galvid.mp4
  { type: 'image', src: gal3, alt: 'Galeri 3' },
  { type: 'image', src: gal4, alt: 'Galeri 4' },
  { type: 'image', src: gal5, alt: 'Galeri 5' },
  { type: 'image', src: gal2, alt: 'Galeri 2' },
];

export default function Galeri() {
  return (
    <main className="Galeri">
      <h1 className="text-4xl text-center mt-16 font-bold">Galeri</h1>

      <div className="mt-16 md:grid grid-cols-6 mx-[10%] gap-12 text-white">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="col-span-2 mb-4 perspective">
            {item.type === 'image' ? (
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={item.src}
                alt={item.alt}
                priority={idx === 0}
              />
            ) : (
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.src as string} type="video/mp4" />
                {item.alt}
              </video>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
