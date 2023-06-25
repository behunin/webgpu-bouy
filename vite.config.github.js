const { defineConfig } = require('vite')
const { resolve } = require('path')

const input = {
    main: resolve(__dirname, 'index.html')
}
module.exports = defineConfig({
    base: '/webgpu-bouy/',
    build: {
        rollupOptions: {
            input
        }
    }
})