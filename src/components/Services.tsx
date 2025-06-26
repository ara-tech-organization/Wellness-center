
const Services = () => {
  const counsellingServices = [
    {
      title: "Individual Counselling",
      description: "One-on-one sessions focused on personal growth, mental health, and emotional well-being.",
      icon: "👤"
    },
    {
      title: "Relationship Counselling",
      description: "Support for couples and families to improve communication and strengthen relationships.",
      icon: "💕"
    },
    {
      title: "Mental Health Counselling",
      description: "Professional support for anxiety, depression, stress, and other mental health concerns.",
      icon: "🧠"
    },
    {
      title: "Trauma & Grief Counselling",
      description: "Specialized care for processing trauma, loss, and navigating the healing journey.",
      icon: "🌙"
    }
  ];

  const coachingServices = [
    {
      title: "Women Empowerment Coaching",
      description: "Empowering women to overcome barriers, build confidence, and achieve their goals.",
      icon: "👩‍💼"
    },
    {
      title: "Mindset Coaching",
      description: "Transform limiting beliefs and develop a positive, growth-oriented mindset.",
      icon: "🎯"
    },
    {
      title: "Personal Growth Coaching",
      description: "Guidance for self-discovery, personal development, and reaching your full potential.",
      icon: "🌟"
    },
    {
      title: "Goal Setting & Achievement Coaching",
      description: "Strategic support to set meaningful goals and create actionable plans for success.",
      icon: "🎪"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-wellness-violet mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your mental wellness journey through professional counselling 
            and transformative life coaching services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Counselling Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-wellness-violet mb-8 text-center">
              Counselling Services
            </h3>
            <div className="space-y-6">
              {counsellingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-wellness-light-purple p-6 rounded-2xl hover:shadow-lg transition-all duration-200 border border-wellness-lavender/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-wellness-violet mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coaching Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-wellness-violet mb-8 text-center">
              Coaching Services
            </h3>
            <div className="space-y-6">
              {coachingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-wellness-light-purple p-6 rounded-2xl hover:shadow-lg transition-all duration-200 border border-wellness-lavender/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-wellness-lavender rounded-full flex items-center justify-center">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-wellness-violet mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
