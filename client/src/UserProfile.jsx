import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: 'storyfan99',
    email: 'user@example.com',
    bio: 'I love fantasy stories and dark academia.',
    genres: ['Fantasy', 'Dark Academia', 'Adventure'],
    joinedDate: new Date('2024-12-20T10:00:00Z'),
    avatar: 'https://i.pravatar.cc/150?u=storyfan99', // example avatar
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    bio: user.bio,
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, ...formData }));
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/UserLogin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-xl font-sans">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-28 h-28 rounded-full shadow-md border-4 border-white mb-4"
          />

          {/* Username & Email */}
          <h2 className="text-2xl font-bold text-pink-600">{user.username}</h2>
          <p className="text-sm text-gray-500 mb-4">{user.email}</p>
        </div>

        {/* Bio / Form */}
        <div className="space-y-4">
          {isEditing ? (
            <>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded-md"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded-md"
                rows={3}
              />
            </>
          ) : (
            <p className="text-gray-700 text-center">{user.bio}</p>
          )}

          {/* Genres */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Favorite Genres</h3>
            <div className="flex flex-wrap gap-2">
              {user.genres.map((genre, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-pink-50 rounded-lg border border-pink-200 px-4 py-3 space-y-2 mt-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-pink-600">Username:</span>{' '}
              {user.username}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-pink-600">Email:</span>{' '}
              {user.email}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-pink-600">Account Created:</span>{' '}
              {formatDistanceToNow(new Date(user.joinedDate), { addSuffix: true })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={isEditing ? handleSave : handleEditToggle}
              className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
            >
              {isEditing ? 'Save' : 'Edit Profile'}
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
