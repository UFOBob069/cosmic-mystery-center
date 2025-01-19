"use client";

import { Globe2, Search, BookOpen, Users, Star, MapPin, Award, Radio } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { useState, useEffect } from 'react';

type StarPosition = {
  top: string;
  left: string;
  delay: string;
};

// Add these utility functions
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect id="r" width="${w}" height="${h}" fill="#1e293b" />
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
  </svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

// Schema.org structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: 'Cosmic Mystery Center',
  description: 'Leading institution in paranormal research and unexplained phenomena investigation.',
  founders: [
    {
      '@type': 'Person',
      name: 'David Eagan',
      jobTitle: 'Co-Founder & Lead Researcher',
    },
    {
      '@type': 'Person',
      name: 'Kurt Arbuckle',
      jobTitle: 'Co-Founder & Scientific Director',
    },
  ],
  location: {
    '@type': 'Place',
    name: 'West Lafayette',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'West Lafayette',
      addressRegion: 'IN',
      addressCountry: 'US',
    },
  },
};

export default function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [starPositions, setStarPositions] = useState<StarPosition[]>([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate star positions only on the client side
    const positions = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setStarPositions(positions);
  }, []);

  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section with Animated Background */}
        <div className="relative overflow-hidden min-h-screen">
          {/* Animated star field background */}
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 opacity-30">
              {starPositions.map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    animationDelay: pos.delay,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-6xl py-32">
              <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
                  Cosmic Mystery Center
                </h1>
                <p className="mt-6 text-xl md:text-2xl leading-8 text-gray-300 max-w-3xl mx-auto">
                  Unveiling the Universe&apos;s Greatest Enigmas Through Scientific Discovery
                </p>
                <div className="mt-12 flex items-center justify-center gap-x-6">
                  <a href="#about" className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
                    Explore Our Mission
                  </a>
                  <a href="#research" className="text-lg font-semibold leading-7 text-white hover:text-indigo-300 transition-colors duration-300">
                    View Research <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Cards */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <div className="flex justify-center gap-4 mb-8">
              {[
                { icon: Star, text: '150+ Expeditions' },
                { icon: MapPin, text: '47 Countries' },
                { icon: Award, text: 'Global Recognition' },
                { icon: Radio, text: 'Advanced Research' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 backdrop-blur-md rounded-lg p-4 flex items-center gap-3 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <item.icon className="text-indigo-400" size={24} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div id="about" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-50" />
          <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Our Legacy</h2>
              
              {/* Founders Photos */}
              <div className="flex justify-center gap-16 mb-12">
                {/* David Eagan */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500 transform transition-transform hover:scale-105 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50 relative">
                    <Image
                      src="/images/david-eagan.jpg"
                      alt="David Eagan - Co-Founder & Lead Researcher"
                      width={200}
                      height={200}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-400">David Eagan</h3>
                  <p className="text-gray-300 mt-2">Co-Founder & Lead Researcher</p>
                </div>

                {/* Kurt Arbuckle */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500 transform transition-transform hover:scale-105 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50 relative">
                    <Image
                      src="/images/kurt-arbuckle.jpg"
                      alt="Kurt Arbuckle - Co-Founder & Scientific Director"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-400">Kurt Arbuckle</h3>
                  <p className="text-gray-300 mt-2">Co-Founder & Scientific Director</p>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Founded by visionaries David Eagan and Kurt Arbuckle, the Cosmic Mystery Center emerged from a series of extraordinary encounters that defied conventional explanation. What began as teenage curiosity in West Lafayette transformed into a globally recognized institution at the forefront of paranormal research.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">The First Encounter</h3>
                    <p className="text-gray-300">
                      In their junior year of high school, Eagan and Arbuckle documented their first unexplained phenomenon—a series of geometric light formations above West Lafayette that defied known aircraft patterns and atmospheric conditions. This event catalyzed their lifelong pursuit of understanding the unknown.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">The Evolution</h3>
                    <p className="text-gray-300">
                      From amateur investigators to respected researchers, their journey has been marked by rigorous documentation, scientific methodology, and a commitment to bridging the gap between conventional science and unexplained phenomena.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 opacity-50" />
          <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Our Mission</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To explore, document, and analyze unexplained phenomena—bridging the gap between scientific inquiry, historical mysteries, and cultural legends. We aim to foster discovery, promote understanding, and preserve the stories that inspire curiosity about the unknown.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Search, title: 'Scientific Research', desc: 'Rigorous investigation of unexplained phenomena using cutting-edge technology' },
                  { icon: BookOpen, title: 'Documentation', desc: 'Preserving historical mysteries and cultural narratives for future generations' },
                  { icon: Globe2, title: 'Global Network', desc: 'Coordinating research efforts across continents and cultures' },
                  { icon: Users, title: 'Community', desc: 'Building a worldwide network of researchers and enthusiasts' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                    <item.icon className="mx-auto mb-4 text-indigo-400" size={32} />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research Highlights */}
        <div id="research" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-50" />
          <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">
              Groundbreaking Expeditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Nazca Lines Aerial Survey",
                  location: "Peru",
                  image: "/images/nazca-lines.jpg",
                  desc: "Our team conducted comprehensive aerial surveys using advanced imaging technology to document and analyze the mysterious Nazca Lines. This expedition revealed previously undocumented patterns and mathematical correlations within these ancient geoglyphs.",
                  stats: ["14 New Patterns Identified", "3 Months of Analysis", "Satellite Mapping"]
                },
                {
                  title: "Sacred Valley Expedition",
                  location: "Cusco Region",
                  image: "/images/sacred-valley.jpg",
                  desc: "Leading a multi-disciplinary research team through Peru&apos;s Sacred Valley, we investigated archaeological anomalies and documented oral histories about unexplained phenomena, combining modern technology with traditional knowledge.",
                  stats: ["25 Site Surveys", "40+ Local Interviews", "Artifact Analysis"]
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 400))}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <MapPin size={18} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.stats.map((stat, i) => (
                        <span
                          key={i}
                          className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Section */}
            <div className="py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 opacity-50" />
              <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
                <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">
                  Future Research Timeline
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      year: "2025-2026",
                      title: "Deep Ocean Anomalies",
                      desc: "Investigation of unexplained deep-sea phenomena using advanced sonar technology and autonomous submersibles.",
                      focus: ["Mariana Trench Signals", "Underwater Structures", "Bioluminescent Patterns"]
                    },
                    {
                      year: "2027-2028",
                      title: "High-Altitude Atmospheric Research",
                      desc: "Study of unexplained atmospheric phenomena using next-generation weather balloons and satellite imagery.",
                      focus: ["Stratospheric Anomalies", "Aurora Patterns", "Electromagnetic Disturbances"]
                    },
                    {
                      year: "2029-2030",
                      title: "Ancient Site Energy Mapping",
                      desc: "Comprehensive mapping of electromagnetic and gravitational anomalies at ancient megalithic sites.",
                      focus: ["Pyramid Energy Fields", "Ley Line Mapping", "Stone Circle Frequencies"]
                    },
                    {
                      year: "2031-2032",
                      title: "Quantum Consciousness Studies",
                      desc: "Research into the relationship between quantum mechanics and consciousness, focusing on unexplained mental phenomena.",
                      focus: ["Remote Viewing", "Quantum Entanglement in Biology", "Consciousness Field Theory"]
                    },
                    {
                      year: "2033-2034",
                      title: "Interdimensional Physics",
                      desc: "Advanced theoretical and experimental work on the possibility of parallel dimensions and their interaction with our reality.",
                      focus: ["Dimensional Breach Detection", "Parallel Universe Theory", "Time Dilation Studies"]
                    }
                  ].map((period, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500" />
                      <div className="ml-6">
                        <span className="text-indigo-400 font-semibold">{period.year}</span>
                        <h3 className="text-2xl font-bold mt-2 mb-4">{period.title}</h3>
                        <p className="text-gray-300 mb-4">{period.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {period.focus.map((item, i) => (
                            <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Donation Section */}
            <div className="py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-50" />
              <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
                <h2 className="text-4xl font-bold tracking-tight mb-8 text-center">Support Our Research</h2>
                <p className="text-xl text-gray-300 text-center mb-12">
                  Your contribution helps us push the boundaries of human knowledge and understanding of unexplained phenomena.
                </p>
                
                <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Ways to Contribute</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-lg">
                        <Globe2 className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Research Sponsorship</h4>
                        <p className="text-gray-300">Support specific research projects or expeditions. Sponsors receive detailed reports and early access to findings.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-lg">
                        <Star className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Equipment Fund</h4>
                        <p className="text-gray-300">Help us acquire and maintain cutting-edge research equipment and technology.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-700 p-3 rounded-lg">
                        <BookOpen className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Educational Initiatives</h4>
                        <p className="text-gray-300">Support our public education programs and research publication efforts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                  <p className="text-gray-300 mb-8">
                    For donation inquiries or to discuss sponsorship opportunities:<br />
                    Email: <a href="mailto:donations@cosmicmystery.org" className="text-indigo-400 hover:text-indigo-300">donations@cosmicmystery.org</a><br />
                  </p>
                  <a 
                    href="#contact-form" 
                    className="inline-block rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                  >
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
