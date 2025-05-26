export default function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard nama="Zuriel" nim="2355301140" tanggal={new Date().toLocaleDateString()} />
            <UserCard nama="Goku" nim="999999" tanggal={new Date().toLocaleDateString()} />

            {/* Judul sebelum tabel */}
            <h2 style={{ marginTop: "20px", textAlign: "center" }}>DATA DIRI KELAS 2 TI E</h2>

            <MyTable />
        </div>
    );
}

function GreetingBinjai() {
    return <small>Salam dari Binjai</small>;
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    );
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    );
}



function MyTable() {
    return (
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black", marginTop: "10px" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>Nama</th>
                    <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>NIM</th>
                    <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>Tempat Tinggal</th>
                    <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>Tanggal Lahir</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Isyan</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301137</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Bangkinang</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>23 November 2005</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Irfan</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301136</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Sukajadi</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2 September 2004</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Henry</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301100</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Nangka</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>20 Juni 2004</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Fikri</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301000</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Kulim</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2 Juni 2005</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Rafli</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301172</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Sungai Batak</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>26 Januari 2003</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Rafie</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301142</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Harapan Raya</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>20 Desember 2003</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Ilham</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>2355301040</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>Marpoyan</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>22 Juli 2004</td>
                </tr>
            </tbody>
        </table>
    );
}

export { MyTable };
