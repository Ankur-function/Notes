import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this test block for Vitest configuration
  test: {
    globals: true,         // Allows using test(), expect() without importing them
    environment: 'jsdom',  // Simulates a browser environment in Node
    setupFiles: './src/setupTests.js', // Connects custom DOM matchers
  },
})
