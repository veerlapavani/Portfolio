import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  socialLinks: { name: string; url: string; icon: string }[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'mail':
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-foreground/70 text-sm">Made with</span>
            <Heart size={14} className="text-error" fill="currentColor" />
            <span className="text-foreground/70 text-sm">using React & TailwindCSS</span>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;