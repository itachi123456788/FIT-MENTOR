import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Fix relative path issue
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port (change if needed)
    open: true,  // Auto-open browser
    strictPort: true, // Ensure the port is fixed
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Shorter imports (use @/components/Example)
    },
  },
});
