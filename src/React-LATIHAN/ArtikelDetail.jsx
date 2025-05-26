// ArtikelDetail.jsx
import React from "react";

export default function ArtikelDetail() {
    return (
        <div>
            <h1>Artikel Detail</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard nama="Zuriel" nim="2355301140" tanggal={new Date().toLocaleDateString()} />
            <UserCard nama="Goku" nim="999999" tanggal={new Date().toLocaleDateString()} />

            {/* Judul sebelum tabel */}
            <h2 style={{ marginTop: "20px", textAlign: "center" }}>DATA DIRI KELAS 2 TI E</h2>

            <MyTable />

            {/* Tambahkan komponen Villain */}
            <Villain />
        </div>
    );
}

// Komponen Salam dari Binjai
function GreetingBinjai() {
    return <small>Salam dari Binjai</small>;
}

// Komponen Quote
function QuoteText() {
    return (
        <div>
            <hr />
            <p>Mulutmu Harimaumu</p>
            <p>Aku ingin jadi macan</p>
        </div>
    );
}

// Komponen Kartu User
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

// Komponen Tabel Data
function MyTable() {
    return (
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
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
            </tbody>
        </table>
    );
}

// Komponen Villain
function Villain() {
    return (
        <div>
            <h1>Villain</h1>
            <p>
                Villain adalah karakter antagonis utama dalam sebuah cerita yang berperan sebagai lawan 
                atau musuh dari tokoh protagonis istilah ini berasal dari bahasa Inggris yang berarti 
                "penjahat" atau "orang jahat". Dalam konteks narasi, villain merupakan sosok yang mencipta
                kan konflik dan hambatan bagi tokoh utama dalam mencapai tujuannya.

                Secara umum, villain digambarkan sebagai karakter dengan sifat-sifat 
                negatif seperti jahat, egois, kejam, atau destruktif. Mereka seringkali
                memiliki motivasi dan tujuan yang bertentangan dengan nilai-nilai moral 
                yang dianut oleh masyarakat umum. Namun, villain yang kompleks dan menarik 
                biasanya memiliki latar belakang atau alasan yang membuat mereka menjadi 
                "jahat".
            </p>
        </div>
    );
}
