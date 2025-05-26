import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Header from '../../components/Header';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-10 bg-green-50"> {/* Menambahkan background hijau */}
                <Header />
                {/* Konten Dashboard */}
                <div className="mt-5">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    {/* Tambahkan konten dashboard lainnya di sini */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;