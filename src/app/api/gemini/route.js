import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
  const body = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `
                  Carikan saya surah sesuai perintah client di bawah dan ikuti maksud client tersebut mengarah ke surah apa.
                  Jika anda sudah tau maksud surah yang dituju misal maka jawab sesuai nomor urut (tipe nya list atau []) dari surah tersebut,
                  misal anda sudah mengetahui yang client maksud adalah surah al-baqarah maka jawab '[2]' tanpa penjelasan apapun lagi
                  cukup hanya list angka. jika client menginput sesuatu nilai yang begitu memiliki banyak kemungkinan surah, misal client
                  menginput 'al-a' maka buat dalam bentuk list angka-angka yang kemungkinan termasuk surah tersebut misal dalam hal ini yan termasuk
                  dalam 'al-a' adalah al-an'am, al-a'raf dsb tulis dalam bentuk list angka sesuai urutan surah tersebut [6, .., ..].
                  
                  berikut perintah dari client "${body.prompt}"`,
    });
    
    return new Response(JSON.stringify({ result: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

}


