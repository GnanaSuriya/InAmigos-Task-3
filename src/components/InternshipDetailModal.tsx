import { useEffect } from 'react';
import { 
  X, 
  ArrowUpRight, 
  Bookmark, 
  Share2, 
  CheckCircle, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Calendar, 
  ShieldAlert, 
  CheckCircle2 
} from 'lucide-react';
import type { Internship } from '../types/internship';

interface InternshipDetailModalProps {
  internship: Internship | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onShare: (internship: Internship) => void;
}

export const InternshipDetailModal = ({
  internship,
  onClose,
  isSaved,
  onToggleSave,
  onShare,
}: InternshipDetailModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (internship) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [internship, onClose]);

  if (!internship) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
        {/* Header Bar */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 bg-[#FAFAF9]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-purple-100 text-purple-800">
                {internship.category}
              </span>
              <span className="inline-flex items-center text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                {internship.status}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {internship.title}
            </h2>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              {internship.organization} • Verified Internshala Opportunity
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onShare(internship)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Share listing"
              aria-label="Share listing"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleSave(internship.id)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isSaved
                  ? 'text-purple-700 bg-purple-100 hover:bg-purple-200'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200/60'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save opportunity'}
              aria-label="Toggle bookmark"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-purple-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Key Facts Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs">
            <div>
              <div className="text-slate-400 font-medium mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Work Mode</span>
              </div>
              <div className="font-semibold text-slate-900">{internship.workMode}</div>
            </div>

            <div>
              <div className="text-slate-400 font-medium mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration</span>
              </div>
              <div className="font-semibold text-slate-900">{internship.duration}</div>
            </div>

            <div>
              <div className="text-slate-400 font-medium mb-1 flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>Stipend</span>
              </div>
              <div className="font-semibold text-slate-900">{internship.stipend || 'Unpaid (Volunteer)'}</div>
            </div>

            <div>
              <div className="text-slate-400 font-medium mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Deadline</span>
              </div>
              <div className="font-semibold text-slate-900">{internship.deadline || 'Not specified in the source listing'}</div>
            </div>
          </div>

          {/* Role Overview */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Role Overview
            </h3>
            <p className="leading-relaxed text-slate-600">
              {internship.overview}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2">
              {internship.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 leading-normal">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Requirements */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Eligibility
            </h3>
            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-purple-950 leading-relaxed text-xs">
              {internship.eligibility}
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Skills Required
            </h3>
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Source Verification Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex flex-col gap-1.5">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sourcing & Verification Metadata</span>
            </div>
            <div>
              Platform: <strong className="text-slate-800">{internship.sourcePlatform}</strong> • 
              Organization: <strong className="text-slate-800">InAmigos Foundation</strong>
            </div>
            <div className="text-[11px] text-slate-500">
              Last verified against original listing: {internship.lastVerifiedAt}
            </div>
          </div>

          {/* Mandatory External Redirection Warning */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold">Important Notice:</span> Applications are completed on Internshala. You will leave this website when you apply. Verify all current requirements, deliverables, and availability on the official Internshala application form.
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-200/80 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Redirecting to official <strong className="text-slate-700">Internshala</strong> listing
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>

            {internship.applicationUrl ? (
              <a
                href={internship.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>Apply on Internshala</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-semibold cursor-not-allowed border border-slate-200"
              >
                Application link unavailable
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
