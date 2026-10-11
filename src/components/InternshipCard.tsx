import { Bookmark, Share2, ArrowUpRight, Clock, MapPin, IndianRupee } from 'lucide-react';
import type { Internship } from '../types/internship';

interface InternshipCardProps {
  internship: Internship;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetails: (internship: Internship) => void;
  onShare: (internship: Internship) => void;
}

export const InternshipCard = ({
  internship,
  isSaved,
  onToggleSave,
  onOpenDetails,
  onShare,
}: InternshipCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between card-hover-subtle relative group shadow-2xs">
      {/* Top Meta: Category badge & Actions */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-100">
              {internship.category}
            </span>
            <span className="inline-flex items-center text-[11px] font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
              {internship.status}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Share action */}
            <button
              onClick={() => onShare(internship)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={`Share ${internship.title}`}
              title="Share listing link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Bookmark action */}
            <button
              onClick={() => onToggleSave(internship.id)}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isSaved
                  ? 'text-purple-600 hover:text-purple-700 bg-purple-50'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              aria-label={isSaved ? `Remove ${internship.title} from saved` : `Save ${internship.title}`}
              title={isSaved ? 'Remove from saved' : 'Save opportunity'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-purple-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Organization */}
        <h3
          onClick={() => onOpenDetails(internship)}
          className="text-lg font-bold text-slate-900 group-hover:text-purple-800 transition-colors mb-1 cursor-pointer leading-snug"
        >
          {internship.title}
        </h3>

        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
          {internship.organization}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {internship.shortDescription}
        </p>

        {/* Core Attributes Pills */}
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-600 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{internship.workMode}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <IndianRupee className="w-3.5 h-3.5 text-slate-400" />
            <span>{internship.stipend || 'Unpaid'}</span>
          </div>
        </div>

        {/* Required Skills Chips */}
        <div className="mb-6">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Skills
          </div>
          <div className="flex flex-wrap gap-1.5">
            {internship.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions & Source indicator */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            Source: <strong className="font-semibold text-slate-600">{internship.sourcePlatform}</strong>
          </span>
          {internship.deadline && (
            <span>{internship.deadline}</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* View Details Button */}
          <button
            onClick={() => onOpenDetails(internship)}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold text-center transition-colors cursor-pointer"
          >
            View Details
          </button>

          {/* Apply Now Button or Disabled link */}
          {internship.applicationUrl ? (
            <a
              href={internship.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-1 shadow-2xs hover:shadow transition-all cursor-pointer"
              aria-label={`Apply for ${internship.title} on Internshala (opens in new tab)`}
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          ) : (
            <button
              disabled
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 text-slate-400 text-[11px] font-medium text-center cursor-not-allowed border border-slate-200/60"
              title="Application link is currently unavailable for this cohort"
            >
              Link unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
