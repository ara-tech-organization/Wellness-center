
const TherapeuticApproach = () => {
  const approaches = [
    {
      name: "Cognitive Behavioural Therapy (CBT)",
      description: "Evidence-based approach focusing on changing negative thought patterns and behaviors."
    },
    {
      name: "Rational Emotive Behaviour Therapy (REBT)",
      description: "Helping individuals identify and change irrational beliefs that cause emotional distress."
    },
    {
      name: "Gestalt Therapy",
      description: "Present-focused therapy emphasizing personal responsibility and self-awareness."
    },
    {
      name: "Visual-Kinesthetic Techniques",
      description: "Creative approaches using visual and physical methods to process emotions and experiences."
    }
  ];

  return (
    <section id="approach" className="py-16 md:py-24 bg-gradient-to-br from-wellness-light-purple to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-wellness-violet mb-8">
            Our Therapeutic Approach
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            At Adhi Mind Wellness Centre, counselling sessions may include proven methods like 
            Cognitive Behavioural Therapy (CBT), Rational Emotive Behaviour Therapy (REBT), 
            Gestalt Therapy, Visual-Kinesthetic Techniques, and more—tailored to each individual's needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-wellness-lavender/10"
              >
                <h3 className="text-xl font-playfair font-semibold text-wellness-violet mb-4">
                  {approach.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-wellness-lavender/10">
            <h3 className="text-2xl font-playfair font-semibold text-wellness-violet mb-4">
              Personalized Care
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We understand that every individual is unique. Our therapeutic approach is carefully 
              tailored to meet your specific needs, combining different techniques to create the most 
              effective treatment plan for your personal healing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticApproach;
