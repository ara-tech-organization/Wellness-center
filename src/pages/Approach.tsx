
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Eye, Lightbulb, Target, CheckCircle, ArrowRight, Compass } from 'lucide-react';

const Approach = () => {
  const therapeuticMethods = [
    {
      name: "Cognitive Behavioural Therapy (CBT)",
      description: "A structured, evidence-based approach that focuses on identifying and changing negative thought patterns and behaviors that contribute to emotional distress.",
      icon: Brain,
      benefits: ["Practical skill development", "Rapid symptom relief", "Long-term coping strategies", "Goal-oriented sessions"],
      applications: ["Depression & Anxiety", "Phobias & OCD", "Trauma Recovery", "Behavioral Change"]
    },
    {
      name: "Rational Emotive Behaviour Therapy (REBT)",
      description: "A powerful method that helps individuals identify and challenge irrational beliefs that cause emotional disturbance, promoting psychological resilience.",
      icon: Lightbulb,
      benefits: ["Emotional regulation", "Stress resilience", "Self-acceptance", "Rational thinking"],
      applications: ["Anger Management", "Performance Anxiety", "Self-Esteem Issues", "Life Transitions"]
    },
    {
      name: "Gestalt Therapy",
      description: "A present-focused approach emphasizing personal responsibility, self-awareness, and the integration of thoughts, feelings, and actions.",
      icon: Eye,
      benefits: ["Increased self-awareness", "Emotional integration", "Present moment focus", "Authentic expression"],
      applications: ["Relationship Issues", "Personal Growth", "Emotional Processing", "Creative Blocks"]
    },
    {
      name: "Visual-Kinesthetic Techniques",
      description: "Creative therapeutic approaches using visual imagery, movement, and sensory experiences to process emotions and facilitate healing.",
      icon: Target,
      benefits: ["Creative expression", "Body-mind connection", "Trauma processing", "Holistic healing"],
      applications: ["Trauma Recovery", "Stress Relief", "Creative Blocks", "Somatic Healing"]
    }
  ];

  const principles = [
    {
      title: "Individualized Treatment",
      description: "Every person is unique, and so is their healing journey. We carefully assess your specific needs, goals, and circumstances to create a personalized treatment plan.",
      icon: "🎯"
    },
    {
      title: "Evidence-Based Practice",
      description: "Our methods are grounded in scientific research and proven therapeutic approaches, ensuring you receive the most effective care available.",
      icon: "🔬"
    },
    {
      title: "Holistic Integration",
      description: "We address the whole person—mind, body, and spirit—recognizing that true wellness encompasses all aspects of your being.",
      icon: "🌟"
    },
    {
      title: "Cultural Sensitivity",
      description: "We honor and respect your cultural background, beliefs, and values, integrating them thoughtfully into your therapeutic journey.",
      icon: "🤝"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-violet via-wellness-lavender to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Therapeutic Approach
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Evidence-based methods tailored to your unique journey of healing and growth
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Proven Therapeutic Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our counselling sessions integrate multiple evidence-based approaches, carefully selected 
              and combined to address your specific needs and therapeutic goals.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {therapeuticMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 bg-wellness-light-purple p-8 rounded-3xl shadow-lg border border-wellness-lavender/20">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-2xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-wellness-violet">
                        {method.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {method.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-wellness-violet mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {method.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-wellness-violet mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-wellness-violet mb-3">Applications:</h4>
                        <ul className="space-y-2">
                          {method.applications.map((application, appIndex) => (
                            <li key={appIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-wellness-lavender rounded-full mr-3"></div>
                              {application}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Our Core Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental beliefs guide our practice and ensure you receive the most effective, 
              compassionate care possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{principle.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-wellness-violet mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-8">
              <Compass className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Personalized Integration
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We understand that every individual is unique, with their own story, challenges, and strengths. 
              Our therapeutic approach is carefully tailored to meet your specific needs, combining different 
              techniques to create the most effective treatment plan for your personal healing journey.
            </p>

            <div className="bg-wellness-light-purple p-8 rounded-2xl border-l-4 border-wellness-violet mb-8">
              <p className="text-lg font-medium text-wellness-violet italic">
                "True healing happens when the right therapeutic approach meets the right person at the right time. 
                Our role is to create that perfect alignment for your unique journey."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-wellness-violet mb-2">Assessment</h3>
                <p className="text-sm text-gray-600">Comprehensive evaluation of your needs and goals</p>
              </div>
              
              <div className="p-6">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold text-wellness-violet mb-2">Customization</h3>
                <p className="text-sm text-gray-600">Tailored combination of therapeutic approaches</p>
              </div>
              
              <div className="p-6">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-wellness-violet mb-2">Adaptation</h3>
                <p className="text-sm text-gray-600">Continuous refinement based on your progress</p>
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
              Experience Our Therapeutic Approach
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover how our evidence-based, personalized approach can support your journey 
              toward healing, growth, and lasting positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-wellness-violet hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wellness-violet px-8 py-3 rounded-full font-semibold text-lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
