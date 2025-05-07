"use client"

import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Tree } from "primereact/tree";

import { useState } from "react";

export default function Navigasi() {
          const itemNavigasi = [
                    {
                              label: "Home",
                              icon: "pi pi-home",
                              command: () => window.location.href = "/"
                    },
                    {
                              label: "Tentang",
                              icon: "pi pi-info-circle",
                              items: [
                                        { label: "Tentang Website", icon: "pi pi-globe" },
                                        { label: "Hubungi Kami", icon: "pi pi-envelope" },
                                        { label: "Donasi Anda", icon: "pi pi-heart" },
                              ]
                    }, 
                    {
                              label: "Daftar Surah",
                              icon: "pi pi-book"
                    },
                    {
                              label: "Tafsir",
                              icon: "pi pi-pencil"
                    },
          ];

          // variabel untuk memunculkan sidebar
          const [visibleSidebar, setVisibleSidebar] = useState(false);

          // variabel isi tree pada sidebar
          const treeItems = [
                    {
                              key: '0',
                              label: 'Home',
                              icon: 'pi pi-home pi-fw',
                              data: { route: '/' }
                    },
                    {
                              key: '1',
                              label: "Daftar Surah",
                              icon: 'pi pi-book pi-fw',
                    },
                    {
                              key: '2',
                              label: "Tentang",
                              icon: "pi pi-info-circle",
                              children: [
                                        { key:'2-1', label: "Tentang Website", icon: "pi pi-globe" },
                                        { key:'2-2', label: "Hubungi Kami", icon: "pi pi-envelope" },
                                        { key:'2-3', label: "Donasi Anda", icon: "pi pi-heart" },
                              ]
                    },
                    {
                              key: '3',
                              label: "Tafsir",
                              icon: "pi pi-pencil",
                    }
          ]

          const HandleSelectTree = (node) => {
                    if (node.data?.route) {
                              window.location.href = node.data?.route;
                    }
          }
          return (
                    <>
                              <header className="flex items-center justify-between bg-[#F4F8FB] p-4 px-5 sticky top-0 z-50">
                                        <span className="text-[#708DBD] font-[800] text-[1.7rem] line-clamp-1">Al-Qur'an Kita</span>
                                        <Menubar model={itemNavigasi} className="!hidden lg:!block !border-none !outline-none !rounded-none !p-0 !bg-transparent"/>
                                        
                                        {/* Disini bagian sidebar */}
                                        <Button icon="pi pi-bars" className="text-[1rem] !py-[7px] !px-[12px] md:!hidden !block" onClick={()=>setVisibleSidebar(true)}/>
                                        <Sidebar visible={visibleSidebar} position="right" onHide={() => setVisibleSidebar(false)} >
                                                  <Tree value={treeItems} onNodeClick={(e) => HandleSelectTree(e.node)}/>
                                        </Sidebar>
                              </header>
                    </>
          )
}