
export default function Footer() {
          return (
                    <>
                    <footer className="!text-[60%] sm:!text-[80%] mt-10 bg-gray-800 py-7 !text-white px-3">
                              <div className="container mx-auto gap-7 grid grid-cols-1 md:grid-cols-2 justify-center">
                                        <div className="subfooter-left flex flex-col justify-between">

                                                  <div>
                                                            <p className="font-extrabold text-[1.4rem] mb-2">Al-Qur'an Kita</p>
                                                            <p className="text-gray-500">
                                                                      Sulawesi Tenggara, Kendari, Konawe Selatan, Laeya, Jl. Torobulu - Kendari.
                                                            </p>
                                                  </div>

                                                  <div className="mt-10 md:mt-0 text-gray-500">
                                                            <p>Copyright &copy; 2025. All Rights Reversed - Al-Qur'an Kita</p>
                                                  </div>

                                        </div>
                                        <ul className="subfooter-right flex flex-col md:flex-row gap-7 md:justify-center mt-10 md:mt-0">
                                                  <li>
                                                            <strong>Informasi</strong>
                                                            <p className="mt-3">Privacy Police</p>
                                                  </li>
                                                  <li>
                                                            <strong>Tautan Terkait</strong>
                                                            <p className="mt-3">Daftar Surah</p>
                                                            <p>Bookmark</p>
                                                  </li>
                                                  <li>
                                                            <strong>Konten</strong>
                                                            <p className="mt-3">Youtube</p>
                                                            <p>Facebook</p>
                                                            <p>Instagram</p>
                                                            <p>Whatsapp</p>
                                                  </li>
                                        </ul>
                              </div>
                    </footer>
                    </>
          )
}