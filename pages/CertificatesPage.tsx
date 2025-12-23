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
  usePageTitle("Chứng chỉ & Thành tựu | Nhật Cường Dev");

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy & JS Institute",
      date: "Dec 03, 2025",
      skills: [
        "Objects & Prototypes",
        "Inheritance",
        "Advanced Array Methods",
        "OOP Principles",
        "RegExp & Math Object",
      ],
      gradient: "from-yellow-400 to-yellow-600",
      imageUrl: "images/JavaScriptEssentials2Update20251223-33-a272z5.pdf",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy & JS Institute",
      date: "Nov 21, 2025",
      skills: [
        "JS Syntax & Variables",
        "Data Types",
        "Flow Control & Loops",
        "Functions",
        "Basic Algorithms",
      ],
      gradient: "from-yellow-300 to-yellow-500",
      imageUrl: "images/JavaScriptEssentials1Update20251223-30-90xqcp.pdf",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Nov 18, 2025",
      skills: [
        "Network Protocols",
        "IPv4 & IPv6 Addressing",
        "Routers & Connections",
        "Network Communication",
        "Connectivity Troubleshooting",
      ],
      gradient: "from-blue-400 to-blue-600",
      imageUrl: "images/NetworkingBasicsUpdate20251223-30-icyj5m.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Nov 23, 2024",
      skills: [
        "Cyber Threats & Attacks",
        "Online Safety",
        "Vulnerability Management",
        "Data Protection",
        "Career Options",
      ],
      gradient: "from-green-400 to-green-600",
      imageUrl: "images/I2CSUpdate20251223-30-y6ls0n.pdf",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in relative">
      <div className="text-center mb-16 space-y-4" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Chứng chỉ & Thành tựu
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Những cột mốc quan trọng đánh dấu sự nỗ lực và phát triển của mình
          trên con đường chinh phục công nghệ. Click vào từng chứng chỉ để xem
          chi tiết.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl dark:hover:shadow-primary-900/20 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Top Decoration */}
            <div
              className={`h-2 w-full bg-gradient-to-r ${cert.gradient}`}
            ></div>

            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl shadow-inner">
                  {/* Generic Icon based on issuer content roughly */}
                  {cert.issuer.includes("JS") ? (
                    <span className="text-3xl">⚡</span>
                  ) : cert.issuer.includes("Cyber") ? (
                    <span className="text-3xl">🛡️</span>
                  ) : (
                    <span className="text-3xl">🌐</span>
                  )}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 uppercase tracking-wide">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 flex items-center">
                <span className="truncate">{cert.issuer}</span>
                <span className="mx-2">•</span>
                <span className="whitespace-nowrap">{cert.date}</span>
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800/50">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Kỹ năng đạt được
                </h4>
                <ul className="space-y-3">
                  {cert.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-primary-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-white/90 dark:bg-black/50 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 backdrop-blur-sm"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Image/PDF Container - Flexible Height */}
            <div className="relative w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-grow min-h-[300px] overflow-hidden p-0">
              {selectedCert.imageUrl.endsWith(".pdf") ? (
                <iframe
                  src={`${selectedCert.imageUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`Certificate: ${selectedCert.title}`}
                  className="w-full h-[85vh] border-none"
                />
              ) : (
                <img
                  src={selectedCert.imageUrl}
                  alt={`Certificate: ${selectedCert.title}`}
                  className="max-w-full max-h-[75vh] object-contain shadow-lg rounded-lg"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.src = `https://placehold.co/1200x850/e2e8f0/1e293b?text=${encodeURIComponent(
                      selectedCert.title
                    )}`;
                  }}
                />
              )}
            </div>

            {/* Footer Info */}
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-dark-card shrink-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cấp bởi{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {selectedCert.issuer}
                </span>{" "}
                vào {selectedCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
