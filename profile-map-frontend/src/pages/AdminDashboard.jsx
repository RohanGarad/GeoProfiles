import React from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminDashboard = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Admin Dashboard</h1>
      </header>
      <AdminPanel />
    </div>
  );
};

export default AdminDashboard;
