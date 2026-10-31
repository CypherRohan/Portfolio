import React, { useState, useEffect } from 'react';

function FuturisticLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent animate-spin" style={{ filter: 'drop-shadow(0 0 20px rgb(255, 255, 255))' }} />
          <div className="absolute inset-4 rounded-full border-4 border-green-700 border-b-transparent animate-spin-slow" style={{ filter: 'drop-shadow(0 0 10px #15803d)' }} />
          <div className="absolute inset-8 rounded-full bg-green-600 opacity-30 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-widest animate-pulse">ROHAN SAINI</h1>
        <p className="text-green-200 mt-2 animate-fade-in">Loading Portfolio...</p>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    // Initialize AOS after loading
    setTimeout(() => {
      if (window.AOS) window.AOS.init({ once: true, duration: 900, easing: 'ease-out-cubic' });
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  // Close nav on route/hash change or resize
  useEffect(() => {
    const closeNav = () => setNavOpen(false);
    window.addEventListener('hashchange', closeNav);
    window.addEventListener('resize', closeNav);
    return () => {
      window.removeEventListener('hashchange', closeNav);
      window.removeEventListener('resize', closeNav);
    };
  }, []);

  if (loading) return <FuturisticLoader />;

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 bg-opacity-90 shadow-lg backdrop-blur-md border-b border-white/20" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', borderBottom: '1px solid rgba(255,255,255,0.12)'}} data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center relative">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Open navigation menu"
            onClick={() => setNavOpen(v => !v)}
          >
            {navOpen ? (
              // Close (X) icon
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/></svg>
            ) : (
              // Hamburger icon
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
          {/* Desktop nav */}
          <div className="flex-1 flex justify-center space-x-12 hidden md:flex">
            <a href="#home" className="navbar-link inline-block hover:text-green-400 transition">Home</a>
            <a href="#about" className="navbar-link inline-block hover:text-green-400 transition">About</a>
            <a href="#skills" className="navbar-link inline-block hover:text-green-400 transition">Skills</a>
            <a href="#projects" className="navbar-link inline-block hover:text-green-400 transition">Projects</a>
            <a href="#footer" className="navbar-link inline-block hover:text-green-400 transition">Contact</a>
          </div>
          {/* Mobile nav dropdown */}
          {navOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 bg-opacity-95 shadow-lg border-b border-white/10 animate-fade-in-down z-50">
              <div className="flex flex-col items-center py-4 gap-4">
                <a href="#home" className="navbar-link block w-full text-center py-2 hover:text-green-400 transition" onClick={() => setNavOpen(false)}>Home</a>
                <a href="#about" className="navbar-link block w-full text-center py-2 hover:text-green-400 transition" onClick={() => setNavOpen(false)}>About</a>
                <a href="#skills" className="navbar-link block w-full text-center py-2 hover:text-green-400 transition" onClick={() => setNavOpen(false)}>Skills</a>
                <a href="#projects" className="navbar-link block w-full text-center py-2 hover:text-green-400 transition" onClick={() => setNavOpen(false)}>Projects</a>
                <a href="#footer" className="navbar-link block w-full text-center py-2 hover:text-green-400 transition" onClick={() => setNavOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-green-900 relative" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-transparent animate-pulse" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm Rohan Saini</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-aos="fade-up" data-aos-delay="400">B.Tech CSE Graduate & Web Developer</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="600">I build beautiful, modern, and responsive web experiences. B.Tech graduate in Computer Science from Graphic Era Hill University, Dehradun. Passionate about AI, web development, and building impactful projects.</p>
          <div className="flex justify-center gap-4 mb-4" data-aos="zoom-in" data-aos-delay="800">
            <a href="mailto:rrrohansaini@gmail.com" aria-label="Email" className="relative group hover:text-green-400 transition-transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065 2.4 6.6A2 2 0 0 1 4 6h16a2 2 0 0 1 1.6.6L12 13.065zm9.6-6.6A4 4 0 0 0 20 4H4a4 4 0 0 0-3.6 2.465l10.8 7.2a1 1 0 0 0 1.2 0l10.8-7.2A4 4 0 0 0 21.6 6.465zM2 8.236V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.236l-9.2 6.133a3 3 0 0 1-3.6 0L2 8.236z"/></svg>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-green-300 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">Email</span>
            </a>
            <a href="https://github.com/CypherRohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="relative group hover:text-green-400 transition-transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-green-300 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rohan-saini-838642290" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="relative group hover:text-green-400 transition-transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-green-300 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">LinkedIn</span>
            </a>
            <a href="https://drive.google.com/file/d/1jc_YMK56p3suXIYNX0tU11RI1p_W_6Mc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="relative group hover:text-green-400 transition-transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm1 1.5V8h4.5zm-7 7.5h8v2h-8zm0 4h8v2h-8z"/></svg>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-green-300 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">Resume</span>
            </a>
          </div>
          <a href="#projects" className="inline-block px-8 py-3 bg-green-400 text-gray-950 font-bold rounded-full shadow-lg hover:bg-green-300 transition hover:scale-105" data-aos="zoom-in" data-aos-delay="1000">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-10" data-aos="fade-right">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-green-400" data-aos="fade-down" data-aos-delay="400">About Me</h3>
          <p className="text-lg text-gray-300 mb-2">I'm a B.Tech (CSE) Graduate of Graphic Era Hill University, Dehradun, with a strong interest in AI, web development, and building real-world solutions. I enjoy learning new technologies and applying them to solve problems.</p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-green-300 mb-2" data-aos="fade-right" data-aos-delay="600">Education</h4>
            <ul className="text-gray-300 list-disc list-inside">
              <li data-aos="fade-up" data-aos-delay="700"><strong>B.Tech (CSE):</strong> Graphic Era Hill University, Dehradun (2022-2026) — GPA: 8.01/10.0</li>
              <li data-aos="fade-up" data-aos-delay="800"><strong>XII:</strong> A.N. International School, Bijnor (2021) — 94.40%</li>
              <li data-aos="fade-up" data-aos-delay="900"><strong>X:</strong> A.N. International School, Bijnor (2019) — 89.80%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 py-24" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-10 text-green-400 text-center" data-aos="fade-down">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="0">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>C</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>C++</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="700">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>MySQL</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Bootstrap" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>NodeJS</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="Bootstrap" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>MongoDB</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="800">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>PHP</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="900">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1000">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Bash" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>Git Bash</span>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-12 h-12 mb-2 transition-transform hover:scale-125" />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <span>Other: TailwindCSS, Bootstrap, SQLite, Windows, Ubuntu, VS Code, Git, GitHub, DB Browser, Google Colab, Notepad++</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-4" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-10 text-green-400 text-center" data-aos="fade-down">Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 0:College Event Management Calender */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="0">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 text-green-300">University Event Calendar</h4>
              <div className="flex gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="w-7 h-7 invert" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-7 h-7" />
              </div>
              <p className="text-gray-300 mb-4">Developed a React, Node.js, MongoDB platform used by 200+ university members, featuring clash detection, review workflows, and PDF/Excel exports, reducing event conflicts by 40% and reporting time by 50%..</p>
              <div className="flex gap-4">
                <a href="https://github.com/Stack-Nova/Event-Calendar.git" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://event-calendar-alpha-red.vercel.app/" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          {/* Project 1: Snakebeans: Python to Java Transpiler */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="0">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 text-green-300">Snakebeans: Python to Java Transpiler</h4>
              <div className="flex gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-7 h-7 invert" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-7 h-7" />
              </div>
              <p className="text-gray-300 mb-4">A web-based transpiler that converts Python code to Java, built for compiler PBL. Features a user-friendly interface and real-time code translation.</p>
              <div className="flex gap-4">
                <a href="https://github.com/CypherRohan/Snakebeans-Python-To-Java-Transpiler" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://snakebeans-python-to-java-transpiler.onrender.com/" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          {/* Project 2: Process Schedular */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="150">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 text-green-300">Process Schedular</h4>
              <div className="flex gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-7 h-7" />
              </div>
              <p className="text-gray-300 mb-4">A web-based simulator for visualizing and understanding process scheduling algorithms. Built with React, it provides interactive Gantt charts and statistics for various CPU scheduling strategies.</p>
              <div className="flex gap-4">
                <a href="https://github.com/CypherRohan/Process-Schedular" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://process-schedular-simulator.netlify.app/" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
          {/* Project 3: Facial Expression Recognition */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="300">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2 text-green-300">Facial Expression Recognition</h4>
              <div className="flex gap-2 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-7 h-7" />
              </div>
              <p className="text-gray-300 mb-4">Created a real-time facial expression detection model powered by YOLOv8, ensuring robust and efficient performance. Used a dataset of 9240 images, proper preprocessing, and boosted accuracy by fine-tuning hyperparameters.</p>
              <a href="https://github.com/CypherRohan/Facial_Expression_Recognition_yolov8" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          {showAllProjects && (
            <>
              {/* Project 4 */}
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="450">
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-green-300">College-Enquiry-Chatbot</h4>
                  <div className="flex gap-2 mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-Learn" className="w-7 h-7" />
                  </div>
                  <p className="text-gray-300 mb-4">Designed and integrated a GUI-based college-enquiry chatbot with Tkinter, using 3 ML models for intent classification (Logistic Regression, Naive Bayes, SVM), achieving 81% accuracy with SVM. Transformed 200+ patterns from a JSON-based intent dataset.</p>
                  <a href="https://github.com/CypherRohan/College-Enquiry-Chatbot" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              {/* Project 5 */}
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="600">
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-green-300">MYPaint</h4>
                  <div className="flex gap-2 mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-7 h-7" />
                  </div>
                  <p className="text-gray-300 mb-4">Developed an interactive Java-based paint application with 6 control buttons and a dropdown for 21 brush sizes. Implemented Brush/Eraser tools, clear canvas, and smooth rendering with BufferedImage.</p>
                  <a href="https://github.com/CypherRohan/My-Paint-JAVA" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              {/* Project 6 */}
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 backdrop-blur-md border border-white/20 hover:shadow-[0_0_48px_12px_rgba(34,211,238,0.85)]" style={{background: 'rgba(17, 24, 39, 0.6)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.12)'}} data-aos="flip-left" data-aos-delay="750">
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-green-300">Password Manager</h4>
                  <div className="flex gap-2 mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="w-7 h-7" />
                  </div>
                  <p className="text-gray-300 mb-4">Built a password manager using 3-character ASCII shift encryption, with credentials stored in SQLite. Features intuitive GUI, fast password search, and secure password generation.</p>
                  <a href="https://github.com/CypherRohan/Password-Manager" className="text-green-400 hover:underline transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-3 bg-green-400 text-gray-950 font-bold rounded-full shadow-lg hover:bg-green-300 transition hover:scale-105"
          >
            {showAllProjects ? 'See Less' : 'See More'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gray-950 border-t border-gray-800 flex flex-col items-center gap-4" data-aos="fade" id="footer">
        <h3 className="text-3xl font-bold mb-2 text-green-400" data-aos="fade-down">Contact Me</h3>
        <p className="text-gray-300 mb-2">Want to work together or have a question? Reach out via the icons below!</p>
        <div className="flex justify-center gap-8 mb-2">
          <a href="https://github.com/CypherRohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="https://www.instagram.com/_rohansaini15/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
          <a href="https://x.com/RohanSa51731396?t=5kFsQvjAb_aGmYw_cWM2jw&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" fill="currentColor">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rohan-saini-838642290" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
          </a>
          <a href="mailto:rrrohansaini@gmail.com" aria-label="Email" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065 2.4 6.6A2 2 0 0 1 4 6h16a2 2 0 0 1 1.6.6L12 13.065zm9.6-6.6A4 4 0 0 0 20 4H4a4 4 0 0 0-3.6 2.465l10.8 7.2a1 1 0 0 0 1.2 0l10.8-7.2A4 4 0 0 0 21.6 6.465zM2 8.236V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.236l-9.2 6.133a3 3 0 0 1-3.6 0L2 8.236z"/></svg>
          </a>
          <a href="tel:+919548573069" aria-label="Phone" className="hover:text-green-400 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()} Rohan Saini. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
