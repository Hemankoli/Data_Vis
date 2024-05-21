import React, { useState } from 'react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-900 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
        <h1 className="text-black text-2xl mb-4 text-center">Welcome Admin !!!</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black text-sm mb-1">Admin Email</label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:border-blue-500 bg-transparent"
              placeholder="Enter your username"
              value="admin@gmail.com"
              disabled
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:border-blue-500 bg-transparent"
              placeholder="Enter your password"
              value="admin"
              disabled
            />
          </div>
          <button
            className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        {/* AlertDialog */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-purple-800 text-black rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome Admin !!!</h2>
              <p>Redirecting to the dashboard page...</p>
              <button
                className="mt-4 bg-red-500 text-black py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
