import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';









const Homepage = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

   const currentYear = new Date().getFullYear();

    const navigate = useNavigate();

     const handleGoHome = () => {
        navigate('/Gallery');
    };
    


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-[Inter] text-white bg-[#0a0a1a]">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a1a]/95 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-[#FFD700] font-[Poppins] font-bold text-2xl tracking-wider">
            ADEDAMOLA  ADEBAYO
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer hover:text-[#FFD700] transition-colors ${activeSection === 'home' ? 'text-[#FFD700]' : 'text-white'}`}
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className={`cursor-pointer hover:text-[#FFD700] transition-colors ${activeSection === 'about' ? 'text-[#FFD700]' : 'text-white'}`}
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('shows')}
              className={`cursor-pointer hover:text-[#FFD700] transition-colors ${activeSection === 'shows' ? 'text-[#FFD700]' : 'text-white'}`}
            >
              Shows
            </a>
            <a
              onClick={() => scrollToSection('gallery')}
              className={`cursor-pointer hover:text-[#FFD700] transition-colors ${activeSection === 'gallery' ? 'text-[#FFD700]' : 'text-white'}`}
            >
              Gallery
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className={`cursor-pointer hover:text-[#FFD700] transition-colors ${activeSection === 'contact' ? 'text-[#FFD700]' : 'text-white'}`}
            >
              Contact
            </a>
          </nav>
          
          <a
  href="https://api.whatsapp.com/message/XUEVPTEKCOSYI1?autoload=1&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="hidden md:block bg-gradient-to-r from-[#2A0944] to-[#FFD700] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
    Book Me
  </button>
</a>

          






          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none cursor-pointer"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        




        {/* Mobile Navigation */}
        <div className={`md:hidden bg-[#0a0a1a]/95 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection('shows')}
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Shows
            </a>
            <a
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Gallery
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Contact
            </a>
            <a href="https://api.whatsapp.com/message/XUEVPTEKCOSYI1?autoload=1&app_absent=0">
            <button className="bg-gradient-to-r from-[#2A0944] to-[#FFD700] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Book Me
            </button>
            </a>
          </div>
        </div>
      </header>





      
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/80 via-[#0a0a1a]/60 to-[#0a0a1a]"></div>
          <img
            src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748683425/WhatsApp_Image_2025-05-31_at_10.23.09_AM_lbxmpu.jpg"
            alt="James Walker On Air"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-[Poppins] font-bold text-5xl md:text-7xl mb-4 text-white">
            ADEDAMOLA  ADEBAYO - AJE
          </h1>
          <h2 className="font-[Inter] text-xl md:text-2xl tracking-wider text-[#FFD700] mb-6">
            RADIO HOST | MEDIA PERSONALITY | MASTER OF CEREMONIES (MC)
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
            Bringing stories to life through sound and conversation.
            Your daily companion on the airwaves since 2011.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FFD700] text-[#0a0a1a] px-8 py-3 rounded-full font-medium hover:bg-[#e5c100] transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-play mr-2"></i> Listen Live
            </button>
            <a href="https://api.whatsapp.com/message/XUEVPTEKCOSYI1?autoload=1&app_absent=0">
            <button className="border-2 border-white hover:border-[#FFD700] hover:text-[#FFD700] px-8 py-3 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Book me
            </button>
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-[#FFD700] text-2xl"></i>
          </div>
        </div>
      </section>













{/* ABOUT ME SECTION */}
<section id="about" className="py-20 bg-[#0a0a1a]">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-[Poppins] font-bold text-center mb-16">
<span className="text-[#FFD700]">About</span> Me
</h2>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
<div className="lg:col-span-3">
<p className="text-lg leading-relaxed mb-6">
  I am <b>Adedamola Adebayo - Atewogbare Aje</b>, but most people know me simply as <b>Aje</b> on the Air — the voice that speaks, listens, connects, and uplifts.
</p>
<p className="text-lg leading-relaxed mb-6">
For me, radio isn’t just a job — it’s a calling. Every word I speak on-air is a seed planted into hearts, every program I curate is a bridge between minds, and every story I share is a spark for hope. With a microphone in front of me, I’ve learned to touch lives without ever needing to see faces — and yet, I feel every smile, every tear, every heartbeat on the other side.
</p>
<p className="text-lg leading-relaxed mb-6">
I’ve spent years behind the mic, not just to entertain, but to inspire. Through carefully crafted programs, I’ve become an active contributor to society — tackling issues that matter, amplifying voices that need to be heard, and creating a space where everyone feels seen, valued, and empowered.
</p>
<p className="text-lg leading-relaxed mb-6">
  Whether it’s driving meaningful conversations, celebrating culture, or simply sharing music that heals the soul — I give my all, every single time.
</p>
<p className="text-lg leading-relaxed mb-6">
  Because radio, to me, is more than sound. It’s purpose. It’s passion. It's impact, a source of strength. It’s power — to connect, to heal, to change.
</p>
<p className="text-lg leading-relaxed mb-6">
  Welcome to my world.
</p>
<div className="mt-8 flex flex-wrap gap-6">
<div className="flex items-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
<i className="fas fa-broadcast-tower text-[#0a0a1a] text-xl"></i>
</div>
<div>
<h3 className="font-medium"><b>Current Shows</b></h3>
<p className="text-[#FFD700]">Ós'ojúmikòró (Mondays - 10 am) @ Brave Fm, 91.1</p>
<p className="text-[#FFD700]">Kówópé (Tuesdays - 11 am) @ Brave Fm, 91.1</p>
<p className="text-[#FFD700]">Pẹpẹ Ọrọ (Wednesdays - 10 am) @ Brave Fm, 91.1</p>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
<i className="fas fa-microphone-alt text-[#0a0a1a] text-xl"></i>
</div>
<div>
<h3 className="font-medium"><b>Experience</b></h3>
<p className="text-[#FFD700]">14+ Years On Air</p>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
<i className="fas fa-trophy text-[#0a0a1a] text-xl"></i>
</div>
<div>
<h3 className="font-medium"><b>Impacts</b></h3>
<p className="text-[#FFD700]">Advocated for social change through live conversations with citizens and leaders.</p>
<p className="text-[#FFD700]">Pushed national conversation on governance, justice, and accountability.</p>
<p className="text-[#FFD700]">Created safe radio space for marginalized voices and untold community stories.</p>
<p className="text-[#FFD700]">Advocated for social change through live conversations with citizens and leaders.</p>
<p className="text-[#FFD700]">Organized and hosted outreach campaigns for youth empowerment.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 flex justify-center">
<div className="relative">
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2A0944] to-[#FFD700] blur-md transform scale-105 animate-pulse"></div>
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748683733/WhatsApp_Image_2025-05-31_at_10.05.41_AM_1_pieihv.jpg"
alt="James Walker"
className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10"
/>
</div>
</div>
</div>
</div>
</section>






{/* MY SHOWS SECTION */}
<section id="shows" className="py-20 bg-[#0a0a1a]">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-[Poppins] font-bold text-center mb-16">
<span className="text-[#FFD700]">My</span> Shows
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Show Card 1 */}
<div className="bg-[#111132] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
<div className="relative">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748694126/WhatsApp_Image_2025-05-31_at_1.21.41_PM_chglrd.jpg"
alt="Morning Drive"
className="w-full h-56 object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111132] to-transparent opacity-70"></div>
<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#0a0a1a] w-14 h-14 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer !rounded-button">
<i className="fas fa-play text-xl"></i>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-[Poppins] font-bold mb-2">Ós'ojúmikòró</h3>
<p className="text-gray-300 mb-4">

  <p className='mb-4'>
Ós'ojúmikòró is more than just a radio program — it's a powerful voice for the voiceless. Every weekday, we open our lines to everyday people with real stories from the streets, towns, and villages. From broken roads and flooding, to joblessness and public neglect, callers speak from the heart — and we listen. 

  </p>
<p className='mb-4'>
  
The show gives ordinary citizens a chance to express their struggles, joys, and expectations directly to the ears of community leaders, government officials, and fellow Nigerians. It’s not just talk — it’s a call to action. With every episode, we create a bridge between the people and those in power, demanding accountability, empathy, and true change.
</p>
<p className='mb-4'>
  
Ós'ojúmikòró is where community meets courage. It is radio with a conscience — raw, real, and relentlessly focused on building a better society, one voice at a time.
</p>
</p>
<div className="flex justify-between items-center">
<div className="flex space-x-3">
<a href="https://www.instagram.com/ogbeniaje?igsh=Y2MxdHU4cDk2dmRq" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="https://www.facebook.com/share/1CysHRdbyf/" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.tiktok.com/@ogbeni.aj?_t=ZM-8woX2G2cgq8&_r=1" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-tiktok"></i>
</a>
</div>
<span className="text-[#FFD700] font-medium">Brave Fm, 91.1</span>
</div>
</div>
</div>


{/* Show Card 2 */}
<div className="bg-[#111132] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
<div className="relative">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1761034721/WhatsApp_Image_2025-10-15_at_2.00.03_PM_1_hz9ncx.jpg"
alt="Unfiltered Podcast"
className="w-full h-56 object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111132] to-transparent opacity-70"></div>
<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#0a0a1a] w-14 h-14 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer !rounded-button">
<i className="fas fa-play text-xl"></i>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-[Poppins] font-bold mb-2">Kówópé</h3>
<p className="text-gray-300 mb-4">
Kówópé is more than a radio program — it’s a movement of empowerment. In a world where survival often feels like a full-time job, this show rises as a weekly voice of hope, teaching listeners the power of skill, knowledge, and economic wisdom. 

<p className='mb-4'>
  
Each episode speaks directly to the hustler, the dreamer, the unemployed graduate, the market woman, the artisan, the student — anyone determined to rise above their current reality. We break down real-world skills that open doors: from fashion design to digital marketing, from agribusiness to tech, from small-scale manufacturing to personal finance.
</p>

<p className='mb-4'>  
  
Beyond training, Kówópé enlightens. We simplify complex economic matters, dissect government policies, and expose opportunities often hidden in plain sight. With expert guests, success stories, and practical tips, the show stirs listeners to not just hope — but act.
</p>

<p className='mb-4'>
  
Kówópé is not just about making a living — it’s about building a life of dignity, freedom, and purpose. It's where wisdom meets the will to rise. This is radio that teaches you how to catch your own fish, and feed generations after you.
</p>
</p>

<div className="flex justify-between items-center">
<div className="flex space-x-3">
<a href="https://www.instagram.com/ogbeniaje?igsh=Y2MxdHU4cDk2dmRq" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="https://www.facebook.com/share/1CysHRdbyf/" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.tiktok.com/@ogbeni.aj?_t=ZM-8woX2G2cgq8&_r=1" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-tiktok"></i>
</a>
</div>
<span className="text-[#FFD700] font-medium">Brave Fm, 91.1</span>
</div>
</div>
</div>


{/* Show Card 3 */}
<div className="bg-[#111132] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]">
<div className="relative">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748693775/WhatsApp_Image_2025-05-31_at_12.54.15_PM_g7j3ht.jpg"
alt="Weekend Vibes"
className="w-full h-56 object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111132] to-transparent opacity-70"></div>
<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#0a0a1a] w-14 h-14 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer !rounded-button">
<i className="fas fa-play text-xl"></i>
</button>
</div>
<div className="p-6">
<h3 className="text-xl font-[Poppins] font-bold mb-2">Pẹpẹ Ọrọ</h3>
<p className="text-gray-300 mb-4">
<p className='mb-4'>
  Pẹpẹ Ọrọ is where truth meets courage, and silence gives way to bold, fearless conversation. Every week, the mic comes alive with raw, honest dialogue about the pressing issues shaking our society — from political decisions and national policies, to community struggles and global influence.
</p>

<p className='mb-4'>
  
In a world where many avoid difficult conversations, Pẹpẹ Ọrọ leans in — dissecting the headlines, exposing the layers behind government actions, and giving voice to the silent frustrations of the people. It’s more than analysis — it’s advocacy. Listeners call in, experts weigh in, and no topic is too controversial to tackle.
</p>

<p className='mb-4'>
  
Whether it’s election matters, governance, corruption, insecurity, youth unrest, or economic hardship, Pẹpẹ Ọrọ breaks it down in a language the people understand. The goal is simple: to awaken civic responsibility, promote accountability, and stir a generation that not only asks questions — but demands answers.
</p>

<p className='mb-4'>
  
This is not just radio. This is a town square. A public court. A conscience on air.  
Pẹpẹ Ọrọ dares to speak — so that you, the people, can be heard.
</p>
</p>

<div className="flex justify-between items-center">
<div className="flex space-x-3">
<a href="https://www.instagram.com/ogbeniaje?igsh=Y2MxdHU4cDk2dmRq" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="https://www.facebook.com/share/1CysHRdbyf/" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.tiktok.com/@ogbeni.aj?_t=ZM-8woX2G2cgq8&_r=1" className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer">
<i className="fab fa-tiktok"></i>
</a>
</div>
<span className="text-[#FFD700] font-medium">Brave Fm, 91.1</span>
</div>
</div>
</div>
</div>
</div>
</section>






{/* TESTIMONIALS SECTION*/}
<section className="py-20 bg-[#0a0a1a]">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-[Poppins] font-bold text-center mb-16">
<span className="text-[#FFD700]">What People</span> Say
</h2>
<div className="max-w-4xl mx-auto">
<div className="bg-[#111132] rounded-2xl p-8 md:p-12 shadow-xl">
<div className="text-[#FFD700] text-6xl font-serif mb-6">"</div>
<p className="text-xl md:text-2xl italic mb-8">
Adetunji Ayobami Victor proudly declared me THE MASTER AND OWNER OF THE CRAFT. 
</p>
<div className="flex items-center">
<div>
<h4 className="font-medium">Adetunji Ayobami</h4>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#111132] rounded-xl p-6 shadow-lg">
<div className="text-[#FFD700] text-4xl font-serif mb-4">"</div>
<p className="text-lg italic mb-6">
Senator Ayo Solar  said "DAMOLA YOU DISPLAY INTELLIGENCE, YOU'RE ALWAYS IMPRESSIVE". 
</p>
<div className="flex items-center">
<div>
<h4 className="font-medium">Senator Ayoade Adeseun</h4>

</div>
</div>
</div>


<div className="bg-[#111132] rounded-xl p-6 shadow-lg">
<div className="text-[#FFD700] text-4xl font-serif mb-4">"</div>
<p className="text-lg italic mb-6">
Dare Ademola bestowed upon me the prestigious title of PROFESSOR EMERITUS, ACKNOWLEDGING MY DEEP UNDERSTANDING AND EXPERTISE. 
</p>
<div className="flex items-center">
<div>
<p className="text-gray-400 text-sm">Dare Ademola</p>
</div>
</div>
</div>



<div className="bg-[#111132] rounded-xl p-6 shadow-lg">
<div className="text-[#FFD700] text-4xl font-serif mb-4">"</div>
<p className="text-lg italic mb-6">
Princes Olanike Tewogbola Chimabia PROCLAIMED THAT I POSSESS WIZARD-LIKE SKILLS IN THIS CRAFT.  
</p>
<div className="flex items-center">
<div>
<p className="text-gray-400 text-sm">Princes Olanike Tewogbola Chimabia </p>
</div>
</div>
</div>


<div className="bg-[#111132] rounded-xl p-6 shadow-lg">
<div className="text-[#FFD700] text-4xl font-serif mb-4">"</div>
<p className="text-lg italic mb-6">
Samuel Ibikunle ArugboBoisi said " INÚ MI DÙN FÚN ÀGBÉKALẸ̀ YORÙBÁ RẸ ADEDAMOLA, Ó WÚ MI LÓRÍ PÚPỌ̀."
</p>
<div className="flex items-center">
<div>
<p className="text-gray-400 text-sm">Samuel Ibikunle</p>
</div>
</div>
</div>

</div>
</div>
</div>
</section>










{/* BEHIND THE SCENES SECTION*/}
<section id="gallery" className="py-20 bg-[#0a0a1a]">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-[Poppins] font-bold text-center mb-16">
<span className="text-[#FFD700]">Behind The</span> Scenes
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696158/WhatsApp_Image_2025-05-31_at_1.43.59_PM_1_p4pfyj.jpg"
alt="Celebrity Interview"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">Ogbomoso Cradles Carnival</h3>
<p className="text-gray-300 text-sm">With Bolaji Sanusi, during the Ogbomoso Cradles Carnival, first edition</p>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696160/WhatsApp_Image_2025-05-31_at_1.43.59_PM_y2fyj1.jpg"
alt="Live Broadcast Event"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">Zoe Schools 20th Anniversary</h3>
<p className="text-gray-300 text-sm">With Mrs Bunmi Bamitale</p>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696160/WhatsApp_Image_2025-05-31_at_1.43.58_PM_1_ebzdzr.jpg"
alt="Production Meeting"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">Interview Session</h3>
<p className="text-gray-300 text-sm">Interview Session with Hon. Omo-Olu Al-Maruf Ajibolu</p>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696160/WhatsApp_Image_2025-05-31_at_1.43.58_PM_ngnvu9.jpg"
alt="Charity Event"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">Interview Session</h3>
<p className="text-gray-300 text-sm">Interview Session with Sen. Yunus Akintunde</p>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696179/WhatsApp_Image_2025-05-31_at_1.43.57_PM_wxqxob.jpg"
alt="Voice Recording Session"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">True Worshippers Church, Ogbomoso</h3>
<p className="text-gray-300 text-sm">As a compere, director of programs at True Worshippers Church, Ogbomoso.</p>
</div>
</div>
</div>
<div className="relative group overflow-hidden rounded-lg h-64">
<img
src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696179/WhatsApp_Image_2025-05-31_at_1.43.54_PM_1_auyfnq.jpg"
alt="Broadcasting Workshop"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
<div className="p-4">
<h3 className="text-white font-bold">Master of Ceremonies</h3>
<p className="text-gray-300 text-sm">As an MC at a wedding reception held in Lagos, 2020.</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a>

<button className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-medium hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors !rounded-button whitespace-nowrap cursor-pointer"

onClick={handleGoHome}
>
View More Photos
</button>
</a>
</div>
</div>
</section>













{/* CONTACT SECTION */}
<section id="contact" className="py-20 bg-[#0a0a1a]">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-[Poppins] font-bold text-center mb-16">
<span className="text-[#FFD700]">Get In</span> Touch
</h2>
<div className="max-w-4xl mx-auto bg-[#111132] rounded-2xl p-8 md:p-12 shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
<div className="lg:col-span-2">
<h3 className="text-2xl font-[Poppins] font-bold mb-4">Contact Info</h3>
<p className="text-gray-300 mb-8">
Have a booking request, media inquiry, or just want to say hello? Reach out using the form or my contact details below.
</p>
<div className="space-y-6">
<div className="flex items-center">
<div className="w-12 h-12 bg-[#2A0944] rounded-full flex items-center justify-center mr-4">
<i className="fas fa-envelope text-[#FFD700]"></i>
</div>
<div>
<h4 className="text-sm text-gray-400">Email</h4>
<p>adebayoadedamolaephraim <br />  @gmail.com</p>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 bg-[#2A0944] rounded-full flex items-center justify-center mr-4">
<i className="fas fa-phone-alt text-[#FFD700]"></i>
</div>
<div>
<h4 className="text-sm text-gray-400">Phone/WhatsApp</h4>
<p>080 - 8269 -8989</p>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 bg-[#2A0944] rounded-full flex items-center justify-center mr-4">
<i className="fas fa-map-marker-alt text-[#FFD700]"></i>
</div>
<div>
<h4 className="text-sm text-gray-400">Studio</h4>
<p>Brave Fm, 91.1, Ogbomoso, <br /> Oyo State, Nigeria.</p>
</div>
</div>
</div>
<div className="mt-10">
<h4 className="text-xl font-medium mb-4">Follow Me</h4>
<div className="flex space-x-4">
<a href="https://www.instagram.com/ogbeniaje?igsh=Y2MxdHU4cDk2dmRq" className="w-10 h-10 bg-[#2A0944] rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="https://x.com/Ogbeni_aje98?t=8Ti0ZwAaL-5kuXu03v10ig&s=09" className="w-10 h-10 bg-[#2A0944] rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors cursor-pointer">
<i className="fab fa-x-twitter"></i>

</a>
<a href="https://www.facebook.com/share/1CysHRdbyf/" className="w-10 h-10 bg-[#2A0944] rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.tiktok.com/@ogbeni.aj?_t=ZM-8woX2G2cgq8&_r=1" className="w-10 h-10 bg-[#2A0944] rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors cursor-pointer">
<i className="fab fa-tiktok"></i>

</a>
</div>
</div>
</div>
<div className="lg:col-span-3">
  <div className="w-full rounded-lg overflow-hidden">
    <iframe
      title="Ogbomoso Map"
      src="https://maps.google.com/maps?q=Ogbomoso%20Oyo%20State%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
      className="w-full h-80 md:h-96 border-0 rounded-lg"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <p className="text-gray-400 text-sm mt-3">Brave FM studio area — Ogbomoso, Oyo State</p>
</div>
</div>
</div>
</div>
</section>



{/* Footer */}
<footer className="py-10 bg-[#0a0a1a] border-t border-[#2A0944]">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<a href="#home" className="text-[#FFD700] font-[Poppins] font-bold text-2xl tracking-wider">
ADEDAMOLA ADEBAYO
</a> <br />  <br />
<p className="text-gray-400">
   {' '} Website Designed by {' '} 
  <a 
href='https://api.whatsapp.com/send/?phone=2349035508681&text&type=phone_number&app_absent'
    rel="noopener noreferrer" 
    className="text-blue-500 hover:text-blue-700"
  >
    <b>SwiftStack</b>
    
  </a>{' '}. <br /> <br />
   All rights reserved. <b>&copy; {currentYear}</b>
</p>
</div>

<div className="mt-6 md:mt-0">
<button className="bg-[#FFD700] text-[#0a0a1a] px-6 py-2 rounded-full font-medium hover:bg-[#e5c100] transition-colors !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-headphones mr-2"></i> Listen Live
</button>
</div>
</div>
</div>
</footer>
</div>
);
}

export default Homepage



























