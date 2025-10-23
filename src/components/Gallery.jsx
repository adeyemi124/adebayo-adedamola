import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [showBackToTop, setShowBackToTop] = useState(false);



   const currentYear = new Date().getFullYear();
  const photos = useMemo(() => [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696180/WhatsApp_Image_2025-05-31_at_1.43.56_PM_c8yxwp.jpg',
      caption: 'In-Depth Interview with Alhaji Ayoade Adeseun on Key Political Issues',
      date: 'April 5, 2025',
      category: 'interviews'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696179/WhatsApp_Image_2025-05-31_at_1.43.57_PM_wxqxob.jpg',
      caption: 'As a compere, director of programs at True Worshippers Church, Ogbomoso.',
      date: 'March 12, 2025',
      category: 'events'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696178/WhatsApp_Image_2025-05-31_at_1.43.57_PM_2_x2v2ro.jpg',
      caption: 'Studio Session Anchoring A Radio Show',
      date: 'May 10, 2025',
      category: 'studio'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696160/WhatsApp_Image_2025-05-31_at_1.43.58_PM_1_ebzdzr.jpg',
      caption: 'Interview Session with Hon. Omo-Olu Al-Maruf Ajibolu',
      date: 'February 18, 2025',
      category: 'interviews'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696159/WhatsApp_Image_2025-05-31_at_1.44.00_PM_1_ikil89.jpg',
      caption: 'Myself and Bolaji Sanusi on the 4th day of the 2024 Ogbomoso Cradles Carnival',
      date: 'January 30, 2025',
      category: 'events'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696132/WhatsApp_Image_2025-05-31_at_1.44.03_PM_1_xnaphz.jpg',
      caption: 'Late Night Vibes in the Booth',
      date: 'December 14, 2024',
      category: 'studio'
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696160/WhatsApp_Image_2025-05-31_at_1.43.58_PM_ngnvu9.jpg',
      caption: 'Interview Session with Sen. Yunus Akintunde',
      date: 'November 22, 2024',
      category: 'interviews'
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696158/WhatsApp_Image_2025-05-31_at_1.44.00_PM_2_x3t734.jpg',
      caption: 'On stage as the host for IMOLE DAY 2024',
      date: 'October 3, 2024',
      category: 'events'
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696133/WhatsApp_Image_2025-05-31_at_1.44.02_PM_1_wkjfbf.jpg',
      caption: 'Behind the Mic: Political Pulse Unfiltered',
      date: 'September 9, 2024',
      category: 'studio'
    },
    {
      id: 10,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696178/WhatsApp_Image_2025-05-31_at_1.43.57_PM_2_x2v2ro.jpg',
      caption: 'Live in Session: Voices on Air',
      date: 'August 15, 2024',
      category: 'interviews'
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696133/WhatsApp_Image_2025-05-31_at_1.44.02_PM_xgzbqs.jpg',
      caption: 'As an MC at a wedding reception held in Lagos, 2020.',
      date: 'July 27, 2024',
      category: 'events'
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1748696178/WhatsApp_Image_2025-05-31_at_1.43.57_PM_1_hyjm7e.jpg',
      caption: 'Mic Check: Crafting the Perfect Jingle',
      date: 'June 18, 2024',
      category: 'studio'
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035127/WhatsApp_Image_2025-10-15_at_1.59.58_PM_i7zb5j.jpg',
      caption: 'With his Imperial Majesty, Oba Ghandi Afolabi Olaoye Orumogege III, Soun of Ogbomosoland while serving as the MC at the opening of ZOE Schools ICT Centre ',
      date: 'May 25, 2025',
      category: 'events'
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035127/WhatsApp_Image_2025-10-15_at_1.59.58_PM_1_cdezs5.jpg',
      caption: 'Live on-air — bringing conversations to life, and serving as the bridge between society and government.',
      date: 'April 11, 2024',
      category: 'studio'
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035108/WhatsApp_Image_2025-10-15_at_1.59.59_PM_nx0msz.jpg',
      caption: 'Hosting with style and unmatched energy.',
      date: 'March 3, 2024',
      category: 'events'
    },
    {
      id: 16,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035106/WhatsApp_Image_2025-10-15_at_1.59.59_PM_1_gw9swm.jpg',
      caption: 'An honor hosting a respected mother figure in the society, holding conversations that matter.',
      date: 'February 10, 2024',
      category: 'studio'
    },
    {
      id: 17,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035104/WhatsApp_Image_2025-10-15_at_2.00.01_PM_hyvu2o.jpg',
      caption: 'An honor receiving an award for genuine service to humanity, and recognition of my competence.',
      date: 'January 20, 2024',
      category: 'events'
    },
    {
      id: 18,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035070/WhatsApp_Image_2025-10-15_at_2.00.02_PM_ltljvr.jpg',
      caption: 'As a MC on stage with my father-figure and mentor, a veteran with unmatched energy and competence at the Ogbomoso Cradles Carnival, 2024',
      date: 'December 2, 2024',
      category: 'events'
    },
    {
      id: 19,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035054/WhatsApp_Image_2025-10-15_at_2.00.03_PM_fz4n2v.jpg',
      caption: 'An honored recipient of an award for excellence in broadcasting.',
      date: 'November 5, 2023',
      category: 'events'
    },
    {
      id: 20,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035043/WhatsApp_Image_2025-10-15_at_2.00.03_PM_2_v3ibgg.jpg',
      caption: 'As an MC - full throttle, full energy, just setting the event on fire and creating unforgetable moments.',
      date: 'October 1, 2023',
      category: 'events'
    },
    {
      id: 21,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035033/WhatsApp_Image_2025-10-15_at_2.00.04_PM_pbcttb.jpg',
      caption: 'With respeted veterans and mentors in the industry just after a live studio session with a notable personality.',
      date: 'September 12, 2023',
      category: 'studio'
    },
    {
      id: 22,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761035105/WhatsApp_Image_2025-10-15_at_2.00.00_PM_1_djnhuk.jpg',
      caption: 'The man behind the mic — passion, purpose, and precision delivering moments that matter.',
      date: 'August 9, 2023',
      category: 'events'
    },
    {
      id: 23,
      src: 'https://res.cloudinary.com/dw1gzsri4/image/upload/v1761205673/WhatsApp_Image_2025-10-15_at_2.00.00_PM_2_my8ucw.jpg',
      caption: 'Community outreach program of Brave FM in celebration of its One year anniversary across the city of Ogbomoso.',
      date: 'July 3, 2023',
      category: 'events'
    }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
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



  const openLightbox = (index) => {
    setCurrentPhoto(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateLightbox = (direction) => {
    if (currentPhoto === null) return;

    const filteredPhotos = photos.filter(photo =>
      activeFilter === 'all' || photo.category === activeFilter
    );

    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentPhoto - 1 + filteredPhotos.length) % filteredPhotos.length;
    } else {
      newIndex = (currentPhoto + 1) % filteredPhotos.length;
    }

    setCurrentPhoto(newIndex);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const filtered = photos.filter(photo =>
          activeFilter === 'all' || photo.category === activeFilter
        );
        if (filtered.length === 0) return;

        setCurrentPhoto((prev) => {
          if (prev === null) return prev;
          const len = filtered.length;
          if (e.key === 'ArrowLeft') {
            return (prev - 1 + len) % len;
          }
          return (prev + 1) % len;
        });
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, activeFilter, photos, closeLightbox]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const filteredPhotos = photos.filter(photo =>
    activeFilter === 'all' || photo.category === activeFilter
  );

  const displayedPhotos = filteredPhotos; // show all photos by default
  

  return (
    <div className="font-[Inter] text-white bg-[#0a0a1a] min-h-screen">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a1a]/95 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"
          
          className="text-[#FFD700] font-[Poppins] font-bold text-2xl tracking-wider">
            ADEDAMOLA ADEBAYO
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
  to="/" 
  className="cursor-pointer hover:text-[#FFD700] transition-colors text-white"
>
  Home
</Link>
            <Link
              to="/" 
              className="cursor-pointer hover:text-[#FFD700] transition-colors text-white"
            >
              About
            </Link>
            <Link
              to="/" 
               onClick={() => scrollToSection('shows')}
              className="cursor-pointer hover:text-[#FFD700] transition-colors text-white"
            >
              Shows
            </Link>
            <a 
                            onClick={() => scrollToSection('gallery')}

              className="cursor-pointer text-[#FFD700] transition-colors"
            >
              Gallery
            </a>
            <Link
              to="/"
              className="cursor-pointer hover:text-[#FFD700] transition-colors text-white"
            >
              Contact
            </Link>
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
            <Link
              to="/"
              data-readdy="true"
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Shows
            </Link>
            <a
              onClick={() => scrollToSection('gallery')}
              className="text-[#FFD700] py-2 cursor-pointer"
            >
              Gallery
            </a>
            <Link
              to="/"
              className="text-white hover:text-[#FFD700] py-2 cursor-pointer"
            >
              Contact
            </Link>
            <button className="bg-gradient-to-r from-[#2A0944] to-[#FFD700] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Book Me
            </button>
          </div>
        </div>
      </header>





      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-8 text-sm">
            <Link
              to="/" 
              data-readdy="true"
              className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Home
            </Link>




















            <i className="fas fa-chevron-right text-gray-500 mx-2 text-xs"></i>
            <a
              onClick={() => scrollToSection('gallery')}
              data-readdy="true"
              className="text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Gallery
            </a>
            <i className="fas fa-chevron-right text-gray-500 mx-2 text-xs"></i>
            <span className="text-[#FFD700]">Behind The Scenes</span>
          </div>


















          {/* Gallery Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-[Poppins] font-bold mb-4 relative inline-block">
              <span className="relative z-10">
                <span className="text-[#FFD700]">Behind The</span> Scenes Gallery
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
              An exclusive look at Adebayo Adedamola's life on and off the air. From interviews, to charity events and studio sessions.
            </p>
          </div>

          {/* Filter Tabs - Sticky on scroll */}
          <div className="sticky top-16 z-30 bg-[#0a0a1a]/95 py-4 mb-8 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === 'all' 
                    ? 'bg-[#FFD700] text-[#0a0a1a] font-medium' 
                    : 'bg-[#111132] text-white hover:bg-[#1a1a42]'
                }`}
              >
                All Photos ({photos.length})
              </button>
              <button 
                onClick={() => setActiveFilter('interviews')}
                className={`px-6 py-2 rounded-full transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === 'interviews' 
                    ? 'bg-[#FFD700] text-[#0a0a1a] font-medium' 
                    : 'bg-[#111132] text-white hover:bg-[#1a1a42]'
                }`}
              >
                <i className="fas fa-microphone-alt mr-2"></i>
                Interviews ({photos.filter(p => p.category === 'interviews').length})
              </button>
              <button 
                onClick={() => setActiveFilter('events')}
                className={`px-6 py-2 rounded-full transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === 'events' 
                    ? 'bg-[#FFD700] text-[#0a0a1a] font-medium' 
                    : 'bg-[#111132] text-white hover:bg-[#1a1a42]'
                }`}
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Events ({photos.filter(p => p.category === 'events').length})
              </button>
              <button 
                onClick={() => setActiveFilter('studio')}
                className={`px-6 py-2 rounded-full transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === 'studio' 
                    ? 'bg-[#FFD700] text-[#0a0a1a] font-medium' 
                    : 'bg-[#111132] text-white hover:bg-[#1a1a42]'
                }`}
              >
                <i className="fas fa-broadcast-tower mr-2"></i>
                Studio Sessions ({photos.filter(p => p.category === 'studio').length})
              </button>
            </div>
            <div className="text-center text-sm text-gray-400 mt-3">
              Showing {displayedPhotos.length} of {filteredPhotos.length} photos
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-[#111132] transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold">{photo.caption}</h3>
                      
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      photo.category === 'interviews' ? 'bg-purple-600' : 
                      photo.category === 'events' ? 'bg-blue-600' : 'bg-green-600'
                    }`}>
                      {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center !rounded-button">
                      <i className="fas fa-search-plus text-[#0a0a1a] text-xl"></i>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{photo.caption}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      
                    </span>
                    <button 
                      onClick={() => openLightbox(index)}
                      className="text-[#FFD700] hover:text-white transition-colors cursor-pointer"
                    >
                      <i className="fas fa-expand-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button removed - showing all photos by default */}

          {/* Back to Main Gallery */}
          <div className="text-center mt-16">
            <Link
              to="/"
              data-readdy="true"
              className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-medium hover:bg-[#FFD700] hover:text-[#0a0a1a] transition-colors inline-block !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Main Page
            </Link>
          </div>
        </div>
      </main>






      {/* Lightbox */}
      {lightboxOpen && currentPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-8">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-[#111132] hover:bg-[#1a1a42] w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10 !rounded-button cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Navigation arrows */}
            <button 
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[#111132] hover:bg-[#1a1a42] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-colors z-10 !rounded-button cursor-pointer"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[#111132] hover:bg-[#1a1a42] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-colors z-10 !rounded-button cursor-pointer"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            
            {/* Image container */}
            <div className="max-w-5xl max-h-[70vh] overflow-hidden">
              <img 
                src={filteredPhotos[currentPhoto].src} 
                alt={filteredPhotos[currentPhoto].caption}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Caption */}
            <div className="bg-[#111132] p-4 rounded-lg mt-4 max-w-3xl w-full">
              <h3 className="text-xl font-bold mb-1">{filteredPhotos[currentPhoto].caption}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  
                </span>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  filteredPhotos[currentPhoto].category === 'interviews' ? 'bg-purple-600' : 
                  filteredPhotos[currentPhoto].category === 'events' ? 'bg-blue-600' : 'bg-green-600'
                }`}>
                  {filteredPhotos[currentPhoto].category.charAt(0).toUpperCase() + filteredPhotos[currentPhoto].category.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#111132] px-4 py-2 rounded-full text-sm">
              {currentPhoto + 1} / {filteredPhotos.length}
            </div>
          </div>
        </div>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FFD700] text-[#0a0a1a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#e5c100] z-40 !rounded-button cursor-pointer"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}









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

export default Gallery



































