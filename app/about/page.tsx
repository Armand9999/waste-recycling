import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-8">
        <h2 className="text-4xl font-bold text-green-700 mb-6">About Us</h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image 
            src="/about-us.jpg" 
            alt="Our Team" 
            width={500} 
            height={300} 
            className="rounded-lg"
          />
          
          <div>
            <p className="mb-4">
              At DHAFA Recycling, we believe in a sustainable future. We have been committed to providing innovative plastic recycling solutions to communities and businesses.
            </p>
            <p>
              Our dedicated team ensures that waste is minimized, materials are reused, and environmental impact is reduced — creating a greener planet for future generations.
            </p>
          </div>
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 shadow-lg rounded-lg bg-white">
              <div className="flex justify-center mb-4">
                <Image src="/process-1.jpg" alt="Collect" width={100} height={100} className="rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collection</h3>
              <p>We gather recyclable materials from homes, businesses, and community centers.</p>
            </div>

            <div className="p-6 shadow-lg rounded-lg bg-white">
              <div className="flex justify-center mb-4">
                <Image src="/process-2.jpg" alt="Sort" width={100} height={100} className="rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sorting</h3>
              <p>Materials are carefully sorted into categories to ensure quality recycling.</p>
            </div>

            <div className="p-6 shadow-lg rounded-lg bg-white">
              <div className="flex justify-center mb-4">
                <Image src="/process-3.jpg" alt="Recycle" width={100} height={100} className="rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recycling</h3>
              <p>Sorted materials are processed and transformed into new products.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
            {
                name: "John Doe",
                role: "Founder & CEO",
                img: "/team-member-1.jpg",
            },
            {
                name: "Jane Smith",
                role: "Operations Manager",
                img: "/team-member-2.jpg",
            },
            {
                name: "Mike Johnson",
                role: "Environmental Specialist",
                img: "/team-member-3.jpg",
            },
            ].map((member, idx) => (
            <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-md">
                <Image
                    src={member.img}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
            </div>
            ))}
        </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
