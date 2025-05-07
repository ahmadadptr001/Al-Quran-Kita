// ini adalah halaman awal pada website

import Navigasi from "@/components/Navigasi";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Support from "@/components/Support";
import ListSurah from "@/components/ListSurah";

export default function Home() {
          return (
                    <>
                              <Navigasi />
                              <Hero />
                              <Search />
                              <Support />
                              <ListSurah />
                              <Footer />

                    </>
          )
}