"use client";
import Image from "next/image";
import hakkimizda from "@/public/asansor.jpg";
import React from "react";
import Link from "next/link";
import $ from "jquery";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const texts = ["Kiriş Asansör", "Asansör İle Eşyalarınızı taşıyın!", "Denizli Asansör"];
        let index = 0;

        function typeText(text: string, callback: () => void) {
            let charIndex = 0;
            const interval = setInterval(() => {
                $('#animatedText').text(text.slice(0, charIndex + 1));
                charIndex++;
                if (charIndex === text.length) {
                    clearInterval(interval);
                    setTimeout(callback, 1000);  // Wait for 1 second before next action
                }
            }, 100);
        }

        function deleteText(callback: () => void) {
            let text = $('#animatedText').text();
            let charIndex = text.length;
            const interval = setInterval(() => {
                $('#animatedText').text(text.slice(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    clearInterval(interval);
                    setTimeout(callback, 500);  // Wait for 0.5 second before typing next text
                }
            }, 50);
        }

        function animateText() {
            deleteText(() => {
                index = (index + 1) % texts.length;
                typeText(texts[index], animateText);
            });
        }

        setTimeout(() => {
            typeText(texts[index], animateText);
        }, 500);

    }, []);

  return (
      <main className="">
          <main className={""}>
              <div className="flex h-screen w-full items-center text-center justify-center bg-black text-white">
              <span
                  className={"bg-[url('/asansor.jpg')] h-full w-full absolute bg-center opacity-65 bg-fixed bg-cover"}>

              </span>
                  {/*<Image src={asansor} alt={"Asansör"} className={"opacity-10 absolute w-screen h-screen"}></Image>*/}
                  <div className="grid gap-2">
                      <h1 id={"animatedText"} className={"text-6xl font-bold z-10 fadeInOut"}>Kiriş Asansör</h1>
                      <p className={"text-md z-10"}>Denizli Asansör</p>
                      <div className={"z-10 flex justify-center"}>
                          <Link href={"/iletisim"}
                                className={"border-blue-700 hover:bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-lg hover:shadow-sky-400 hover:border-sky-400 transition-all duration-700 text-white opacity-100 border-2 p-2 rounded-2xl"}>İletişime
                              Geç</Link>
                      </div>
                  </div>
              </div>

              <div className={"py-16 bg-blue-900 text-white"}>
                  <h1 className={"text-4xl text-center font-bold"}>
                      Hakkımızda
                  </h1>
                  <div className={"md:grid grid-cols-6 mx-[10%] gap-4 my-4 justify-center items-center"}>
                      <div className={"col-span-2 hidden md:grid"}>
                          <Image className={"rounded-xl"} src={hakkimizda} alt={"Hakkımızda"}></Image>
                      </div>
                      <div className="col-span-4 ml-4  ">
                          Kiriş Kiralık Mobil Asansör olarak, Denizli’de evden eve nakliyat sektöründe yenilikçi ve
                          güvenilir çözümler sunmak için buradayız. Yılların verdiği tecrübe ile taşınma sürecinizi
                          kolaylaştırmak ve eşyalarınızı en güvenli şekilde yeni adresinize ulaştırmak için mobil
                          asansörlü nakliyat hizmetini hayata geçirdik. Nakliyat sektörü, her zaman dikkat ve özen
                          gerektiren bir alandır. Biz de bu bilinçle hareket ederek, eşyalarınızı taşırken en yüksek
                          kalite standartlarını koruyoruz.

                          Denizli ve çevresinde taşınmanın ne kadar zahmetli olabileceğini biliyoruz. Özellikle yüksek
                          katlı binalarda oturanlar için eşyaların taşınması büyük bir stres kaynağı olabilir.
                          Geleneksel
                          yöntemlerle taşınmak, eşyalarınızın zarar görme riskini artırırken, aynı zamanda zaman kaybına
                          da neden olabilir. İşte tam bu noktada, Kiriş Kiralık Mobil Asansör olarak devreye giriyoruz.

                          *Mobil Asansörlü Nakliyat Hizmeti ile Kolay Taşınma*

                          {/*Firmamızın sunduğu asansörlü nakliyat hizmeti, taşınma sürecini daha hızlı ve güvenli hale*/}
                          {/*getiren bir çözümdür. Eşyalarınızı binadan indirmek veya binaya çıkarmak için özel olarak*/}
                          {/*tasarlanmış mobil asansörlerimiz, zamandan tasarruf etmenizi sağlarken, eşyalarınızın da zarar*/}
                          {/*görme riskini en aza indirir. Bu sayede, taşınma işleminiz çok daha kısa sürede ve sorunsuz*/}
                          {/*bir*/}
                          {/*şekilde tamamlanır.*/}

                          {/*Denizli’nin farklı bölgelerinde sunduğumuz bu hizmet, özellikle dar merdivenlere sahip binalar*/}
                          {/*için ideal bir çözümdür. Eşyalarınızı taşımak için merdivenleri veya asansörleri kullanmak*/}
                          {/*zorunda kalmadan, doğrudan pencere veya balkon aracılığıyla mobil asansörle taşıma yapıyoruz.*/}
                          {/*Böylece, hem eşyalarınız hem de bina zarar görmez.*/}

                          {/**Neden Kiriş Kiralık Mobil Asansör?**/}

                          {/*Kiriş Kiralık Mobil Asansör olarak, müşteri memnuniyetini her zaman ön planda tutuyoruz.*/}
                          {/*Denizli’de nakliyat denildiğinde ilk akla gelen firmalardan biri olmanın gururunu yaşıyoruz.*/}
                          {/*Eşyalarınızı taşırken gösterdiğimiz özen, hizmet kalitemizle birleştiğinde ortaya çıkan*/}
                          {/*sonuçlardan son derece memnun kalacağınıza eminiz.*/}

                          {/*- *Tecrübeli Kadro:* Nakliyat sürecini en iyi şekilde yönetmek için alanında uzman ve*/}
                          {/*deneyimli*/}
                          {/*bir ekibe sahibiz. Eşyalarınızı taşırken her bir parçanın özenle korunmasını sağlıyoruz.*/}

                          {/*- *Güvenli Taşıma:* Mobil asansörlerimiz, eşyalarınızın güvenli bir şekilde taşınması için*/}
                          {/*tasarlanmıştır. Eşyalarınızın zarar görmemesi için her türlü tedbiri alıyoruz.*/}

                          {/*- *Hızlı ve Pratik:* Asansörlü nakliyat hizmetimiz sayesinde taşınma süreci oldukça hızlı ve*/}
                          {/*pratik bir şekilde tamamlanır. Zaman kaybı yaşamadan yeni adresinize yerleşmenizi sağlıyoruz.*/}

                          {/*- *Uygun Fiyatlar:* Kaliteli hizmeti uygun fiyatlarla sunmak, firmamızın en önemli*/}
                          {/*prensiplerinden biridir. Müşterilerimize en iyi hizmeti en ekonomik şekilde sunuyoruz.*/}

                          {/**Denizli’de Her Türlü Nakliyat İhtiyacınıza Çözüm**/}

                          {/*Evden eve nakliyat dışında, ofis taşımacılığı, fabrika taşımacılığı gibi farklı nakliyat*/}
                          {/*ihtiyaçlarınız için de hizmet veriyoruz. Denizli’nin farklı bölgelerinde bulunan*/}
                          {/*müşterilerimize, kaliteli ve güvenilir bir nakliyat deneyimi sunmak için var gücümüzle*/}
                          {/*çalışıyoruz. Özellikle mobilya, beyaz eşya, hassas eşyalar ve antikalar gibi özel eşyaların*/}
                          {/*taşınmasında ekstra özen gösteriyoruz.*/}

                          {/*Firmamız, Denizli’deki taşınma ihtiyaçlarınıza en uygun çözümü sunmak için her zaman hazırdır.*/}
                          {/*Eşyalarınızın güvenliği ve müşteri memnuniyeti bizim için önceliklidir. Müşterilerimize*/}
                          {/*sunduğumuz çözümlerle, taşınma sürecinin zahmetli ve stresli bir süreç olmasını engelliyor,*/}
                          {/*her*/}
                          {/*adımda yanınızda oluyoruz.*/}

                          {/**Hedefimiz: En İyi Nakliyat Deneyimi**/}

                          {/*Kiriş Kiralık Mobil Asansör olarak hedefimiz, Denizli’de taşınmayı bir problem olmaktan*/}
                          {/*çıkararak, kolay ve keyifli bir deneyime dönüştürmektir. Mobil asansörlü nakliyat hizmetimiz,*/}
                          {/*bu*/}
                          {/*hedefe ulaşmamızda bize büyük bir avantaj sağlamaktadır. Müşterilerimize sunduğumuz kaliteli*/}
                          {/*hizmet ile Denizli’de taşınmanın en güvenli ve pratik yolu olmaya devam edeceğiz.*/}

                          {/*Eğer siz de Denizli’de asansörlü nakliyat hizmetine ihtiyaç duyuyorsanız, Kiriş Kiralık Mobil*/}
                          {/*Asansör olarak size en iyi hizmeti sunmak için buradayız. Eşyalarınızı taşırken güven, kalite*/}
                          {/*ve*/}
                          {/*hızdan ödün vermeyen hizmet anlayışımızla yanınızdayız. Bizi tercih ederek taşınma sürecinizin*/}
                          {/*ne kadar kolay olabileceğini keşfedin.*/}
                      </div>

                  </div>
              </div>

              <div className="mt-16">
                  <h1 className="text-4xl text-center font-bold">Hizmetlerimiz</h1>
                  <div className="md:grid grid-cols-6 mx-[10%] gap-12 mt-8 text-white">
                      {/* Flip Container */}
                      <div
                          className="col-span-2 perspective items-center text-center hover:bg-black delay-200 duration-300 rounded-xl justify-center">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda} alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <div className="text-pink-600 text-2xl font-bold">hebele</div>
                              </div>
                          </div>
                      </div>

                      {/* Flip Container */}
                      <div className="col-span-2 mb-4 perspective">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda}
                                         alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <p>Back Side Content</p>
                              </div>
                          </div>
                      </div>
                      {/* Flip Container */}
                      <div className="col-span-2 mb-4 perspective">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda}
                                         alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <p>Back Side Content</p>
                              </div>
                          </div>
                      </div>
                      {/* Flip Container */}
                      <div className="col-span-2 mb-4 perspective">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda}
                                         alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <p>Back Side Content</p>
                              </div>
                          </div>
                      </div>
                      {/* Flip Container */}
                      <div className="col-span-2 mb-4 perspective">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda}
                                         alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <p>Back Side Content</p>
                              </div>
                          </div>
                      </div>
                      {/* Flip Container */}
                      <div className="col-span-2 mb-4 perspective">
                          <div className="flip-card">
                              <div className="flip-card-front">
                                  <Image className="w-full h-full object-cover rounded-xl" src={hakkimizda}
                                         alt="Hakkımızda"/>
                              </div>
                              <div className="flip-card-back">
                                  <p>Back Side Content</p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="">
                  İletişim
              </div>

          </main>
      </main>
  );
}
