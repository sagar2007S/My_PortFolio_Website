// src/components/Socials.jsx
import React from "react";

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.19-3.35-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0012 2z"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  );
}

export default function Socials() {
  console.log("✅ Socials rendered"); // check DevTools
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="flex items-center gap-8">
        <a
          href="https://github.com/sagar2007S"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white/90 hover:text-neon-pink transition"
          title="GitHub"
        >
          <IconGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-baryekar-a3a839339/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/90 hover:text-neon-pink transition"
          title="LinkedIn"
        >
          <IconLinkedIn className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
