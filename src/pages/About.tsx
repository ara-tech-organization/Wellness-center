
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target, GraduationCap, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About K. Adhilakshmi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Guiding you from feeling powerless to embracing your inner strength
            </p>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">Professional Qualifications</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-wellness-violet" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wellness-violet mb-2">MBA in Human Resource Management</h3>
                      <p className="text-gray-600">Madras University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-wellness-violet" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-wellness-violet mb-2">MSc in Psychology</h3>
                      <p className="text-gray-600">Madras University</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-wellness-light-purple p-8 rounded-3xl" data-aos="fade-left">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-wellness-violet mb-4">Transform Within, Thrive Beyond</h3>
                  <p className="text-lg text-gray-700 italic">Our guiding tagline that embodies the journey of personal transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-wellness-violet">My Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To guide individuals on a journey from feeling powerless to embracing their inner strength — 
                  so they can meet life's challenges with purpose, courage, confidence, clarity, and resilience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-wellness-violet">My Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To touch as many lives as possible, fostering peace and harmony in the hearts 
                  and homes of people everywhere, creating ripples of positive change in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">Guiding Principles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental values shape every interaction and guide our approach to mental wellness care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center p-6 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💜</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Purpose</h3>
              <p className="text-gray-600 text-sm">Living with clear intention and meaningful direction</p>
            </div>

            <div className="text-center p-6 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Courage</h3>
              <p className="text-gray-600 text-sm">Facing challenges with bravery and determination</p>
            </div>

            <div className="text-center p-6 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="600">
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Confidence</h3>
              <p className="text-gray-600 text-sm">Building unshakeable self-belief and inner strength</p>
            </div>

            <div className="text-center p-6 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="800">
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Resilience</h3>
              <p className="text-gray-600 text-sm">Bouncing back stronger from life's challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Philosophy */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Journey of Transformation
              </h2>
            </div>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              At Adhi Mind Wellness Centre, we believe that true healing begins from within. 
              Every individual possesses an innate capacity for growth, resilience, and transformation. 
              My role is to guide you in discovering and nurturing this inner strength.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <blockquote className="text-2xl font-medium italic leading-relaxed">
                "The journey from feeling powerless to embracing your inner strength is not just about overcoming challenges — 
                it's about discovering who you truly are and what you're capable of achieving."
              </blockquote>
              <div className="mt-6">
                <p className="text-lg font-semibold">K. Adhilakshmi</p>
                <p className="text-white/80">Founder, Adhi Mind Wellness Centre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Ready to Transform Within and Thrive Beyond?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Begin your journey of personal transformation with compassionate guidance and proven methodologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Start Your Journey Today
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-wellness-violet text-wellness-violet hover:bg-wellness-violet hover:text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
