'use client'

import { KartuProfil } from "@/components/KartuProfil";

export default function Home() {
  return (
    <main className="halaman">
      <h1 className="font-extrabold">Kartu Profil Interaktif</h1>
      <p className="text-xs">Latihan React hari pertama.</p>

      {/* Kartu Profil */}
      <div className="flex flex-row gap-1.5">
        <KartuProfil nama="Agha" kelas="XII RPL 1" hobi="gooning" />
        <KartuProfil nama="Rakha" kelas="XII RPL 1" hobi="Gaming" />
        <KartuProfil nama="Zidan" kelas="XII RPL 1" hobi="Pacuan Waifu" />
      </div>
    </main>
  );
}