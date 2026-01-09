'use client';

import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              Nandan Javagal
            </h3>
            <a
              href="mailto:nandanjavagal444@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>nandanjavagal444@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Nandan-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nandan-javagal-734627252"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Nandan Javagal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
