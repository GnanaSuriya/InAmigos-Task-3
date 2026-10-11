import { Search, FileText, ExternalLink, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Browse internships offered by InAmigos Foundation.',
      detail: 'Filter by technical domains, community impact, work duration, or saved shortlist in real time.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Review',
      description: 'Understand the role, eligibility, requirements, and available details.',
      detail: 'Inspect verified responsibilities, prerequisites, duration, and volunteer stipend disclosures.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Apply',
      description: 'Open the original Internshala listing and complete the application there.',
      detail: 'Seamlessly submit your authentic application directly through the host platform with zero middleman forms.',
      icon: ExternalLink,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 border-b border-slate-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold text-purple-700 tracking-wider uppercase mb-2">
            Application Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A transparent 3-step discovery process designed to guide students from exploring opportunities to submitting applications on Internshala.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#FAFAF9] rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between group hover:border-purple-300 transition-all shadow-2xs hover:shadow-xs"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-purple-600">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mb-3 leading-snug">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
