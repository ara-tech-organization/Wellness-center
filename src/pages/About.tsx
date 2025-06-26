
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Adhi Mind Wellness Centre
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              A sanctuary for healing, growth, and transformation in the heart of Thanjavur
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-wellness-lavender mx-auto"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Adhi Mind Wellness Centre was born from a deep understanding that every individual 
                deserves access to compassionate, professional mental health care. Located in the 
                cultural heart of Thanjavur, our centre represents a commitment to holistic wellness 
                that honors both traditional wisdom and evidence-based modern practices.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Founded with a vision rooted in kindness and compassion, we combine therapeutic 
                counselling and life coaching to help people rediscover purpose, overcome challenges, 
                and thrive. Our approach is grounded in empathy, non-judgment, and evidence-based 
                practices that respect the unique journey of each individual.
              </p>

              <div className="bg-wellness-light-purple p-8 rounded-2xl my-8 border-l-4 border-wellness-violet">
                <p className="text-lg font-medium text-wellness-violet italic">
                  "We believe in the power of kindness, the importance of clarity, and the potential 
                  for every individual to be empowered to create positive change in their lives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every interaction and shape our approach to mental wellness care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💜</span>
              </div>
              <h3 className="text-2xl font-bold text-wellness-violet mb-4">Kindness</h3>
              <p className="text-gray-600 leading-relaxed">
                Every interaction is guided by compassion and understanding, creating a nurturing 
                environment where healing can flourish naturally and authentically.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-wellness-violet mb-4">Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you gain deep insight into your thoughts, emotions, and patterns, 
                empowering you to make informed decisions and positive life changes.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-wellness-violet mb-4">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Our ultimate goal is to equip you with practical tools, insights, and confidence 
                to thrive independently and create lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">What Makes Us Different</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our unique blend of professional expertise, cultural sensitivity, and personalized care sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-wellness-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wellness-violet mb-2">Holistic Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We seamlessly blend counselling and coaching to address both emotional healing 
                      and personal growth, providing comprehensive support for your entire wellness journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-wellness-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wellness-violet mb-2">Evidence-Based Practice</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our methods are grounded in proven therapeutic approaches including CBT, REBT, 
                      and Gestalt therapy, ensuring you receive effective, research-backed care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-wellness-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wellness-violet mb-2">Cultural Sensitivity</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We understand and respect the rich cultural context of our community, 
                      integrating cultural awareness into our therapeutic approach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-wellness-violet" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wellness-violet mb-2">Personalized Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every treatment plan is carefully tailored to your unique needs, goals, 
                      and circumstances, ensuring the most effective path to wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Compassionate Care?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in creating a brighter, more empowered future. Your journey to mental wellness 
              and personal growth starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-wellness-violet hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg">
                  Start Your Journey Today
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wellness-violet px-8 py-3 rounded-full font-semibold text-lg">
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
