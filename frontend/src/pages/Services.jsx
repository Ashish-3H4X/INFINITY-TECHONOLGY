import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaChartBar,
  FaLightbulb,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      color: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      points: [
        "AWS, Azure, and Google Cloud Platform",
        "Cloud migration and optimization",
        "Serverless architecture design",
        "24/7 monitoring and support",
      ],
    },
    {
      icon: FaCode,
      title: "Custom Software Development",
      color: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      points: [
        "Full-stack web applications",
        "Mobile app development (iOS & Android)",
        "API development and integration",
        "Legacy system modernization",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      color: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      points: [
        "Security audits and assessments",
        "Penetration testing",
        "Data encryption and protection",
        "Compliance and risk management",
      ],
    },
    {
      icon: FaChartBar,
      title: "Data Analytics",
      color: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      points: [
        "Business intelligence dashboards",
        "Predictive analytics and ML",
        "Data warehouse solutions",
        "Real-time reporting systems",
      ],
    },
    {
      icon: FaLightbulb,
      title: "IT Consulting",
      color: "from-indigo-500 to-blue-500",
      bg: "from-indigo-50 to-blue-50",
      points: [
        "Digital transformation strategy",
        "Technology roadmap planning",
        "Process optimization",
        "Vendor selection and management",
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Solutions",
      color: "from-pink-500 to-rose-500",
      bg: "from-pink-50 to-rose-50",
      points: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Mobile UI/UX design",
        "App maintenance and updates",
      ],
    },
  ];

  const benefits = [
    "Clear communication at every stage",
    "Fast delivery with clean code",
    "Mobile-first and responsive design",
    "Post-launch support and updates",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 pt-20 overflow-x-hidden">

        {/* HERO */}
        <section className="py-12 px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">

            <div className="inline-block mb-6 px-4 py-2 bg-white/40 rounded-full">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                ✨ Next-Gen IT Solutions
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-600">
              Comprehensive IT solutions tailored to your business needs.
            </p>

          </div>
        </section>


        {/* SERVICES GRID */}
        <section className="py-16 px-4 sm:px-6">

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={i}
                  className={`p-6 sm:p-8 rounded-xl border-2 border-blue-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${s.bg}`}
                >

                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${s.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="text-white text-xl sm:text-2xl" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {s.title}
                  </h3>

                  <ul className="space-y-2">

                    {s.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-blue-600 mt-0.5">✔</span>
                        {p}
                      </li>
                    ))}

                  </ul>

                </div>
              );
            })}

          </div>
        </section>


        {/* BUILD SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Build smarter products with modern design
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Simple, clean and scalable UI built with React and Tailwind CSS.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/pricing")}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
              >
                See plans
              </button>

            </div>
          </div>

          <img
            src="/src/images/servicetrns.png"
            alt="process"
            className="w-full h-[260px] sm:h-[350px] md:h-[400px] object-cover rounded-xl"
          />

        </section>


        {/* HOW WE WORK */}
        <section className="py-20 px-4 sm:px-6">

          <div className="max-w-6xl mx-auto text-center mb-16">

            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              How We Work
            </h2>

            <p className="text-base sm:text-xl text-gray-600">
              We follow a structured and transparent process.
            </p>

          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {[
              ["01", "Understand Requirements"],
              ["02", "Plan & Design"],
              ["03", "Build & Test"],
              ["04", "Deploy & Support"],
            ].map(([num, title]) => (

              <div key={num}>

                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                  {num}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold mb-2">
                  {title}
                </h3>

              </div>

            ))}

          </div>
        </section>


        {/* WHY US */}
        <section className="py-16 px-4 sm:px-6">

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                Why Work With Us
              </h2>

              <p className="mt-3 text-gray-700 text-sm sm:text-base">
                We build reliable digital products.
              </p>

              <ul className="mt-6 space-y-3">

                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm sm:text-base">
                    <span className="text-blue-600 font-bold">✔</span>
                    {b}
                  </li>
                ))}

              </ul>

            </div>

            <img
              src="/src/images/servicetrns1.png"
              alt="Why choose us"
              className="w-full h-[260px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow"
            />

          </div>
        </section>


        {/* CTA */}
        <section className="py-12 px-4 sm:px-6">

          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 rounded-3xl p-8 sm:p-16 shadow-2xl">

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-base sm:text-xl mb-8">
              Let’s discuss your project.
            </p>

            <Link to="/contact">

              <button className="bg-blue-600/50 text-black px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg shadow-xl">
                Contact Us Today
              </button>

            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
