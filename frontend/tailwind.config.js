/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
                extend: {
                        colors: {
                                // ===========================================
                                // PHYSIOLOGY-BASED MEDICAL COLOR SYSTEM
                                // ===========================================

                                // Primary Backgrounds (Nervous System Calm)
                                'neo-bg': '#020617',           // Near-black blue
                                'neo-bg-card': '#0F172A',      // Elevated card background
                                'neo-bg-hover': '#1E293B',     // Hover state

                                // Text Colors (High Readability)
                                'neo-text': '#E5E7EB',         // Soft white
                                'neo-text-muted': '#94A3B8',   // Secondary info
                                'neo-text-dim': '#64748B',     // Tertiary info

                                // Primary Colors (Trust & Intelligence)
                                'neo-primary': '#2563EB',      // Primary blue
                                'neo-cyan': '#38BDF8',         // Accent cyan

                                // Status Colors (Brain-learned signals)
                                'neo-success': '#22C55E',      // Healthy / Low risk
                                'neo-warning': '#FACC15',      // Moderate risk
                                'neo-danger': '#EF4444',       // High risk

                                // Legacy support (will be phased out)
                                'primary': '#2563EB',
                                'secondary': '#38BDF8',
                        },
                        fontFamily: {
                                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                        },
                        borderRadius: {
                                'neo': '12px',
                                'neo-lg': '16px',
                                'neo-xl': '20px',
                        },
                        boxShadow: {
                                'neo': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                                'neo-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
                                'neo-glow': '0 0 20px rgba(37, 99, 235, 0.3)',
                                'neo-cyan-glow': '0 0 20px rgba(56, 189, 248, 0.3)',
                        },
                },
        },
        plugins: [],
}