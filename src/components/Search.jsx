"use client";

import { GetSurah } from "@/api_external/Surah"

import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";

export default function Search() {
          const [prompt, setPrompt] = useState("");
          const [resultValue, setResultValue] = useState([]);
          const [tampilan, setTampilan] = useState("");

          const base_endpoint = "https://equran.id/api/v2/surat/"; // nanti disini tambahkan nomor surah misa 1,2,3, dst

          useEffect(() => {
                    setTampilan(cardDefault());
          }, []);

          const getResultPrompt = async () => {
                    try {
                              setTampilan(cardSkeleton());

                              const res = await fetch("/api/gemini", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ prompt: prompt }),
                              });

                              const data = await res.json();
                              const result = JSON.parse(data.result)

                              const semua_hasil = await Promise.all(
                                        result.map(async (i, ind) => {
                                                  const endpoint = `${base_endpoint}${i}`;
                                                  const hasil = await GetSurah(endpoint);
                                                  return hasil.data
                                        })
                              );
                              setResultValue(semua_hasil);

                              setTampilan(cardTemplate());
                              
                    } catch (e) {
                              setTampilan(cardError(e));
                    }
          };

          const cardTemplate = () => {
                    return (
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {resultValue.map((item, index1) => (
                                        <div
                                                  id="card-result"
                                                  className="border-1 border-gray-400 p-3 !text-[1rem]"
                                                  key={index1}
                                        >
                                                  <div
                                                  id="header-card-result"
                                                  className="flex justify-between items-center"
                                                  >
                                                  <div className="font-light line-clamp-1">
                                                            <span className="!font-extrabold">
                                                            {item.namaLatin}
                                                            </span>{" "}
                                                            ({item.arti})
                                                  </div>
                                                  <div className="flex items-center justify-center relative w-[40px] h-[40px] !text-[.8rem]">
                                                            <img
                                                            src="/assets/frame.png"
                                                            alt="frame number"
                                                            className="inset-0 absolute"
                                                            />
                                                            {item.nomor}
                                                  </div>
                                                  </div>

                                                  <div id="body-card-result" className="">
                                                  <p>{item.nama}</p>
                                                  <p>
                                                            {item.jumlahAyat} ayat -{" "}
                                                            {item.tempatTurun}
                                                  </p>
                                                  <p>
                                                            <button className="flex !items-center gap-2 mt-1 ps-1 pe-2 py-1 text-[.8rem] font-bold justify-center rounded-[50rem] bg-gray-200">
                                                            <img
                                                            src="/assets/play-button.png"
                                                            alt="button play"
                                                            className="w-[20px] h-[20px]"
                                                            />
                                                            play
                                                            </button>
                                                  </p>
                                                  <p className="line-clamp-2 mt-2">
                                                            {item.deskripsi}
                                                  </p>
                                                  <p>
                                                            <Button
                                                            label="Detail"
                                                            className="!py-[5px] !px-[12px] !mt-5"
                                                            />
                                                  </p>
                                                  </div>
                                        </div>
                                        ))}
                                        </div>
                    );
          };

          const cardSkeleton = () => {
                    return (
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                                        <Skeleton className="w-full !h-[10rem]" />
                              </div>
                    );
          };

          const cardError = (e) => {
                    return (
                              <div className="flex items-center justify-center gap-3 flex-col my-5">
                              <img
                                        src="/assets/not-search.gif"
                                        alt="not search animation gif"
                                        className="w-[200px] h-[200px] object-cover"
                              />
                              <span className="font-extrabold sm:text-[2rem] text-red-500 text-[1.6rem]">
                                        {e.message}
                              </span>
                              </div>
                    );
          };

          const cardDefault = () => {
                    return (
                              <div className="flex items-center justify-center gap-3 flex-col my-5">
                              <img
                                        src="/assets/not-search.gif"
                                        alt="not search animation gif"
                                        className="w-[200px] h-[200px] object-cover"
                              />
                              <span className="font-extrabold sm:text-[2rem] text-gray-400 text-[1.6rem]">
                                        Belum ada pencarian
                              </span>
                              </div>
                    );
          };

          return (
                    <>
                              <div className="container mx-auto px-3 py-7">
                                        <div className="box-search flex gap-2 justify-center items-center mb-5">
                                                  <input
                                                  onChange={(e) => setPrompt(e.target.value)}
                                                  type="search"
                                                  className="p-3 rounded-sm outline-1 focus:outline-2 outline-gray-600"
                                                  placeholder="Cari Surah, ayat, .."
                                                  />
                                                  <Button
                                                  icon="pi pi-search"
                                                  className="!px-7 !rounded-sm"
                                                  onClick={() => getResultPrompt()}
                                                  />
                                        </div>
                                        {tampilan}
                              </div>
                    </>
          );
}
