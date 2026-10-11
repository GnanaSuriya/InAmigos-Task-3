import { ExternalLink, ShieldCheck, HeartHandshake, Compass, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 border-b border-slate-200/60 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Core Transparency Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-purple-700 tracking-wider uppercase">
              About The Discovery Portal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Focused on opportunities that matter.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              This portal organizes internship listings offered by <strong>InAmigos Foundation</strong> into a structured, easy-to-browse discovery interface and directs prospective applicants straight to the authentic application listings on Internshala.
            </p>

            {/* Mandatory Transparency Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Independent Discovery Interface</span>
              </div>
              <p>
                This website is an independently built discovery interface created to help students easily navigate and review InAmigos Foundation internship listings. It is not an official application processor and does not collect candidate resumes or fees.
              </p>
              <p>
                All applications are completed exclusively on <strong>Internshala</strong>, where applicants should confirm real-time deadlines, responsibilities, and terms.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://inamigosfoundation.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-200 shadow-2xs transition-colors"
              >
                <span>Visit Official InAmigos Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://internshala.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-200 shadow-2xs transition-colors"
              >
                <span>Visit Internshala</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Verified Foundation Pillars Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              About InAmigos Foundation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              InAmigos Foundation is a registered Section 8 non-profit organization established in 2020 based in Bilaspur, Chhattisgarh, India. The foundation leads grassroots community programs across education, welfare, and sustainability:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Compass className="w-4 h-4 text-purple-600" />
                  <div className="text-xs font-bold text-slate-900">Project Bachpanshala</div>
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Educational guidance and foundational tutoring support for children.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-purple-600" />
                  <div className="text-xs font-bold text-slate-900">Project Seva</div>
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Distribution of nutrition, clothing, and essential kits to vulnerable families.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="w-4 h-4 text-purple-600" />
                  <div className="text-xs font-bold text-slate-900">Project Udaan</div>
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Vocational training, empowerment drives, and self-reliance initiatives for women.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <div className="text-xs font-bold text-slate-900">Project Vikas</div>
                </div>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Youth skill building, digital literacy, and student internship cohorts.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Section 8 NGO Registration</span>
              <span className="font-mono text-purple-700">Bilaspur, CG, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
