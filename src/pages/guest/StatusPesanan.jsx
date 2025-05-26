export default function StatusPesanan (){
    return (
		<div className="flex flex-col items-center justify-center m-5 p-5 bg-yellow-300">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center mb-4 text-orange-500">Tentang Kami</h2>

				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						email:
					</label>
					<input
						type="char"
						placeholder="Masukkan alamat emailmu"
						className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Nomor Pesanan: 
					</label>
                    <input
                    type="number"
                    placeholder="Masukkan order ID"
                    />
				</div>
			</div>
		</div>
	);
}
