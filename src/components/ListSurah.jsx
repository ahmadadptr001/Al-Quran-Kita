"use client";

import { Fieldset } from "primereact/fieldset";
import { Skeleton } from "primereact/skeleton";

import { GetDaftarSurah } from "@/api_external/DaftarSurah";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";

export default function ListSurah() {
    const [templateResult, setTemplateResult] = useState("");

    useEffect(() => {
        (async () => {
            try {
                setTemplateResult(cardSkeleton());
                const semua_data = await GetDaftarSurah(
                    "https://equran.id/api/v2/surat"
                );
                setTemplateResult(cardTemplate(semua_data));
            } catch (error) {
                const result = `
                                                  <p className="text-red-700 font-bold">Error 404</p>
                                        `;
                setTemplateResult(result);
            }
        })();
    }, []);

    // function template card
    const cardTemplate = (datas) => {
        return (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {datas.map((item, index) => (
                        <div
                            id="card-result"
                            className="border-1 border-gray-400 p-3 !text-[1rem]"
                            key={index}
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
                                    {item.jumlahAyat} ayat - {item.tempatTurun}
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
            </>
        );
    };

    // function template card skeleton
    const cardSkeleton = () => {
        return (
            <>
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
            </>
        );
    };

    return (
        <>
            <div className="container mx-auto px-3 my-7">
                <Fieldset legend="List Surah">{templateResult}</Fieldset>
            </div>
        </>
    );
}
