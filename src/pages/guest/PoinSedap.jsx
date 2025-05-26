export default function PoinSedap () {
    return (
		<div className="flex flex-col items-center justify-center m-5 p-5 bg-yellow-300">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center mb-4 text-orange-500">Tentang Kami</h2>

				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Nomor HP: 
					</label>
                    <input
                    type="number"
                    placeholder="Masukkan nomor hp"
                    />
				</div>
			</div>
		</div>
	);
}