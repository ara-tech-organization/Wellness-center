
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-wellness-light-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-wellness-violet mb-8">
            About Adhi Mind Wellness Centre
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Adhi Mind Wellness Centre in Thanjavur is a safe space for individuals seeking emotional clarity, 
              mental wellness, and personal growth. Founded with a vision rooted in kindness and compassion, 
              the centre combines therapeutic counselling and life coaching to help people rediscover purpose, 
              overcome challenges, and thrive.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Our approach is grounded in empathy, non-judgment, and evidence-based practices. We believe in 
              the power of kindness, the importance of clarity, and the potential for every individual to be 
              empowered to create positive change in their lives.
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-16 h-16 bg-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💜</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-wellness-violet mb-2">Kindness</h3>
              <p className="text-gray-600">
                Every interaction is guided by compassion and understanding, creating a nurturing environment for healing.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-16 h-16 bg-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-wellness-violet mb-2">Clarity</h3>
              <p className="text-gray-600">
                We help you gain insight into your thoughts, emotions, and patterns to make informed decisions.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-16 h-16 bg-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-wellness-violet mb-2">Empowerment</h3>
              <p className="text-gray-600">
                Our goal is to equip you with tools and insights to thrive independently and confidently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
