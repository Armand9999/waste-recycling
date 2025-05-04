import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to EcoRecycle</h2>
        <p className="text-lg mb-6">Promoting a cleaner, greener tomorrow through responsible recycling.</p>

        <section className="relative h-screen min-w-vh overflow-hidden mx-auto mb-6">
          
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/recycling.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Building a Greener Future</h1>
            <p className="text-lg md:text-2xl mb-8">Recycling today for a better tomorrow.</p>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Get in Touch
            </Link>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 shadow-md rounded bg-white">
            <h3 className="font-semibold text-xl mb-2">Plastic Recycling</h3>
            <p>Helping reduce plastic pollution through efficient collection and processing.</p>
          </div>
          <div className="p-4 shadow-md rounded bg-white">
            <h3 className="font-semibold text-xl mb-2">Metal Recycling</h3>
            <p>Giving metals a second life while conserving natural resources.</p>
          </div>
          <div className="p-4 shadow-md rounded bg-white">
            <h3 className="font-semibold text-xl mb-2">E-Waste Recycling</h3>
            <p>Safe disposal and recovery of valuable materials from electronic waste.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

