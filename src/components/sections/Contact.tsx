import React, { useState, FormEvent } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_324bxke';
const TEMPLATE_ID = 'template_0p1gtbx';
const PUBLIC_KEY = 'DFy3gCks6OTP9HPea'; // from EmailJS dashboard

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactDetails = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email',
      value: 'veerlapavani754@gmail.com',
      link: 'mailto:veerlapavani754@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone',
      value: '+91 8688020309',
      link: 'tel:+918688020309',
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Location',
      value: 'Hyderabad,India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <h2 className="text-center mb-8 text-foreground">
          <span className="inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </span>
        </h2>
        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-foreground/5 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="shrink-0 mr-4 bg-primary/10 p-3 rounded-lg">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">{detail.title}</h4>
                      {detail.link ? (
                        <a 
                          href={detail.link} 
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white dark:bg-foreground/5 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-3 text-green-600 text-sm text-center">
                      Your message has been sent successfully!
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-3 text-red-600 text-sm text-center">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
