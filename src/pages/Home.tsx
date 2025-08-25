import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
  ArrowRight,
  Star,
  Heart,
  Shield,
  Sparkles,
  Brain,
  Users,
  Target,
  Zap,
  Award,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

import {
  Lightbulb,
  CalendarCheck,
  Compass,
  ThumbsUp,
  Smile,
  FileText,
  RefreshCcw,
  TrendingUp,
} from "lucide-react";

const reasons = [
  { icon: <Brain size={28} />, text: "To manage your stress" },
  { icon: <RefreshCcw size={28} />, text: "To manage your anger" },
  {
    icon: <Users size={28} />,
    text: "To find solutions for your relationship issues",
  },
  { icon: <Target size={28} />, text: "To make better decisions" },
  { icon: <Lightbulb size={28} />, text: "To gain clarity of thought" },
  { icon: <CalendarCheck size={28} />, text: "To become more productive" },
  { icon: <Compass size={28} />, text: "To discover your purpose in life" },
  {
    icon: <ThumbsUp size={28} />,
    text: "To bring peace and harmony into your life",
  },
  { icon: <Heart size={28} />, text: "To learn to love yourself" },
  { icon: <FileText size={28} />, text: "To process your trauma" },
  {
    icon: <RefreshCcw size={28} />,
    text: "To bring positive changes in your behavior",
  },
  { icon: <TrendingUp size={28} />, text: "To set a goal and move towards it" },
  { icon: <RefreshCcw size={28} />, text: "To heal your inner child" },
];

const Home = () => {
  const location = useLocation(); // ✅ valid use

  useEffect(() => {
    if (location.state?.scrollTo === "whyus") {
      const el = document.getElementById("whyus");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, document.title); // optional cleanup
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      {/* -- meta tags starts -- */}
      <Helmet>
        <title>
          Adhi Mind Wellness Centre - Emotional Healing & Mental Wellness in
          Thanjavur
        </title>
        <meta
          name="description"
          content="Adhi Mind Wellness Centre in Thanjavur offers counselling, life coaching, and mental wellness services for stress, trauma, personal growth, and emotional healing."
        />
        <meta
          name="keywords"
          content="Adhi Mind Wellness Centre, counselling in Thanjavur, life coaching, stress management, trauma healing, mental wellness Tamil Nadu"
        />
        <meta name="author" content="Adhi Mind Wellness Centre" />

        {/* Open Graph (for social media) */}
        <meta
          property="og:title"
          content="Adhi Mind Wellness Centre - Transform Within, Thrive Beyond"
        />
        <meta
          property="og:description"
          content="Discover counselling, life coaching, and emotional healing at Adhi Mind Wellness Centre in Thanjavur."
        />
        <meta
          property="og:image"
          content="https://adhimindwellnesscentre.com/lovable-uploads/18.jpeg"
        />
        <meta property="og:url" content="https://adhimindwellnesscentre.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adhi Mind Wellness Centre - Mental Wellness in Thanjavur"
        />
        <meta
          name="twitter:description"
          content="Counselling, life coaching & emotional healing in Thanjavur."
        />
        <meta
          name="twitter:image"
          content="https://adhimindwellnesscentre.com/lovable-uploads/18.jpeg"
        />
      </Helmet>
      {/*-- meta tags ends -- */}

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-wellness-violet/80 via-wellness-violet/60 to-wellness-lavender/40"></div>
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-3 h-3 md:w-4 md:h-4 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center floating-animation border-4 border-white/30">
              {/* <img
                src="/lovable-uploads/c7ed723a-aa7b-4557-81e4-e192a1dfb969.png"
                alt="Adhi Mind Wellness Centre Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              /> */}
            </div>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-shadow leading-tight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Transform Within.
            <br />
            <span className="text-wellness-sparkle bg-gradient-to-r from-wellness-sparkle to-white bg-clip-text text-transparent">
              Thrive Beyond.
            </span>
          </h1>

          <p
            className="text-xl md:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            A sanctuary for emotional healing, mental wellness, and personal
            transformation. Discover your inner strength and embrace life with
            renewed purpose and joy.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-wellness-violet hover:bg-white/90 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book a Session
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-wellness-sparkle rounded-full floating-animation opacity-70"
            data-aos="fade-in"
            data-aos-delay="1000"
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full floating-animation opacity-80"
            data-aos="fade-in"
            data-aos-delay="1200"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-wellness-sparkle rounded-full floating-animation opacity-60"
            data-aos="fade-in"
            data-aos-delay="1400"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-wellness-light-purple to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-down">
              <h2 className="text-4xl md:text-5xl font-bold text-wellness-violet mb-6">
                Welcome to Your Journey of Healing
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Adhi Mind Wellness Centre, we believe every individual
                deserves a life filled with purpose, peace, and authentic
                happiness. Our holistic approach combines proven therapeutic
                methods with compassionate care to guide you toward emotional
                freedom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow shadow-lg">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-violet mb-4">
                  Compassionate Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every session is guided by empathy, understanding, and genuine
                  care for your wellbeing and personal growth journey.
                </p>
              </div>

              <div
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-violet mb-4">
                  Safe Environment
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A confidential, non-judgmental space where you can explore
                  your thoughts and feelings freely without fear.
                </p>
              </div>

              <div
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow shadow-lg">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-violet mb-4">
                  Personal Growth
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Unlock your potential and discover the tools you need to
                  thrive in all areas of life with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-violet mb-8">
              Comprehensive Mental Wellness Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual counselling to specialized coaching, we offer a
              range of services designed to meet you wherever you are in your
              healing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div
              className="bg-gradient-to-br from-wellness-light-purple to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-wellness-lavender/20"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-wellness-violet to-wellness-lavender rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-wellness-violet">
                  Counselling Services
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Individual & Relationship Counselling
                </li>
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Mental Health Support & Guidance
                </li>
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Trauma & Grief Processing
                </li>
              </ul>
              <Link to="/services" className="inline-block">
                <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white text-lg px-4 py-3 rounded-full">
                  View More <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div
              className="bg-gradient-to-br from-wellness-light-purple to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-wellness-lavender/20"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-wellness-violet to-wellness-lavender rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-wellness-violet">
                  Life Coaching
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Women Empowerment Coaching
                </li>
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Mindset & Personal Growth
                </li>
                <li className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-wellness-violet mr-4 flex-shrink-0" />
                  Goal Setting & Achievement Coaching
                </li>
              </ul>
              <Link to="/services" className="inline-block">
                <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white text-lg px-8 py-3 rounded-full">
                  View More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="whyus"
        className="py-12 px-4 bg-gradient-to-b from-white to-wellness-light-purple dark:from-gray-900 dark:to-black"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-wellness-violet mb-12"
            data-aos="fade-up"
          >
            Why Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition duration-300"
              >
                <div className="text-wellness-violet">{item.icon}</div>
                <p className="text-left text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-wellness-violet to-wellness-lavender">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Making a Difference Every Day
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our commitment to excellence and compassionate care has helped
                countless individuals on their journey to wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  1+
                </h3>
                <p className="text-white/90 text-lg">Years of Experience</p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  100+
                </h3>
                <p className="text-white/90 text-lg">Lives Transformed</p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </h3>
                <p className="text-white/90 text-lg">Support Available</p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  1
                </h3>
                <p className="text-white/90 text-lg">Convenient Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-wellness-light-purple via-white to-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12" data-aos="zoom-in">
              <h2 className="text-4xl md:text-5xl font-bold text-wellness-violet mb-8">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                Take the first step toward emotional clarity and personal
                empowerment. Our compassionate team is here to support you every
                step of the way.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-4 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Consultation
                  <Phone className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Link to="/approach">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-wellness-violet text-wellness-violet hover:bg-wellness-violet hover:text-white px-4 py-4 rounded-full font-bold text-xl transition-all duration-300"
                >
                  Learn About Our Approach
                  <Zap className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>

            <div
              className="p-10 bg-white rounded-3xl border-2 border-wellness-lavender/30 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <blockquote className="text-xl text-wellness-violet font-medium italic leading-relaxed">
                "Your mental wellness journey is unique to you. We're here to
                provide the guidance, support, and tools you need to create
                lasting positive change in your life."
              </blockquote>
              <div className="mt-6">
                <div className="w-12 h-12 bg-wellness-violet rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
