import { useState } from "react";

// Shows YOUR photo from /public/photos. If the file is missing it shows a
// clear "add your photo" placeholder instead — never a stock/fake person.
export default function Photo({ src, alt, className = "", silent = false }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    if (silent) return null;
    return (
      <div className={`flex flex-col items-center justify-center gap-1 bg-char/70 p-4 text-center text-xs text-warm/60 ${className}`}>
        <span>hero.png</span>
        <code className="break-all text-[10px] text-warm/40">public{src}</code>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={className} />;
}
