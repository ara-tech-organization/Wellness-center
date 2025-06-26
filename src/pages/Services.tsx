
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, Target, Lightbulb, Compass, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const counsellingServices = [
    {
      title: "Individual Counselling",
      description: "Personalized one-on-one sessions focusing on your unique mental health needs, personal growth, and emotional well-being in a safe, confidential environment.",
      icon: Brain,
      features: ["Depression & Anxiety Support", "Stress Management", "Self-Esteem Building", "Life Transitions"]
    },
    {
      title: "Relationship Counselling",
      description: "Professional guidance for couples and families to improve communication, resolve conflicts, and strengthen emotional bonds for healthier relationships.",
      icon: Heart,
      features: ["Couples Therapy", "Family Dynamics", "Communication Skills", "Conflict Resolution"]
    },
    {
      title: "Mental Health Counselling",
      description: "Specialized support for various mental health challenges using evidence-based therapeutic approaches tailored to your specific needs and goals.",
      icon: Users,
      features: ["CBT & REBT", "Trauma-Informed Care", "Mood Disorders", "Behavioral Patterns"]
    },
    {
      title: "Trauma & Grief Counselling",
      description: "Compassionate care for processing traumatic experiences, loss, and grief, helping you navigate the healing journey with professional support.",
      icon: Target,
      features: ["PTSD Support", "Bereavement Counseling", "Trauma Recovery", "Emotional Processing"]
    }
  ];

  const coachingServices = [
    {
      title: "Women Empowerment Coaching",
      description: "Specialized coaching to help women overcome barriers, build unshakeable confidence, and achieve their personal and professional goals.",
      icon: Star,
      features: ["Leadership Development", "Career Advancement", "Work-Life Balance", "Confidence Building"]
    },
    {
      title: "Mindset Coaching",
      description: "Transform limiting beliefs and develop a positive, growth-oriented mindset that empowers you to overcome challenges and achieve success.",
      icon: Lightbulb,
      features: ["Belief System Change", "Positive Psychology", "Mental Resilience", "Success Mindset"]
    },
    {
      title: "Personal Growth Coaching",
      description: "Comprehensive guidance for self-discovery, personal development, and reaching your full potential through structured goal-setting and action plans.",
      icon: Compass,
      features: ["Self-Discovery", "Skill Development", "Life Purpose", "Personal Excellence"]
    },
    {
      title: "Goal Setting & Achievement",
      description: "Strategic support to set meaningful, achievable goals and create actionable plans that lead to consistent progress and lasting success.",
      icon: Target,
      features: ["SMART Goals", "Action Planning", "Progress Tracking", "Accountability Support"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-light-purple via-white to-wellness-lavender">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wellness-violet mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Professional mental wellness support through therapeutic counselling and transformative life coaching
            </p>
          </div>
        </div>
      </section>

      {/* Counselling Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Counselling Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional therapeutic support using evidence-based approaches to help you process emotions, 
              overcome challenges, and develop healthy coping strategies for lasting mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {counsellingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-wellness-light-purple p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-wellness-violet mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-wellness-violet rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Life Coaching Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering coaching programs designed to unlock your potential, clarify your goals, 
              and provide the tools and accountability you need to create meaningful, lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {coachingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-wellness-violet mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-wellness-lavender rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured, compassionate approach designed to support your unique journey to wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">Understanding your needs, goals, and creating a safe space for open communication.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Personalized Plan</h3>
              <p className="text-gray-600 text-sm">Developing a tailored approach that combines the most effective methods for your situation.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Active Sessions</h3>
              <p className="text-gray-600 text-sm">Regular sessions focused on progress, skill-building, and emotional processing.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-violet mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continued guidance and resources to maintain progress and prevent setbacks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take the First Step Toward Transformation
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're seeking counselling for healing or coaching for growth, we're here to 
              provide the professional support you need to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-wellness-violet hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg">
                  Book Your First Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/approach">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wellness-violet px-8 py-3 rounded-full font-semibold text-lg">
                  Learn About Our Methods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
