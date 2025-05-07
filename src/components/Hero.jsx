'use-client'

import { Button } from "primereact/button";

export default function Hero() {

          

          return (
                    <>
                              <section className="Hero relative">
                                        <div className="backdrop-dark absolute w-full h-full z-[1] bg-[#0808085d]"></div>
                                        <img src="/assets/hero.jpg" alt="al-qur'an" className="absolute w-full h-full object-cover"/>
                                        <div className="container mx-auto h-[400px] w-full z-20  relative flex items-center justify-center flex-col gap-4 px-3">
                                                  <h1 className="text-3xl sm:text-4xl font-bold text-center text-white"> Temukan <span className="text-[#a490ff]">Kedamaian</span> dalam Setiap <span className="text-[#a490ff]">Ayat</span></h1>
                                                  <p className="text-sm sm:text-lg text-gray-200 text-center max-w-xl mx-auto">
                                                            Al-Qur'an digital lengkap dengan terjemahan, tafsir, dan audio. Mudah diakses kapan saja.
                                                  </p>
                                                  <Button icon="pi pi-book" label="Mulai Membaca"className="!mt-7"/>

                                        </div>
                              </section>
                    </>
          )
}