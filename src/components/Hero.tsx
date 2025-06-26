
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and sparkles */}
      <div className="absolute inset-0 wellness-gradient sparkle-bg"></div>
      
      {/* Animated sparkles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-wellness-sparkle rounded-full animate-sparkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-wellness-sparkle rounded-full animate-sparkle animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-wellness-sparkle rounded-full animate-sparkle animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-wellness-sparkle rounded-full animate-sparkle animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-wellness-sparkle rounded-full animate-sparkle animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-playfair font-bold text-wellness-violet">A</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 text-shadow">
          Empowering Minds.
          <br />
          <span className="text-wellness-sparkle">Cultivating Clarity.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          A safe space for emotional clarity, mental wellness, and personal growth. 
          Discover your inner strength and thrive with compassionate, evidence-based care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-wellness-violet hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Book a Session
          </Button>
          <Button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-wellness-violet px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
