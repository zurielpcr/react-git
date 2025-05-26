import { useState } from "react";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState(""); // Menyimpan input gaji sebagai string awalnya
  const pajak = 0.11; // Pajak 11%
  
  // Konversi gaji ke number
  const gajiNumber = parseFloat(gaji);
  const totalGaji = !isNaN(gajiNumber) && gajiNumber > 0 ? gajiNumber - (gajiNumber * pajak) : 0;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-green-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black-700">Hitung Gaji Bersih</h2>

        <div className="mb-4">
          <label className="block text-black-700 font-medium mb-1">Gaji Pokok</label>
          <input
            type="number"
            placeholder="Masukkan jumlah gaji"
            value={gaji}
            onChange={(e) => setGaji(e.target.value)}
            className="w-full p-2 border border-black-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black-700 font-medium mb-1">
            Pajak: <b className="text-red-500">11%</b>
          </label>
        </div>

        {!gaji || isNaN(gajiNumber) || gajiNumber <= 0 ? (
          <div className="mt-4 p-3 bg-yellow-200 border-l-4 border-orange-500 text-orange-800">
            <p className="font-semibold">Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif).</p>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
