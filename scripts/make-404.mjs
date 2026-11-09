import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
mkdirSync('dist/assignment3', { recursive: true })
copyFileSync('dist/index.html', 'dist/assignment3/index.html')
writeFileSync('dist/.nojekyll', '')
