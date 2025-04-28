import React from "react";
import Image from "next/image";
import gal1 from "@/public/gal1.jpeg"
import gal2 from "@/public/gal2.jpeg"
import gal3 from "@/public/gal3.jpeg"
import gal4 from "@/public/gal4.jpeg"
import gal5 from "@/public/gal5.jpeg"
import gal6 from "@/public/gal6.jpeg"
import gal7 from "@/public/gal7.jpeg"


export default function Galeri() {
    return (
        <main className={"Galeri"}>
            
                <h1 className={"text-4xl text-center mt-16 font-bold"}>
                    Galeri
                </h1>
                <div className="mt-16">
                                  
                                  <div className="md:grid grid-cols-6 mx-[10%] gap-12 mt-8 text-white">
                                     
                                      <div className="col-span-2 mb-4 perspective">
                                          
                                                  <Image className="w-full h-full object-cover rounded-xl" src={gal1}
                                                         alt="gal1"/>
                                             
                                              
                                          
                                      </div>
                                  
                                      <div className="col-span-2 mb-4 perspective">
                                         
                                                  <Image className="w-full h-full object-cover rounded-xl " src={gal2}
                                                         alt="gal2"/>
                
                                             
                                             
                                         
                                      </div>
                                 
                                      <div className="col-span-2 mb-4 perspective">
                                     
                                                  <Image className="w-full h-full object-cover rounded-xl" src={gal3}
                                                         alt="gal3"/>
                                            
                                              
                                          
                                      </div>
                                  
                                      <div className="col-span-2 mb-4 perspective">
                                          
                                                  <Image className="w-full h-full object-cover rounded-xl" src={gal4}
                                                         alt="gal4"/>
                                              
                                      </div>
                                      
                                      <div className="col-span-2 mb-4 perspective">
                                          
                                                  <Image className="w-full h-full object-cover rounded-xl" src={gal5}
                                                         alt="gal5"/>
                                              
                                             
                                      </div>
                               
                                      <div className="col-span-2 mb-4 perspective">
                                          
                                                  <Image className="w-full h-full object-cover rounded-xl" src={gal6}
                                                         alt="gal6"/>
                                             
                                        </div>

                    
                        
                </div>
            </div>
        </main>
    );
}