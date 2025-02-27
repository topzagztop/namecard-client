/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui : {
    themes: [
      {
        namecard: {
          "primary": "#4338CA",        // Blue
          "primary-focus": "#4338CA",  // Darker blue for hover/focus
          "primary-content": "#ffffff", // White text on primary

          "secondary": "#3B82F6",      // Green (for action buttons like sign up)
          "secondary-focus": "#3B82F6", // Darker green for hover
          "secondary-content": "#ffffff",

          "accent": "#818CF8",         // Darker blue (used in links)
          "accent-focus": "#818CF8",
          "accent-content": "#ffffff",

          "neutral": "#65676B",        // Gray (used for secondary text)
          "neutral-focus": "#1C1E21",  // Dark gray (used for primary text)
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",       // White background
          "base-200": "#F0F2F5",       // Light gray background
          "base-300": "#E4E6EB",       // Slightly darker gray
          "base-content": "#050505",   // Almost black text

          "info": "#1877F2",           // Info messages
          "success": "#42B72A",        // Success messages
          "warning": "#F7B928",        // Warning yellow
          "error": "#FA383E",          // Error red

          "--rounded-box": "0.5rem",    // Border radius for cards
          "--rounded-btn": "8px",   // Border radius for buttons
          "--rounded-badge": "1.9rem",  // Border radius for badges
          "--animation-btn": "0.25s",   // Button click animation duration
          "--animation-input": "0.2s",  // Input focus animation duration
          "--btn-text-case": "none",    // Button text transform
          "--btn-focus-scale": "0.98",  // Button focus scale
          "--border-btn": "1px",        // Button border width
          "--tab-border": "2px",        // Tab border width
          "--tab-radius": "0.5rem",     // Tab border radius
        },
      },
    ],
  }
}