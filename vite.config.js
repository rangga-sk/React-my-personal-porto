import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import detect from 'detect-port'

// https://vite.dev/config/
const preferredPort = 5000;
export default defineConfig(async () => {
  const port = await detect(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port recent ${port} ⚠️`);
  }
  
  return {
    plugins: [react()],
    server: {
      port,
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'window'
        },
        plugins: [
        ],
      }
    }
  }
})
