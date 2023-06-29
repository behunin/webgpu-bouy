# webgpu-bouy

## Install and Run

Type the following in any terminal:

```bash
# Clone the repo
git clone https://github.com/behunin/webgpu-bouy.git

# Go inside the folder
cd webgpu-bouy

# Start installing dependencies
npm install #or yarn

# Run project at localhost:3000
npm run dev #or yarn run dev
```

## Project Layout

```bash
├─ 📂 node_modules/   # Dependencies
│  └─ 📁 ...          # (TypeScript, Vite, etc.)
├─ 📂 src/            # Source files
│  ├─ 📁 shaders      # Folder for shader files
│  └─ 📄 *.ts         # TS files for each demo
├─ 📄 .gitignore      # Ignore certain files in git repo
├─ 📄 index.html      # Entry page
├─ 📄 LICENSE         # MIT
├─ 📄 package.json    # Node package file
├─ 📄 tsconfig.json   # TS configuration file
├─ 📄 vite.config.js  # vite configuration file
└─ 📄 readme.md       # Read Me!
```

# For Windows and MacOS users, Chrome and Edge 114+ come with WebGPU support enabled

## How to enable WebGPU support
For Edge < 113, please open `edge://flags/#enable-unsafe-webgpu`, and enable the flag.

For Chrome < 113, please open `chrome://flags/#enable-unsafe-webgpu`, and enable the flag.

For FireFox Nightly, please open `about:config`, and change `dom.webgpu.enabled` to `true`.

For Chrome on linux, please launch like so `./chrome --enable-features=Vulkan,UseSkiaRenderer` and then open `chrome://flags/#enable-unsafe-webgpu` and enable the flag.
