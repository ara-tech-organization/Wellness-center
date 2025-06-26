
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Shield, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 wellness-gradient sparkle-bg"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-wellness-sparkle rounded-full floating-animation"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-wellness-sparkle rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-wellness-sparkle rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center floating-animation">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-wellness-violet">A</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
            Empowering Minds.
            <br />
            <span className="text-wellness-sparkle">Cultivating Clarity.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            A safe space for emotional clarity, mental wellness, and personal growth. 
            Discover your inner strength and thrive with compassionate, evidence-based care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-wellness-violet hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Book a Session
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wellness-violet px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-8">
              Welcome to Your Journey of Healing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              At Adhi Mind Wellness Centre, we believe every individual deserves a life filled with 
              purpose, peace, and authentic happiness. Our holistic approach combines proven therapeutic 
              methods with compassionate care to guide you toward emotional freedom.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-wellness-violet mb-2">Compassionate Care</h3>
                <p className="text-gray-600">Every session is guided by empathy, understanding, and genuine care for your wellbeing.</p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-wellness-violet mb-2">Safe Environment</h3>
                <p className="text-gray-600">A confidential, non-judgmental space where you can explore your thoughts and feelings freely.</p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-wellness-violet mb-2">Personal Growth</h3>
                <p className="text-gray-600">Unlock your potential and discover the tools you need to thrive in all areas of life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Comprehensive Mental Wellness Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From individual counselling to specialized coaching, we offer a range of services 
              designed to meet you wherever you are in your healing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h3 className="text-2xl font-semibold text-wellness-violet">Counselling Services</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Individual & Relationship Counselling
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Mental Health Support
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Trauma & Grief Processing
                </li>
              </ul>
              <Link to="/services" className="inline-block mt-6">
                <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white">
                  Explore Counselling <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌟</span>
                </div>
                <h3 className="text-2xl font-semibold text-wellness-violet">Life Coaching</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Women Empowerment Coaching
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Mindset & Personal Growth
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-wellness-violet mr-3" />
                  Goal Setting & Achievement
                </li>
              </ul>
              <Link to="/services" className="inline-block mt-6">
                <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white">
                  Explore Coaching <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the first step toward emotional clarity and personal empowerment. 
              Our compassionate team is here to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-wellness-violet text-wellness-violet hover:bg-wellness-violet hover:text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>

            <div className="mt-12 p-8 bg-wellness-light-purple rounded-2xl border border-wellness-lavender/20">
              <p className="text-lg text-wellness-violet font-medium italic">
                "Your mental wellness journey is unique to you. We're here to provide the guidance, 
                support, and tools you need to create lasting positive change in your life."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
