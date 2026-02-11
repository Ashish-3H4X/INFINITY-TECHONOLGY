import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const API = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [regNo, setRegNo] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");

        // ✅ Save RegNo
        setRegNo(data.regNo);

        // ✅ Show Popup
        setShowPopup(true);

        // Reset Form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        toast.error(data.message || "Failed. Try again");
      }
    } catch (error) {
      console.log(error);

      toast.error("Network error. Please resend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-pink-100 to-white pt-20 overflow-x-hidden relative">
        {/* HERO */}
        <section className="py-16 px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600">
            Have a project in mind? We’d love to hear from you.
          </p>
        </section>

        {/* CONTACT */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* INFO */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <InfoCard
                  icon="📧"
                  title="Email"
                  line1="infinitytechnology50@gmail.com"
                />

                <InfoCard
                  icon="📞"
                  title="Phone"
                  line1="+91 7376731077"
                  line2="Available all time"
                />

                <InfoCard
                  icon="📍"
                  title="Office"
                  line1="Jaunpur, Uttar Pradesh"
                  line2="India"
                />
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-xl p-8 bg-white border shadow-xl">
              <h2 className="text-xl sm:text-3xl font-bold mb-8">
                Send us a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  label="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Phone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="font-medium">Message *</label>

                  <textarea
                    rows="4"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-md p-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading || success}
                  className={`w-full py-3 rounded-full text-lg font-semibold text-white shadow-xl
                  flex items-center justify-center transition-all duration-300
                  ${
                    success
                      ? "bg-green-500"
                      : loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                  }`}
                >
                  {success && (
                    <span className="flex items-center gap-2 text-xl font-bold">
                      ✓ Sent
                    </span>
                  )}

                  {loading && !success && (
                    <span className="flex items-center gap-1">
                      Sending
                      <DotLoader />
                    </span>
                  )}

                  {!loading && !success && "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ✅ POPUP */}
        {showPopup && (
          <SuccessPopup regNo={regNo} onClose={() => setShowPopup(false)} />
        )}
      </main>

      <Footer />
    </>
  );
}

/* POPUP */
function SuccessPopup({ regNo, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-6 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          ✅ Submitted Successfully
        </h2>

        <p className="mb-1">Your Registration Number:</p>

        <p className="text-blue-600 font-bold text-lg mb-3">{regNo}</p>

        <p className="text-sm text-gray-500 mb-5">
          Please save this number for future reference.
        </p>

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          OK
        </button>
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({ icon, title, line1, line2 }) {
  return (
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition">
      <div className="flex gap-4 items-start">
        <div className="text-2xl">{icon}</div>

        <div>
          <h3 className="font-semibold mb-1">{title}</h3>

          <p className="text-gray-600">{line1}</p>

          {line2 && <p className="text-gray-600">{line2}</p>}
        </div>
      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <input
        {...props}
        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}

/* DOT LOADER */
function DotLoader() {
  return (
    <span className="inline-flex ml-1">
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </span>
  );
}
