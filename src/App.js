import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
     
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-cyan-400 text-xl font-bold">
              <span className="text-white">&lt;</span>Dev<span className="text-white">/&gt;</span>
            </div>
            <div className="flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-300 hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

   
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-500/10 blur-3xl"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="text-cyan-400 text-lg mb-4 font-mono">&lt;Hello World /&gt;</div>
          <h1 className="text-6xl font-bold mb-6">
            I'm a <span className="text-cyan-400">Sumit Kumar,</span>
            <br /> Building  <span className="text-purple-400">AI-powered</span> systems  at scale
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            1 year of Software Engineering experience, now diving deep into
            <br />
            <span className="text-purple-400">Machine Learning </span>,
            <span className="text-cyan-400">Deep Learning</span>,
            <span className="text-purple-400">Transformers</span>, <span className="text-cyan-400">LangChain</span>, <span className="text-purple-400">RAG</span> & <span className="text-cyan-400">AI Agents</span>
          </p>
          <div className="flex justify-center space-x-6">
            <a aria-label="Visit github" href="https://github.com/sumitkumar2037" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Github size={20} />
            </a>
            <a aria-label="Visit linkedin" href="https://www.linkedin.com/in/sumit-kumar-627690221/" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a aria-label="Visit mail" href="mailto:sumitshaw2037@gmail.com" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-16">
            <ChevronDown className="mx-auto animate-bounce text-cyan-400" size={32} />
          </div>
        </div>
      </section>

      
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-cyan-400">About</span> Me
            <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 mb-6">
                I'm a passionate engineer with <span className="text-white font-semibold">1 year of Software Engineering experience</span>. I've built and maintained robust APIs, worked with databases, and designed scalable server-side solutions.
              </p>
              <p className="text-gray-400 mb-6">
                Currently, I'm on an exciting journey into the world of <span className="text-cyan-400">Artificial Intelligence</span>. I'm deeply immersed in learning <span className="text-purple-400">Transformers</span>, <span className="text-cyan-400">Generative AI</span>, and building intelligent applications using <span className="text-purple-400">LangChain</span>, <span className="text-cyan-400">RAG architectures</span>, and <span className="text-purple-400">AI Agents</span>.
              </p>
              <p className="text-gray-400">
                My goal is to bridge the gap between traditional backend engineering and cutting-edge AI technologies, creating intelligent systems that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">1 Year Experience</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Gen AI</h3>
                <p className="text-gray-400 text-sm">Active Learning</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">LangChain</h3>
                <p className="text-gray-400 text-sm">RAG & Agents</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Transformers</h3>
                <p className="text-gray-400 text-sm">Deep Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="skills" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-cyan-400">Skills</span> & Technologies
            <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4"></div>
          </h2>

          <div className="space-y-12">
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3"></div>
                <h3 className="text-2xl font-semibold text-white">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Python', 'FastApi', 'REST APIs', 'PostgreSQL', 'Redis', 'Docker', 'Git'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-800 rounded-full text-gray-300 border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-purple-400 mr-3"></div>
                <h3 className="text-2xl font-semibold text-white">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Transformers', 'LangChain', 'RAG', 'AI Agents', 'Prompt Engineering', 'Vector DBs', 'Hugging Face', 'OpenAI API'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-800 rounded-full text-gray-300 border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

           
            <div>
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mr-3"></div>
                <h3 className="text-2xl font-semibold text-white">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Fine-tuning LLMs', 'Multi-Agent Systems', 'Semantic Search', 'Embeddings', 'Langchain'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-800/50 rounded-full text-gray-400 border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-cyan-400">Experience</span>
            <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4"></div>
          </h2>

          <div className="relative">
           
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400"></div>

           
            <div className="relative mb-16">
              <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="ml-20 bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center text-gray-400 mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2024 - 2025
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                <p className="text-cyan-400 mb-4">Techlene Software Solution Pvt ltd</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Designed and developed RESTful APIs </li>
                  <li>• Built robust ERP System for manufacturing company </li>
                  <li>• Built robust  API integration </li>
                </ul>
              </div>
            </div>

           
            <div className="relative">
              <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-purple-400 border-4 border-gray-900"></div>
              <div className="ml-20 bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center text-gray-400 mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Ongoing
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI/ML Journey</h3>
                <p className="text-purple-400 mb-4">Self-Learning & Projects</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Deep diving into Transformer architectures</li>
                  <li>• Building RAG applications with LangChain</li>
                  <li>• Experimenting with AI Agents and multi-agent systems</li>
                  <li>• Working on personal GenAI projects that help user day-today</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-cyan-400">Featured</span> Project
            <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            <div className="bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors overflow-hidden">

             
              <a
                aria-label="Visit project"
                href="https://docu-chat-frontend-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="project1.png"
                  alt="DocuChat project preview"
                  className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>

             
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 hover:underline underline-offset-4 transition">
                  <a
                    aria-label="Visit project"
                    href="https://docu-chat-frontend-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DocuChat
                  </a>
                </h3>

                <p className="text-gray-400 mb-6">
                  An intelligent document Q&A system built with LangChain and vector databases.
                  Upload PDFs and ask questions in natural language.
                </p>

               
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">LangChain</span>
                  <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">RAG</span>
                  <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Pinecone</span>
                  <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">OpenAI</span>
                </div>

               
                <div className="flex space-x-4">
                  <a
                    aria-label="Visit project"
                    href="https://github.com/sumitkumar2037/DocuChat_backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors"
                  >
                    <Code size={18} />
                    <span>Code</span>
                  </a>

                  <a
                    aria-label="Visit project"
                    href="https://docu-chat-frontend-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* AI Agent Framework */}
            {/* <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Agent Framework</h3>
              <p className="text-gray-400 mb-6">
                Multi-agent system for automated research and content generation. Agents collaborate to complete complex tasks.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Agents</span>
                <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">CrewAI</span>
                <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Python</span>
                <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">GPT-4</span>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors">
                  <Code size={18} />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors">
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </button>
              </div>
            </div> */}
          </div>

          {/* Backend API Service */}
          {/* <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors max-w-2xl">
            <div className="w-16 h-16 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Backend API Service</h3>
            <p className="text-gray-400 mb-6">
              Production-ready REST API with authentication, rate limiting, and comprehensive documentation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Node.js</span>
              <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Redis</span>
              <span className="px-3 py-1 bg-gray-900 rounded text-sm text-gray-300">Docker</span>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors">
                <Code size={18} />
                <span>Code</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-700 transition-colors">
                <ExternalLink size={18} />
                <span>Demo</span>
              </button>
            </div>
          </div> */}

          <div className="text-center mt-12">
            <p className="text-gray-400 italic">More projects coming soon as I continue my AI journey...</p>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-cyan-400">Get In</span> Touch
            <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in discussing new opportunities, AI projects, or just having a chat about the latest in tech. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white"><a aria-label="Visit mail" href='mailto:sumitshaw2037@gmail.com'>sumitshaw2037@gmail.com</a></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Github className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">GitHub</div>
                    <div className="text-white"><a aria-label="Visit github" href='https://github.com/sumitkumar2037'>sumitkumar2037</a></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Linkedin className="text-purple-400" size={20} />
                  </div>
                  <div>
                  
                    <div className="text-gray-400 text-sm">LinkedIn</div>
                    <div className="text-white"><a aria-label="Visit linkedin" href='https://www.linkedin.com/in/sumit-kumar-627690221/'>Sumit kumar</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-800 p-8 rounded-lg border border-gray-700"> */}
              {/* <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <a href='mailto:sumitshaw2037@gmail.com'>
                  <span>Send Message</span></a>
                </button>
              </form> */}
            {/* </div> */}
          </div>
        </div>
      </section>

    
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2026 All rights reserved.
          </div>
          <div className="text-gray-400">
            {/* Built with <span className="text-red-500">❤</span> and lots of coffee */}
          </div>
          <div className="text-gray-400">
            <span className="text-cyan-400">&lt;Powered by AI/&gt;</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;