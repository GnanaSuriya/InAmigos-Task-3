import { ShieldCheck, Compass, Zap, ExternalLink } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 border-b border-[#253247] bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Core Transparency Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#60A5FA] tracking-wider uppercase">
              About The Directory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Curated clarity in the fast-moving AI landscape.
            </h2>
            <p className="text-sm sm:text-base text-[#A7B4C8] leading-relaxed">
              AI Toolbox is a curated directory designed to help people discover useful AI tools across different workflows. We organize tools by category and use case so users can compare options and visit their official websites.
            </p>

            {/* Transparency Callout */}
            <div className="p-5 rounded-2xl bg-[#0B1220] border border-[#253247] text-xs text-[#A7B4C8] leading-relaxed space-y-3">
              <div className="flex items-center gap-2 font-bold text-[#F8FAFC] text-sm">
                <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
                <span>Independent Curation & Safe Linking</span>
              </div>
              <p>
                We do not claim official partnerships, sponsorships, or endorsements with tool providers. Every listing directs applicants to its canonical vendor domain without intermediary tracking or fake affiliate links.
              </p>
              <p>
                This is a discovery index, not an AI model itself. It exists to simplify evaluation and point you directly to the tools that match your specific creative or engineering workflows.
              </p>
            </div>
          </div>

          {/* Right Column: Key Principles Grid */}
          <div className="lg:col-span-6 bg-[#0B1220] rounded-3xl border border-[#253247] p-8 shadow-xl shadow-black/30">
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
              Our Core Principles
            </h3>
            <p className="text-xs text-[#718096] mb-6">
              How we evaluate, index, and maintain the AI Toolbox directory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#101827] border border-[#1A2639]">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                  <div className="text-xs font-bold text-[#F8FAFC]">100% Official Links</div>
                </div>
                <div className="text-[11px] text-[#A7B4C8] leading-normal">
                  Strictly verified canonical HTTPS vendor domains with zero search engine redirects.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#101827] border border-[#1A2639]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Compass className="w-4 h-4 text-[#22D3EE]" />
                  <div className="text-xs font-bold text-[#F8FAFC]">Curated Relevance</div>
                </div>
                <div className="text-[11px] text-[#A7B4C8] leading-normal">
                  Carefully vetted benchmark tools across coding, design, audio, video, and research.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#101827] border border-[#1A2639]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <div className="text-xs font-bold text-[#F8FAFC]">Zero Clutter & Ads</div>
                </div>
                <div className="text-[11px] text-[#A7B4C8] leading-normal">
                  No sponsored popup banners, intrusive tracking scripts, or fabricated reviews.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#101827] border border-[#1A2639]">
                <div className="flex items-center gap-2 mb-1.5">
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-bold text-[#F8FAFC]">Local Privacy</div>
                </div>
                <div className="text-[11px] text-[#A7B4C8] leading-normal">
                  Favorites are stored locally in your browser with zero mandatory accounts or tracking.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1A2639] text-[11px] text-[#718096] flex items-center justify-between">
              <span>Updated & Audited Daily</span>
              <span className="font-mono text-blue-400">Open Directory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
