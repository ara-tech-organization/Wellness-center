import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ensures the page scrolls to top on load
  }, []);

  const images = [
    // Replace these with your actual image URLs
    "/lovable-uploads/01.jpeg",
    "/lovable-uploads/02.jpeg",
    "/lovable-uploads/03.jpeg",
    "/lovable-uploads/04.jpeg",
    "/lovable-uploads/05.jpeg",
    "/lovable-uploads/06.jpeg",
    "/lovable-uploads/07.jpeg",
    "/lovable-uploads/08.jpeg",
    "/lovable-uploads/09.jpeg",
    "/lovable-uploads/10.jpeg",
    "/lovable-uploads/11.jpeg",
    "/lovable-uploads/12.jpeg",
    "/lovable-uploads/13.jpeg",
    "/lovable-uploads/14.jpeg",
    "/lovable-uploads/15.jpeg",
    "/lovable-uploads/16.jpeg",
    "/lovable-uploads/17.jpeg",
    "/lovable-uploads/18.jpeg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-wellness-violet to-wellness-lavender text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
             A glimpse into our world of transformation and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
