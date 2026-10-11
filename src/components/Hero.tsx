import { ArrowDown, Compass, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
  totalRolesCount: number;
}

export const Hero = ({
  onExploreClick,
  onHowItWorksClick,
  totalRolesCount,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/60 bg-gradient-to-b from-[#FAFAF9] via-white to-[#FAFAF9]">
      {/* Decorative ambient background subtle lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-800 text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>YOUR NEXT OPPORTUNITY STARTS HERE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Find your place at <span className="text-purple-700">InAmigos.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Explore internship opportunities at InAmigos Foundation, discover roles that match your interests, and apply through Internshala.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all cursor-pointer group"
              >
                <span>Explore Internships</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onHowItWorksClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Restrained Trust Statement */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>One destination for InAmigos Foundation internship opportunities.</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{totalRolesCount} verified active tracks</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual (Geometric Abstract Illustration of Growth & Learning) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
                    InAmigos Learning Pathways
                  </span>
                </div>
                <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium border border-purple-100">
                  Virtual 2-Week Cohorts
                </span>
              </div>

              {/* Geometric Step Illustration */}
              <div className="space-y-4">
                {/* Step 1 Graphic Card */}
                <div className="p-3.5 rounded-xl bg-[#FAFAF9] border border-slate-200/70 flex items-center justify-between hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">AI & Engineering Tracks</div>
                      <div className="text-[11px] text-slate-500">Machine Learning, Analytics & Prompting</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                    Active
                  </span>
                </div>

                {/* Step 2 Graphic Card */}
                <div className="p-3.5 rounded-xl bg-[#FAFAF9] border border-slate-200/70 flex items-center justify-between hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Grassroots Social Impact</div>
                      <div className="text-[11px] text-slate-500">Bachpanshala, Udaan & Seva Drives</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200">
                    Enrolling
                  </span>
                </div>

                {/* Step 3 Graphic Card */}
                <div className="p-3.5 rounded-xl bg-[#FAFAF9] border border-slate-200/70 flex items-center justify-between hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Creative & Communications</div>
                      <div className="text-[11px] text-slate-500">Content, Social Media & Media Design</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Open
                  </span>
                </div>
              </div>

              {/* Informational Footer in Card */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified against Internshala listings
                </span>
                <span className="font-medium text-purple-700">Remote & WFH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
