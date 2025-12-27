import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  gradient: string;
  imageUrl: string;
}

const CertificatesPage: React.FC = () => {
  usePageTitle("Chứng chỉ & Thành tựu | Trần Anh Tú");

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy & JS Institute",
      date: "Dec 03, 2025",
      skills: ["Objects & Prototypes", "Inheritance", "Advanced Array Methods", "OOP Principles", "RegExp & Math Object"],
      gradient: "from-amber-400 to-orange-600",
      imageUrl: "images/JavaScriptEssentials2Update20251223-33-a272z5.pdf",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy & JS Institute",
      date: "Nov 21, 2025",
      skills: ["JS Syntax & Variables", "Data Types", "Flow Control & Loops", "Functions", "Basic Algorithms"],
      gradient: "from-yellow-300 to-amber-500",
      imageUrl: "images/JavaScriptEssentials1Update20251223-30-90xqcp.pdf",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Nov 18, 2025",
      skills: ["Network Protocols", "IPv4 & IPv6 Addressing", "Routers & Connections", "Network Communication", "Connectivity Troubleshooting"],
      gradient: "from-blue-500 to-indigo-600",
      imageUrl: "images/NetworkingBasicsUpdate20251223-30-icyj5m.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Nov 23, 2024",
      skills: ["Cyber Threats & Attacks", "Online Safety", "Vulnerability Management", "Data Protection", "Career Options"],
      gradient: "from-emerald-400 to-teal-600",
      imageUrl: "images/I2CSUpdate20251223-30-y6ls0n.pdf",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in relative space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
          Chứng chỉ <span className="text-primary-600">&</span> Thành tựu
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Hành trình học tập và những cột mốc quan trọng trong sự nghiệp lập trình của mình.
          <span className="block mt-2 text-sm text-primary-500 font-bold uppercase tracking-widest">Click để xem chi tiết</span>
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group relative bg-white dark:bg-dark-card rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-10 rounded-bl-[5rem] group-hover:scale-150 transition-transform duration-700`} />

            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.gradient} shadow-lg shadow-current/20`}>
                  {cert.issuer.includes("JS") ? (
                    <span className="text-3xl filter brightness-0 invert">⚡</span>
                  ) : cert.issuer.includes("Cyber") ? (
                    <span className="text-3xl filter brightness-0 invert">🛡️</span>
                  ) : (
                    <span className="text-3xl filter brightness-0 invert">🌐</span>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 uppercase tracking-widest">
                    Verified ID
                  </span>
                  <span className="text-xs font-bold text-gray-400">{cert.date}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wide">
                {cert.issuer}
              </p>

              <div className="mt-auto space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent" />
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[11px] font-bold px-3 py-1 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[11px] font-bold px-3 py-1 text-primary-500">+{cert.skills.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay - Improved PDF Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-gray-900/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-6xl bg-white dark:bg-dark-card rounded-[2rem] shadow-3xl overflow-hidden transform transition-all flex flex-col h-full md:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">{selectedCert.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow bg-gray-100 dark:bg-gray-950 overflow-hidden relative">
              {selectedCert.imageUrl.endsWith(".pdf") ? (
                <iframe
                  src={`${selectedCert.imageUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-none shadow-2xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
