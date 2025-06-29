import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(form.username, form.email, form.password);
      navigate("/Hero");
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 font-sans">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 hidden md:flex items-center justify-center bg-pink-50 p-10"
        >
          <div className="text-center">
            <img
              src="/IMG-20250627-WA0106.jpg"
              alt="Book Reading"
              className="w-72 mx-auto mb-6 rounded-lg shadow-md"
            />
            <p className="text-lg text-pink-600 italic font-medium">
              "Create your account and start telling your own tale."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Join the Story World 🌸</h2>
          <p className="text-sm text-gray-500 mb-6">
            Register to write, read, and discover beautiful tales.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>

            <p className="text-sm text-gray-500 text-center mt-6">
              Already have an account?{" "}
              <Link to="/UserLogin" className="text-pink-500 font-medium hover:underline">
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;