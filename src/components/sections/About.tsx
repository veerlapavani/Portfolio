import React from 'react';
import iconImage from '../layout/icon-image.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-16 text-foreground">
            <span className="inline-block relative">
              About Me
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
                  <img 
                    src= {iconImage}
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-foreground py-2 px-4 rounded-lg font-medium shadow-lg">
                  Full Stack Developer
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl mb-4 font-bold text-foreground">
                Who am I?
              </h3>
              <p className="mb-4 text-foreground/80">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                With over 1 years of experience, I specialize in creating responsive, user-friendly 
                applications that solve real-world problems.
              </p>
              <p className="mb-6 text-foreground/80">
                My journey in software development began when I built my first website at 14. 
                Since then, I've worked with various technologies and frameworks, always 
                focused on writing clean, maintainable code and creating exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-primary font-bold mr-2">Name:</span> 
                  <span>Pavani Veerla</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary font-bold mr-2">Email:</span> 
                  <span>veerlapavani754@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary font-bold mr-2">From:</span> 
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary font-bold mr-2">Freelance:</span> 
                  <span>Available</span>
                </div>
              </div>
              
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;