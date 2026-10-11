import { ExternalLink, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-700 flex items-center justify-center text-white font-bold text-xs">
                II
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-base font-heading">
                InAmigos<span className="text-purple-700 font-medium"> Internships</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              An independent discovery and redirection index for internship opportunities offered by InAmigos Foundation and hosted on Internshala.
            </p>
            <div className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} InAmigos Internships Discovery Portal.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('explore-section')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  Explore Internships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works-section')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-purple-700 transition-colors cursor-pointer"
                >
                  About InAmigos Foundation
                </button>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Verified Source Destinations
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://inamigosfoundation.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-700 font-medium transition-colors"
                >
                  <span>InAmigos Foundation Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://internshala.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-700 font-medium transition-colors"
                >
                  <span>Internshala (Official Application Platform)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://internshala.com/internships/inamigos-foundation-internships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-700 text-slate-500 transition-colors"
                >
                  <span>InAmigos Foundation Internshala Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compulsory Legal & Transparency Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-slate-500">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> This website helps users discover internship listings and redirects applicants to Internshala. Verify the current requirements and application status on the original listing. This website is independently maintained and does not represent official operation by InAmigos Foundation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
