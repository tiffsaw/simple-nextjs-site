import React from 'react';

export default function MenuBars({ className, ...other }) {
  return (
    <svg
      className={`${className || ''} icon w-menu-bars`}
      viewBox="0 0 22 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...other}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-315.000000, -23.000000)" fill="currentColor">
          <g>
            <path d="M336.666667,35.75 C336.666667,35.3398438 336.257595,35 335.763889,35 L315.902778,35 C315.409071,35 315,35.3398438 315,35.75 L315,37.25 C315,37.6601563 315.409071,38 315.902778,38 L335.763889,38 C336.257595,38 336.666667,37.6601563 336.666667,37.25 L336.666667,35.75 Z M336.666667,29.75 C336.666667,29.3398438 336.257595,29 335.763889,29 L315.902778,29 C315.409071,29 315,29.3398438 315,29.75 L315,31.25 C315,31.6601562 315.409071,32 315.902778,32 L335.763889,32 C336.257595,32 336.666667,31.6601562 336.666667,31.25 L336.666667,29.75 Z M336.666667,23.75 C336.666667,23.3398438 336.257595,23 335.763889,23 L315.902778,23 C315.409071,23 315,23.3398438 315,23.75 L315,25.25 C315,25.6601562 315.409071,26 315.902778,26 L335.763889,26 C336.257595,26 336.666667,25.6601562 336.666667,25.25 L336.666667,23.75 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
