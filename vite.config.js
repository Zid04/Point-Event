import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  plugins: [
    react(),
    {
      ...replace({
        preventAssignment: true,
        include: 'node_modules/**',
        values: {
          "'use client'": '',
          '"use client"': ''
        }
      }),
      apply: 'build'
    }
  ]
})
