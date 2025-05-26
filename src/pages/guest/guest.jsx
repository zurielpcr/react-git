export default function GuestLayout() {
	return (
		<div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Tentang Kami</h2>

				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Nama:
					</label>
					<input
						type="char"
						placeholder="Masukkan namamu"
						className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Nim: 
					</label>
                    <input
                    type="number"
                    placeholder="Masukkan nomor nimmu"
                    />
				</div>
                <div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Info Kontak: 
					</label>
                    <input
                    type="number"
                    placeholder="Masukkan nomor kontakmu"
                    />
				</div>
			</div>
		</div>
	);
}
