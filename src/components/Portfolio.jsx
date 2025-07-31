import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Code, Zap, Cpu, ChevronDown, ExternalLink, Calendar, Award, GraduationCap, Briefcase, BookOpen, Settings, User, Home, Wrench, Github, Download, Star, ArrowRight, Play, Pause, Volume2, Send, Eye, Heart, Target, Rocket, CheckCircle, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const quotes = [
    "Innovation distinguishes between a leader and a follower.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Technology is nothing. What's important is that you have faith in people."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, quotes.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const experiences = [
    {
      company: "vivo Mobile India Pvt. Ltd.",
      role: "Process Electronic Engineer",
      period: "Sep 2024 - Feb 2025",
      location: "Greater Noida, UP",
      type: "Full-time",
      description: "Specialized in comprehensive analysis of mobile components including LCM, Camera, MIC, and Receiver systems. Led micro-level hardware analysis of M-Board/N-Board systems with advanced troubleshooting capabilities.",
      skills: ["Hardware Analysis", "Component Testing", "Micro-level Debugging", "Quality Assurance", "Mobile Electronics"],
      achievements: ["Reduced defect detection time by 30%", "Improved component reliability testing"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      company: "EAPRO GLOBAL LTD",
      role: "Hardware Engineer",
      period: "Mar 2025 - May 2025",
      location: "Roorkee, Uttarakhand",
      type: "Contract",
      description: "Engineered sophisticated PCB layouts and hardware designs for Li-ion 4-Cell BMS projects. Implemented advanced BMS IC (BQ40Z50) integration with MSPM0C1104 microcontroller systems.",
      skills: ["PCB Design", "BMS Architecture", "Hardware Testing", "Microcontroller Programming", "Power Management"],
      achievements: ["Delivered BMS solution ahead of schedule", "Optimized power efficiency by 25%"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "OGOENERGY India Pvt. Ltd.",
      role: "Research & Development Engineer",
      period: "Feb 2024 - Sep 2024",
      location: "Noida, UP",
      type: "Apprenticeship",
      description: "Pioneered development of 1.2kW EV Charger systems for 3-wheelers. Executed comprehensive PCB design projects including schematic capture, component selection, and BOM optimization.",
      skills: ["EV Charging Systems", "Power Electronics", "SMPS Design", "Gate Driver ICs", "Battery Testing"],
      achievements: ["Successfully deployed EV charger prototype", "Optimized charging efficiency to 95%"],
      color: "from-purple-500 to-pink-600"
    },
    {
      company: "Enerjazz Tech (YS21)",
      role: "Power Electronics Engineer",
      period: "Nov 2023 - Jan 2024",
      location: "Delhi, India",
      type: "Internship",
      description: "Led comprehensive testing protocols for Li-ion battery packs and telematics systems. Developed expertise in GPS/GPRS integration, GUI development, and communication protocol implementation.",
      skills: ["Battery Pack Testing", "Telematics", "Communication Protocols", "GUI Development", "System Integration"],
      achievements: ["Streamlined testing procedures", "Enhanced battery performance monitoring"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const projects = [
    {
      title: "IoT-Based Asset Tracking System",
      period: "Feb 2025 - May 2025",
      description: "Revolutionary IoT-based asset tracking solution featuring SIM808 integration for real-time geolocation and GSM connectivity with advanced power management.",
      tech: ["STM32F4", "SIM808", "PCB Design", "IoT", "GSM/GPRS", "GPS"],
      status: "Completed",
      link: "#",
      github: "#",
      image: "🚀",
      impact: "Real-time tracking with 99.9% uptime"
    },
    {
      title: "Autonomous Guided Vehicle (AGV)",
      period: "Feb 2024 - June 2024",
      description: "Intelligent AGV system using advanced IR sensing technology with Arduino-based control system for industrial automation applications.",
      tech: ["Arduino Mega", "IR Sensors", "Embedded C", "Motor Control", "PID Algorithm"],
      status: "Published",
      link: "#",
      github: "#",
      image: "🤖",
      impact: "Improved warehouse efficiency by 40%"
    },
    {
      title: "Bacterial Propagation Statistical Model",
      period: "Oct 2023 - Jun 2024",
      description: "Groundbreaking research on bacterial propagation dynamics in human respiratory tract with IEEE conference publication and novel mathematical modeling.",
      tech: ["MATLAB", "Statistical Modeling", "Biomedical Engineering", "Research", "Data Analysis"],
      status: "Published",
      link: "#",
      github: "#",
      image: "🧬",
      impact: "IEEE Conference Publication"
    },
    {
      title: "Molecular Communication System",
      period: "Feb 2024 - March 2024",
      description: "Advanced research on Generalized Gaussian Distribution (GGD) noise modeling for molecular communication systems under AF relay configurations.",
      tech: ["Signal Processing", "Communication Theory", "MATLAB", "Research", "Mathematical Modeling"],
      status: "Published",
      link: "#",
      github: "#",
      image: "📡",
      impact: "SCI Journal Publication"
    }
  ];

  const skills = {
    "Programming & Development": {
      skills: ["C/C++", "Embedded C", "MATLAB", "Python", "Assembly"],
      icon: Code,
      color: "from-blue-400 to-cyan-500"
    },
    "Hardware Design": {
      skills: ["PCB Design", "Schematic Capture", "Component Selection", "SMT Packages", "Layout Optimization"],
      icon: Cpu,
      color: "from-green-400 to-emerald-500"
    },
    "Power Electronics": {
      skills: ["DC-DC Converters", "AC-DC Converters", "SMPS", "Flyback Topology", "Gate Drivers"],
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    "Tools & Software": {
      skills: ["KiCAD", "Altium Designer", "LTSpice", "MATLAB/Simulink", "Proteus"],
      icon: Settings,
      color: "from-purple-400 to-pink-500"
    },
    "Communication Protocols": {
      skills: ["UART", "I2C", "SPI", "CAN Bus", "Modbus", "RS485"],
      icon: Wrench,
      color: "from-red-400 to-rose-500"
    },
    "Testing & Analysis": {
      skills: ["Oscilloscope Operation", "Spectrum Analysis", "Battery Testing", "EMI/EMC", "Signal Integrity"],
      icon: Eye,
      color: "from-indigo-400 to-blue-500"
    }
  };

  const achievements = [
    { icon: Award, title: "IEEE Conference Publication", desc: "Bacterial Propagation Research" },
    { icon: Star, title: "SCI Journal Publication", desc: "Molecular Communication Systems" },
    { icon: Award, title: "IIT Delhi Certification", desc: "Nano Fabrication Technology" },
    { icon: Target, title: "AGV & Drone Training", desc: "Advanced Robotics Systems" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02 - 192,
            top: mousePosition.y * 0.02 - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-600/15 to-cyan-600/15 rounded-full blur-2xl"
          style={{
            right: mousePosition.x * -0.015 - 128,
            bottom: mousePosition.y * -0.015 - 128,
            transition: 'all 0.4s ease-out'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket size={20} className="text-white" />
              </div>
              <span>Rahul<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Maurya</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'skills', label: 'Skills', icon: Settings },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === id 
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
            
            <a 
              href="mailto:mr.rahulmaurya024@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Send size={18} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="text-center px-6 max-w-5xl relative z-10">
          {/* Animated Quote */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className="relative">
              <p className="text-lg text-gray-300 italic animate-pulse">
                "{quotes[currentQuote]}"
              </p>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-12 relative">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin opacity-75"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <User size={80} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                <CheckCircle size={20} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 relative">
              <span className="inline-block hover:animate-bounce">R</span>
              <span className="inline-block hover:animate-bounce">a</span>
              <span className="inline-block hover:animate-bounce">h</span>
              <span className="inline-block hover:animate-bounce">u</span>
              <span className="inline-block hover:animate-bounce">l</span>
              <span className="mx-4"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">M</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">a</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">u</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">r</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">y</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block hover:animate-bounce">a</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              <span>Electronics & Communication Engineer</span>
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate about revolutionizing the future through innovative hardware design, advanced power electronics, 
              and cutting-edge embedded systems. Transforming ideas into reality, one circuit at a time.
            </p>
          </div>
          
          {/* Specialization Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Zap, text: "EV Charging Systems", color: "from-yellow-400 to-orange-500" },
              { icon: Cpu, text: "PCB Design Master", color: "from-green-400 to-emerald-500" },
              { icon: Wrench, text: "Hardware Testing Pro", color: "from-blue-400 to-indigo-500" },
              { icon: Code, text: "Embedded Systems", color: "from-purple-400 to-pink-500" }
            ].map((item, index) => (
              <div key={index} className={`group flex items-center space-x-3 bg-gradient-to-r ${item.color} p-4 rounded-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}>
                <item.icon className="text-white group-hover:animate-pulse" size={24} />
                <span className="text-white font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Let's Connect</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-2xl font-bold text-lg hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Eye size={20} />
              <span>View My Work</span>
            </button>
            
            <a 
              href="#"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 border border-white/20"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown className="mx-auto text-gray-400 hover:text-white transition-colors" size={40} />
            <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-300">
                <p className="text-xl leading-relaxed">
                  I'm a passionate Electronics & Communication Engineer with a relentless drive for innovation. 
                  My journey in technology began with curiosity about how things work, and has evolved into expertise 
                  in creating sophisticated solutions for tomorrow's challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  Specializing in power electronics, embedded systems, and hardware design, I've contributed to 
                  cutting-edge projects ranging from EV charging infrastructure to advanced biomedical research. 
                  Every project is an opportunity to push boundaries and create meaningful impact.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "4+", label: "Years Experience", icon: Calendar },
                  { number: "15+", label: "Projects Completed", icon: Code },
                  { number: "3", label: "Research Papers", icon: BookOpen },
                  { number: "5+", label: "Technologies Mastered", icon: Star }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all transform hover:scale-105">
                    <stat.icon className="mx-auto mb-3 text-blue-400" size={32} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white mb-4">Key Achievements</h3>
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
                      <achievement.icon className="text-purple-400 flex-shrink-0" size={24} />
                      <div>
                        <div className="text-white font-medium text-sm">{achievement.title}</div>
                        <div className="text-gray-400 text-xs">{achievement.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <GraduationCap className="mr-3 text-blue-400" size={28} />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                    <h4 className="text-white font-semibold text-lg">B.Tech Electronics and Communication</h4>
                    <p className="text-blue-400 font-medium">Galgotias College of Engineering & Technology</p>
                    <p className="text-gray-400">SGPA: 7.3/10 | 2020-2024</p>
                    <p className="text-gray-300 text-sm mt-2">Specialized in Signal Processing, Communication Systems, and Power Electronics</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <h4 className="text-white font-semibold">Senior Secondary (XII)</h4>
                    <p className="text-green-400 font-medium">Government Inter College, Ayodhya</p>
                    <p className="text-gray-400">76% | Mathematics, Science | 2017-2018</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Award className="mr-3 text-purple-400" size={28} />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {[
                    { title: '"INUPi2i" Nano Fabrication', org: 'IIT Delhi', color: 'text-yellow-400' },
                    { title: 'AGV & Drone Technology', org: 'Advanced Robotics', color: 'text-green-400' },
                    { title: 'Team Leadership', org: 'Expo Management', color: 'text-blue-400' }
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                      <div className={`w-3 h-3 ${cert.color.replace('text-', 'bg-')} rounded-full`}></div>
                      <div>
                        <div className="text-white font-medium">{cert.title}</div>
                        <div className={`${cert.color} text-sm`}>{cert.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Professional Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6">Building the future through innovative engineering solutions</p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400' : exp.type === 'Contract' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Settings className="mr-2 text-blue-400" size={18} />
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="mr-2 text-yellow-400" size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <CheckCircle className="mr-2 text-green-400 flex-shrink-0 mt-0.5" size={16} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6">Innovative solutions that make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{project.image}</div>
                  <div className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                  <p className="text-green-300 font-medium text-sm flex items-center">
                    <Target className="mr-2" size={16} />
                    Impact: {project.impact}
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center justify-center px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-600 hover:text-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6">Mastering the tools that shape the future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${data.color} rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse`}>
                    <data.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                
                <div className="space-y-3">
                  {data.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            size={12} 
                            className={`${starIndex < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6">Ready to turn ideas into reality? Let's start a conversation</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'mr.rahulmaurya024@gmail.com', href: 'mailto:mr.rahulmaurya024@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '+91 XXX XXX XXXX', href: 'tel:+91XXXXXXXXXX' },
                    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: '#' }
                  ].map((contact, index) => (
                    <a key={index} href={contact.href} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white font-semibold">{contact.value}</p>
                      </div>
                      <ArrowUpRight className="ml-auto text-gray-400 group-hover:text-white transition-colors" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">Rahul<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Maurya</span></span>
          </div>
          <p className="text-gray-400 mb-6">Electronics & Communication Engineer | Innovation Enthusiast | Problem Solver</p>
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: Mail, href: 'mailto:mr.rahulmaurya024@gmail.com' },
              { icon: Linkedin, href: '#' },
              { icon: Github, href: '#' },
              { icon: Phone, href: 'tel:+91XXXXXXXXXX' }
            ].map((social, index) => (
              <a key={index} href={social.href} className="w-12 h-12 bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">© 2025 Rahul Maurya. All rights reserved. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;