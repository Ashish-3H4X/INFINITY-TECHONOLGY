import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Blog() {

  const blogs = [
    {
      id: 1,
      title: "Future of Web Development",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description:
        "Modern web technologies are reshaping how businesses operate online.",
      date: "Jan 12, 2026",
    },
    {
      id: 2,
      title: "E-commerce Trends 2026",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description:
        "Online shopping continues to evolve with AI and automation.",
      date: "Jan 10, 2026",
    },
    {
      id: 3,
      title: "Why React is Popular",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      description: "React simplifies UI development with reusable components.",
      date: "Jan 8, 2026",
    },
  ];


  return (
    <>
      <Navbar />


      {/* MAIN WRAPPER */}
      <main className="min-h-screen w-full bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-purple-500/20 pt-20 overflow-x-hidden relative">


        {/* BACKGROUND BLOBS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-20 left-5 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-20 right-5 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

        </div>


        {/* HERO */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">

          <div className="container mx-auto relative z-10 text-center max-w-4xl">


            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-5 sm:mb-6 text-xs sm:text-sm font-medium">
              Latest Insights
            </span>


            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-5 sm:mb-6 leading-tight">

              Our{" "}

              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Blog
              </span>

            </h1>


            <p className="text-sm sm:text-xl text-gray-600">
              Explore technology, innovation, and digital transformation.
            </p>

          </div>

        </section>


        {/* BLOG GRID */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">

          <div className="container mx-auto max-w-7xl">


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

              {blogs.map((blog) => (

                <div
                  key={blog.id}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all"
                >

                  <div className="relative aspect-[4/3]">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>

                  </div>


                  <div className="p-4 sm:p-6">

                    <span className="text-xs sm:text-sm font-semibold text-blue-600">
                      {blog.category}
                    </span>


                    <h3 className="text-lg sm:text-2xl font-bold mt-2 mb-2 sm:mb-3">
                      {blog.title}
                    </h3>


                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {blog.description}
                    </p>


                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">

                      <span>{blog.date}</span>

                      <button className="text-blue-600 font-semibold hover:underline">
                        Read More →
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="py-14 sm:py-18 px-4 sm:px-6">

          <div className="container mx-auto max-w-4xl">


            <div className="rounded-3xl bg-purple-400/10 p-6 sm:p-16 text-center text-black shadow-2xl">


              <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Want more tech insights?
              </h2>


              <p className="text-sm sm:text-lg mb-6 sm:mb-8">
                Stay updated with our latest articles and trends.
              </p>


              <button className="bg-blue-600/20 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                Subscribe Now
              </button>


            </div>

          </div>

        </section>


      </main>


      <Footer />
    </>
  );
}
