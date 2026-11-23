// Edit everything about the portfolio here.
export const config = {
  name: 'Anushka Nellipalli',
  title: 'Full-Stack Developer',
  roles: ['React Developer', 'Python Developer', 'Django Developer', 'Web Developer', 'Problem Solver'],
  email: 'anushkanellipalli7780@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/anushka-nellipalli-277a213ab/',
    github: 'https://github.com/AnushkaNellipalli',
    leetcode: 'https://leetcode.com/u/NellipalliAnushka/',
  },
  education: { degree: 'Bachelor of Technology (B.Tech)', branch: 'Electronics and Communication Engineering (ECE)', college: 'JNTU College of Engineering, Kalikiri', status: '3rd Year' },
  // Update these numbers whenever your LeetCode profile changes.
  leetcode: { total: 51, easy: 32, medium: 19, hard: 0, asOf: 'November 2026' },
  profilePhoto: '/me.jpg', // photo file lives in /public
  projects: [
    {
      title: 'ShopSphere – E-Commerce Web Application',
      description: 'A modern e-commerce web application designed to provide users with a convenient online shopping experience through an interactive interface and backend functionality.',
      tech: ['React', 'JavaScript', 'Python', 'Django', 'SQL', 'REST APIs'],
      // TODO: replace with features you actually built (verified against your live app).
      features: ['React frontend connected to a Django backend', 'Data exchanged through REST APIs', 'Responsive interface'],
      live: 'https://shopsphere-beryl-three.vercel.app',
      github: '', // add repo URL; button hides until set
      screenshot: '', // e.g. '/shopsphere.png' in /public
    },
    {
      title: 'Job Portal – Job Application Platform',
      description: 'A web-based job portal application designed to help users explore job opportunities and manage job-related activities through a user-friendly interface.',
      tech: ['React', 'JavaScript', 'Python', 'Django', 'SQL', 'REST APIs'],
      features: ['Django backend with an admin dashboard', 'Job data managed through REST APIs', 'React frontend'],
      live: 'https://jobportal-tv4m.onrender.com/admin/',
      liveNote: 'This link opens the Django admin, which requires a login.',
      github: '',
      screenshot: '',
    },
  ],
}
