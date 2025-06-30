import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      emailAddress: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch(
        'https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/NewMorningStarEnquiry02',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 123`,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log('API Response:', result);

      if (!result.error) {
        toast({
          title: 'Email sent successfully!',
          description: result.message,
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: 'Submission Error',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error('Fetch error:', err);
      toast({
        title: 'Network Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-wellness-violet mb-5">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to begin your journey toward mental wellness? We're here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <h3 className="text-xl font-semibold text-wellness-violet mb-5">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-10 h-10 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wellness-violet mb-1 text-sm">Address</h4>
                    <p className="text-gray-700 leading-relaxed text-xs">
                      No.32, Shop No.2 (First Floor),<br />
                      GAN Plaza (Near Titan Showroom),<br />
                      Municipal Colony, Medical College Road,<br />
                      Thanjavur
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="w-10 h-10 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wellness-violet mb-1 text-sm">Phone Numbers</h4>
                    <p className="text-gray-700 text-xs">
                      Personal Mobile: <a href="tel:+919543347345" className="hover:text-wellness-violet transition-colors">95433 47345</a><br />
                      Office Mobile: <a href="tel:+917200175761" className="hover:text-wellness-violet transition-colors">72001 75761</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
                  <div className="w-10 h-10 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wellness-violet mb-1 text-sm">Email</h4>
                    <p className="text-gray-700 text-xs">
                      <a href="mailto:lakshmi281985@gmail.com" className="hover:text-wellness-violet transition-colors">
                        lakshmi281985@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-wellness-light-purple p-5 rounded-2xl" data-aos="fade-up" data-aos-delay="800">
              <h4 className="font-semibold text-wellness-violet mb-3 text-sm">Find Us</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7394087686757!2d79.13682!3d10.78615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55480f4d0f3c1b%3A0x9a6e7e8f5c6d4b2a!2sMedical%20College%20Road%2C%20Thanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-wellness-light-purple p-6 rounded-2xl" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-wellness-violet mb-5">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="500">
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet resize-none text-sm"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <div data-aos="fade-up" data-aos-delay="600">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-wellness-violet hover:bg-wellness-violet/90 text-white py-2 rounded-lg font-semibold transition-all duration-200 text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;