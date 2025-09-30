import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    } else {
      navigate("/"); // if no user, go back to login
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
     <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">MyApp Dashboard</h1>
        <div className="flex items-center gap-6">
          <span className="font-medium">Hello, {user?.username}</span>
          <button
            onClick={logout}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        {user ? (
          <>
            <h2 className="text-4xl font-bold text-white-800 mb-4">
              Welcome, {user.username} 🎉
            </h2>
            <p className="text-white-600 text-lg max-w-xl">
              You are successfully logged in. This is your dashboard where you
              can manage your profile, settings, and more.
            </p>
          </>
        ) : (
          <p className="text-white-600">Loading...</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
