interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({
  className = '',
  showText = true,
  size = 'md',
}: LogoProps) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-8 h-8';
  const textTitleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const textSubSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Geometric Toolbox + 4-Point AI Sparkle Icon */}
      <div className={`${iconSize} rounded-xl bg-[#0B1220] border border-[#253247] flex items-center justify-center shrink-0 shadow-xs relative overflow-hidden group-hover:border-blue-500 transition-colors`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Toolbox open container */}
          <path
            d="M7 13V22C7 23.1 7.9 24 9 24H23C24.1 24 25 23.1 25 22V13"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Toolbox handle */}
          <path
            d="M12 13V10C12 9.45 12.45 9 13 9H19C19.55 9 20 9.45 20 10V13"
            stroke="#3B82F6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Central 4-point AI sparkle */}
          <path
            d="M16 13.5C16 15.5 14.5 17 12.5 17C14.5 17 16 18.5 16 20.5C16 18.5 17.5 17 19.5 17C17.5 17 16 15.5 16 13.5Z"
            fill="#22D3EE"
          />
          <circle cx="9.5" cy="14" r="1" fill="#60A5FA" />
          <circle cx="22.5" cy="14" r="1" fill="#60A5FA" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-extrabold ${textTitleSize} tracking-tight text-[#F8FAFC] leading-tight font-heading`}>
            AI <span className="text-[#3B82F6]">Toolbox</span>
          </span>
          <span className={`${textSubSize} text-[#718096] font-semibold tracking-wider uppercase leading-none mt-0.5`}>
            Curated Directory
          </span>
        </div>
      )}
    </div>
  );
};
