import React, { useEffect, useRef } from 'react';
// @ts-ignore
// import anime from 'animejs';
import { motion } from 'framer-motion';
import {
  Code,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import './App.css';

const App: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      //   anime({
      //     targets: headerRef.current,
      //     translateY: [-100, 0],
      //     opacity: [0, 1],
      //     duration: 1000,
      //     easing: 'easeOutElastic(1, .8)'
      //   });
    }
  }, []);

  // Auto-rotate carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % 4);
  //   }, 4000); // Change slide every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    // { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#272626]"
      >
        <div className="container max-w-10/12 mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="w-10 h-10 bg-gradient-to-br from-vibrant to-[#ffffff] rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-black" />
              </div> */}
              <div>
                <h1 className="text-2xl font-bold text-vibrant">PixelCraft</h1>
                <p className="text-xs text-white">Crafting the Future of the Web</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-vibrant ${activeSection === item.id ? 'text-vibrant' : 'text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden cursor-pointer md:block bg-vibrant/90 text-black px-6 py-2 rounded-lg hover:vibrant transition-colors duration-200"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 border-t border-[#272626]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-white hover:text-vibrant transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-vibrant text-black px-6 py-2 rounded-lg hover:bg-[#e6e600] transition-colors duration-300"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-black mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Crafting the Future of
                <span className="text-gradient block"> the Web</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                We transform businesses through innovative web solutions. From development to marketing,
                we craft digital experiences that drive growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="bg-vibrant/90 cursor-pointer text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vibrant transition-all duration-300 hover-lift flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="border-2 cursor-pointer border-vibrant text-vibrant px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vibrant hover:text-black transition-all duration-300 hover-lift"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-vibrant mb-2">{stat.number}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs. From concept to launch,
              we handle every aspect of your digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Web Development',
                description: 'Custom websites and web applications built with cutting-edge technologies.',
                features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
              },
              {
                icon: '📈',
                title: 'Digital Marketing',
                description: 'Strategic marketing campaigns that drive traffic and increase conversions.',
                features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
              },
              {
                icon: '🛡️',
                title: 'Website Maintenance',
                description: 'Ongoing support and maintenance to keep your website running smoothly.',
                features: ['Security Updates', 'Performance Optimization', 'Content Updates', '24/7 Monitoring']
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Beautiful and intuitive user interfaces that enhance user experience.',
                features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
              },
              {
                icon: '📱',
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
              },
              {
                icon: '📊',
                title: 'Analytics & SEO',
                description: 'Data-driven insights and search engine optimization for better visibility.',
                features: ['Google Analytics', 'SEO Audits', 'Performance Tracking', 'Conversion Optimization']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#272626] border border-[#272626] rounded-xl p-8 hover-lift group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 -ml-2">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-vibrant mb-4">{service.title}</h3>
                </div>
                <p className="text-white mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white">
                      <span className="w-2 h-2 bg-vibrant rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about" className="px-6 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Mac Window Frame */}
            <div className="bg-[#272626] rounded-lg shadow-2xl border border-[#272626] overflow-hidden">
              {/* Mac Window Header */}
              <div className="bg-[#272626] px-5 pt-3 border-b border-[#272626] flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Window Content */}
              <div className="py-4 px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      About PixelCraft
                    </h2>
                    <p className="text-lg text-white mb-6">
                      Founded with a passion for digital innovation, PixelCraft has been at the forefront
                      of web development and digital marketing for over 5 years. We believe in creating
                      not just websites, but digital experiences that drive real business results.
                    </p>
                    <p className="text-lg text-white mb-8">
                      Our team of experts combines technical expertise with creative vision to deliver
                      solutions that exceed expectations and drive measurable growth for our clients.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: '👥', label: 'Expert Team', value: '15+' },
                        // { icon: '🏆', label: 'Awards Won', value: '25+' },
                        { icon: '⚡', label: 'Fast Delivery', value: '48h' },
                        // { icon: '⭐', label: 'Client Rating', value: '4.9/5' }
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="text-2xl">{stat.icon}</div>
                          <div>
                            <div className="text-2xl font-bold text-vibrant">{stat.value}</div>
                            <div className="text-sm text-white">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-[#000000] to-[#272626] rounded-2xl p-8 text-white border border-vibrant">
                      <h3 className="text-2xl font-bold mb-6">Why Choose PixelCraft?</h3>
                      <div className="space-y-4">
                        {[
                          'Innovation-driven approach',
                          'Proven track record',
                          'Dedicated support team',
                          'Competitive pricing',
                          'Latest technologies',
                          'Result-oriented solutions'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-vibrant rounded-full flex items-center justify-center shadow-lg">
                      <Code className="w-12 h-12 text-black" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We are development experts on all
              <span className="text-gradient block"> technologies & platforms</span>
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto">
              We specialize in building robust, scalable, and user-centric software solutions by combining agile methodologies with cutting-edge technologies to help businesses grow and innovate.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + 4) % 4)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-vibrant rounded-full flex items-center justify-center text-black hover:bg-[#e6e600] transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % 4)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-vibrant rounded-full flex items-center justify-center text-black hover:bg-[#e6e600] transition-colors duration-300"
            >
              →
            </button>

            <div className="overflow-hidden flex flex-col min-h-[400px] justify-center">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {[
                  {
                    step: '01',
                    title: 'Discovery & Strategy',
                    description: 'We start by understanding your goals, audience, and project needs. Through market research and competitor analysis, we uncover opportunities and define the project scope, timeline, and key deliverables.',
                    icon: '🔍'
                  },
                  {
                    step: '02',
                    title: 'Design & Prototyping',
                    description: 'We create wireframes and UI/UX mockups to visualize the user journey. Your feedback helps us refine the design. Once approved, we lock in the final visuals to prepare for development.',
                    icon: '🎨'
                  },
                  {
                    step: '03',
                    title: 'Development & Testing',
                    description: 'Our developers build the front-end and back-end, integrating any needed CMS, APIs, or tools. We rigorously test for speed, responsiveness, and browser compatibility to ensure a smooth user experience.',
                    icon: '⚙️'
                  },
                  {
                    step: '04',
                    title: 'Optimization & Growth',
                    description: 'Post-launch, we track site performance and user behavior. We apply SEO best practices and optimize for conversions. Ongoing support includes feature suggestions and updates to help your business grow.',
                    icon: '📈'
                  }
                ].map((process, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex-col px-4">
                    <motion.div
                      // initial={{ opacity: 0, y: 50 }}
                      // whileInView={{ opacity: 1, y: 0 }}
                      // transition={{ duration: 0.6 }}
                      // viewport={{ once: true }}
                      className="bg-[#272626] border border-[#272626] rounded-xl p-8 hover-lift group relative max-w-2xl mx-auto"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-vibrant rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-lg">{process.step}</span>
                      </div>

                      {/* Icon */}
                      <div className="text-4xl mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-vibrant mb-4">{process.title}</h3>
                      <p className="text-white text-sm leading-relaxed">{process.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-vibrant' : 'bg-[#272626]'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Process Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Deliver your MVP in 4 weeks or less',
                description: 'Fast-track development with our proven agile methodology',
                icon: '⚡'
              },
              {
                title: 'Efficient and scalable infrastructure',
                description: 'Built for growth with cloud-native technologies',
                icon: '🏗️'
              },
              {
                title: 'Affordable cost for startups',
                description: 'Flexible pricing models tailored to your budget',
                icon: '💰'
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                <p className="text-white text-sm">{highlight.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#000000] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ready to take your business to the next level? Get in touch with us today and let's discuss your project.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:pixxelcraaft@gmail.com" className="text-[#D4D4D4]">pixxelcraaft@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-[#D4D4D4]">+91 9958434018</div>
                      <div className="text-[#D4D4D4]">+91 9582671770</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 border-white"
              >
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black placeholder-black focus:outline-none focus:border-black/40 transition-colors duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black placeholder-black focus:outline-none focus:border-black/40 transition-colors duration-300"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black placeholder-black focus:outline-none focus:border-black/40 transition-colors duration-300"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black placeholder-black focus:outline-none focus:border-black/40 transition-colors duration-300 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-[#2B2B2B] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4D4D4] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-12">
        <div className="container max-w-10/12 mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="w-8 h-8 bg-gradient-to-br from-vibrant to-[#ffffff] rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-black" />
                </div> */}
                <span className="text-xl text-vibrant font-bold">PixelCraft</span>
              </div>
              <p className="text-white mb-4">
                Crafting the Future of the Web with innovative solutions and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-end mb-4">Services</h4>
              <ul className="space-y-2 flex flex-col justify-end items-end text-white">
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>Website Maintenance</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-end mb-4">Company</h4>
              <ul className="space-y-2 flex flex-col justify-end items-end text-white">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-white mb-4">Stay updated with our latest news and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <button className="px-4 py-2 cursor-pointer bg-vibrant/90 rounded-r-lg hover:bg-vibrant hover:text-black transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 PixelCraft. All rights reserved. | Crafting the Future of the Web</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
