import Image from "next/image";
import hakkimizda from "@/public/asansor.jpg";
import React from "react";



export default function Home() {
  return (
      <main className="">
          <main className={""}>
              <div className="flex h-screen w-full items-center text-center justify-center bg-black text-white">
              <span className={"flex bg-[url('/asansor.jpg')] h-full w-full absolute opacity-65 bg-fixed bg-cover"}>

              </span>
                  {/*<Image src={asansor} alt={"Asansör"} className={"opacity-10 absolute w-screen h-screen"}></Image>*/}
                  <div className="grid gap-2">
                      <h1 className={"text-6xl font-bold z-10"}>Kiriş Asansör</h1>
                      <p className={"text-md z-10"}>Denizli Asansör</p>
                  </div>
              </div>

              <div className={"mt-16"}>
                  <h1 className={"text-4xl text-center font-bold"}>
                      Hakkımızda
                  </h1>
                  <div className={"grid grid-cols-6 mx-[10%] gap-4 my-4 justify-center items-center"}>
                      <div className={"col-span-2"}>
                          <Image className={"rounded-xl"} src={hakkimizda} alt={"Hakkımızda"}></Image>
                      </div>
                      <div className="col-span-4">
                          Lorem ipsum dolor sit amet, consectetu mipsum dolor sit amet, consectetur adipisicing elit.
                          Commodi
                          consequatur delectus dignissimos, dolor eveniet fugiat fugit magni mollitia, nesciunt nisi
                          nulla
                          odio omnis placeat, quis repellendus reprehenderit totam vel voluptas. Lorem ipsum dolor sit
                          amet,
                          consectetur adipisicing elit. Commodi cum eaque, illum in, minima necessitatibus perferendis
                          quas
                          quisquam recusandae repellat, repudiandae soluta ut veniam voluptates voluptatibus. Ab
                          aspernatur,
                          quo? Excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
                          consequatur
                          deleniti dolorum, earum eos, ex expedita in inventore nemo odit porro quos ratione repellendus
                          repudiandae, sequi voluptatum. Aspernatur, iure! lorem
                      </div>

                  </div>
              </div>

              <div className={"bg-blue-900 text-white"}>

                  Hizmetlerimiz

              </div>

              <div className="">
                  İletişim
              </div>

          </main>
      </main>
  );
}
