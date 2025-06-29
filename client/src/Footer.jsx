import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white text-center py-6 mt-12">
    <p>&copy; {new Date().getFullYear()} StoryNest. All rights reserved.</p>
  </footer>
  )
}

export default Footer