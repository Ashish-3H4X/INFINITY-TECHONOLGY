import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

export default function Pricing() {

  const standardPlans = [
    {
      title: "Basic",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month free support",
        "Social media integration",
      ],
    },
    {
      title: "Standard",
      popular: true,
      gradient: "from-purple-500 to-blue-500",
      bg: "from-purple-50 to-blue-50",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "CMS integration",
        "Blog functionality",
        "3 months free support",
        "Google Analytics setup",
        "Custom graphics & icons",
        "Newsletter integration",
      ],
    },
    {
      title: "Enterprise",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced security features",
        "Priority support 24/7",
        "Dedicated project manager",
        "Performance optimization",
        "Multi-language support",
        "API integrations",
      ],
    },
  ];


  const ecommercePlans = [
    {
      title: "E-Commerce Basic",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      features: [
        "Up to 50 products",
        "Payment gateway integration",
        "Shopping cart functionality",
        "Order management system",
        "Customer account portal",
        "Basic inventory management",
        "Email notifications",
        "3 months free support",
      ],
    },
    {
      title: "E-Commerce Standard",
      popular: true,
      gradient: "from-purple-500 to-blue-500",
      bg: "from-purple-50 to-blue-50",
      features: [
        "Unlimited products",
        "Advanced payment options",
        "Multi-vendor support",
        "Advanced inventory management",
        "Analytics & reporting",
        "Marketing tools integration",
        "Wishlist & reviews",
        "6 months free support",
        "Mobile app ready",
      ],
    },
    {
      title: "E-Commerce Enterprise",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      features: [
        "Unlimited everything",
        "Custom integrations",
        "Multi-store management",
        "Advanced analytics & BI",
        "Dedicated infrastructure",
        "White-label solution",
        "Priority 24/7 support",
        "Custom development",
        "Performance optimization",
      ],
    },
  ];


  const faq = [
    {
      q: "Can I change plans later?",
      a: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and wire transfers.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No, all plans are month-to-month with no commitment.",
    },
    {
      q: "Do you offer custom enterprise solutions?",
      a: "Yes. Our Enterprise plan can be fully customized.",
    },
  ];


  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-gradient-to-br from-blue-200/70 via-pink-200/70 to-purple-200/70 pt-20 overflow-x-hidden">


        {/* HERO */}
        <section className="py-12 px-4 sm:px-6 text-center">

          <div className="max-w-4xl mx-auto">

            <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6">
              <span className="text-sm font-medium">
                Flexible Pricing Plans
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Simple,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h1>

            <p className="text-base sm:text-xl text-gray-600">
              Choose the perfect plan for your business.
            </p>

          </div>
        </section>


        {/* STANDARD */}
        <section className="py-16 px-4 sm:px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl sm:text-5xl font-bold mb-3">
              Standard Solutions
            </h2>

            <p className="text-sm sm:text-lg text-gray-600">
              Perfect for businesses
            </p>

          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {standardPlans.map((p, i) => (
              <PlanCard key={i} plan={p} />
            ))}

          </div>
        </section>


        {/* ECOMMERCE */}
        <section className="py-16 px-4 sm:px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl sm:text-5xl font-bold mb-3">
              E-Commerce Solutions
            </h2>

            <p className="text-sm sm:text-lg text-gray-600">
              Specialized pricing
            </p>

          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {ecommercePlans.map((p, i) => (
              <PlanCard key={i} plan={p} />
            ))}

          </div>
        </section>


        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl sm:text-5xl font-bold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="max-w-4xl mx-auto space-y-5">

            {faq.map((f, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl border-2 border-blue-400/30 bg-gradient-to-br shadow-sm"
              >

                <h3 className="font-bold text-lg sm:text-xl mb-2">
                  {f.q}
                </h3>

                <p className="text-sm sm:text-base text-gray-600">
                  {f.a}
                </p>

              </div>
            ))}

          </div>
        </section>


        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 text-center">

          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Still Have Any Questions?
          </h2>

          <p className="text-base sm:text-xl text-gray-600 mb-8">
            Our team is here to help you.
          </p>

          <Link to="/contact">

            <button className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
              Contact Sales
            </button>

          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}



function PlanCard({ plan }) {

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-xl border-2 bg-gradient-to-br ${plan.bg} shadow-sm hover:shadow-xl transition-all duration-500`}
    >

      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-100 to-blue-500 text-white px-5 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-xl">
          Most Popular
        </div>
      )}

      <h3 className="text-xl sm:text-2xl font-bold mb-3">
        {plan.title}
      </h3>

      <ul className="space-y-2 mb-6">

        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm sm:text-base text-gray-600"
          >
            <span className="text-green-600">✔</span>
            {f}
          </li>
        ))}

      </ul>

      <Link to="/contact">

        <button
          className={`w-full py-3 sm:py-4 rounded-full text-white font-semibold bg-gradient-to-r ${plan.gradient} shadow-lg`}
        >
          Contact us
        </button>

      </Link>

    </div>
  );
}
