import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Home() {

  function StatBox({ number, label }) {
    return (
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {number}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 font-medium">
          {label}
        </div>
      </div>
    );
  }


  function FeatureCard({ title, desc, gradient }) {
    return (
      <div
        className={`p-6 sm:p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all border-2 border-blue-400/30 bg-gradient-to-br ${gradient}`}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          {title}
        </h3>

        <p className="text-sm sm:text-lg text-gray-600">
          {desc}
        </p>
      </div>
    );
  }


  function ImageCard({ img, title, subtitle }) {
    return (
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">

        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30" />

        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">

          <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
            {title}
          </h3>

          <p className="text-xs sm:text-gray-600">
            {subtitle}
          </p>

        </div>

      </div>
    );
  }



  return (
    <>
      <Navbar />


      {/* MAIN */}
      <main className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 overflow-x-hidden relative">


        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">


          {/* BACKGROUND CLIP */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">


            <div className="absolute top-1/4 left-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-blue-500/35 to-cyan-500/25 rounded-full blur-3xl" />

            <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-purple-500/35 to-pink-500/25 rounded-full blur-3xl" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 h-56 sm:h-64 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl" />

            <div className="absolute top-1/3 right-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-full blur-3xl" />

          </div>


          {/* GRID BG */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse opacity-30" />


          {/* CONTENT */}
          <div className="container mx-auto relative z-10 text-center max-w-7xl">


            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-5 sm:mb-6">

              <span className="text-xs sm:text-sm font-medium">
                Welcome to the Infinity Technologies
              </span>

            </div>


            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">

              Build fast,
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                modern web experiences
              </span>

            </h1>


            <p className="text-sm sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">

              Clean design, smooth animations, and developer friendly code.

            </p>


            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">


              <a href="/contact">

                <button className="px-4 sm:px-3 py-2 text-sm sm:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">

                  Get Started →

                </button>

              </a>


              <a href="/services">

                <button className="px-4 sm:px-3 py-2 text-sm sm:text-lg font-semibold rounded-full border-2 hover:bg-gray-100">

                  Explore Services

                </button>

              </a>

            </div>


            {/* STATS */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-24 max-w-4xl mx-auto">

              <StatBox number="10+" label="Active Clients" />
              <StatBox number="50+" label="Projects Completed" />
              <StatBox number="7+" label="Countries Served" />

            </div>


          </div>

        </section>



        {/* WHY */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">


          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/25 rounded-full blur-3xl" />

            <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/25 rounded-full blur-3xl" />

          </div>


          <div className="container mx-auto relative z-10 text-center">


            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">

              Why Choose Infinity Technologies?

            </h2>


            <p className="text-sm sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16">

              We combine innovation, expertise, and dedication.

            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

              <FeatureCard
                title="Lightning Fast"
                desc="Optimized performance for seamless user experience"
                gradient="from-blue-50 to-cyan-50 hover:scale-110 transition"
              />

              <FeatureCard
                title="Secure & Reliable"
                desc="Enterprise-grade security for your peace of mind"
                gradient="from-purple-50 to-pink-50 hover:scale-110 transition"
              />

              <FeatureCard
                title="Scalable Solutions"
                desc="Grow your business without technical limitations"
                gradient="from-orange-50 to-red-50 hover:scale-110 transition"
              />

            </div>

          </div>

        </section>



        {/* INNOVATION */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">


          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div className="absolute top-1/2 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-cyan-500/25 to-blue-500/20 rounded-full blur-3xl" />

            <div className="absolute bottom-1/3 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-pink-500/25 to-purple-500/20 rounded-full blur-3xl" />

          </div>


          <div className="container mx-auto relative z-10 text-center">


            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">

              Innovation in{" "}

              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Action
              </span>

            </h2>


            <p className="text-sm sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16">

              Experience the future of technology.

            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">

              <ImageCard
                img="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
                title="Website Designing"
                subtitle="Creative and stunning website designs"
              />

              <ImageCard
                img="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                title="E-commerce Web Designing"
                subtitle="Build powerful online stores that sell"
              />

              <ImageCard
                img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                title="Website Development"
                subtitle="Modern and scalable web applications"
              />

              <ImageCard
                img="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&h=600&fit=crop"
                title="PHP Web Development"
                subtitle="Robust PHP solutions for dynamic websites"
              />

            </div>

          </div>

        </section>



        {/* CTA */}
        <section className="py-12 px-4 sm:px-6">

          <div className="container mx-auto relative overflow-hidden rounded-3xl p-8 sm:p-16 md:p-24 text-center text-black shadow-2xl">


            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8">

              Ready to Transform Your Business?

            </h2>


            <p className="text-sm sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">

              Let's discuss how we can help you.

            </p>


            <a href="/contact">

              <button className="px-5 sm:px-6 py-3 sm:py-5 text-sm sm:text-lg font-semibold rounded-full bg-blue-400/20 text-black shadow-2xl">

                Start Your Project →

              </button>

            </a>

          </div>

        </section>


      </main>


      <Footer />
    </>
  );
}
