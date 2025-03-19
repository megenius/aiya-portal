// upgrade-tailwind.js
import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

/**
 * Script to upgrade Tailwind CSS to v4 in a Remix SPA project
 */
async function upgradeTailwind() {
  try {
    console.log('🚀 Starting Tailwind CSS v4 upgrade process...');
    
    // Step 1: Update dependencies
    console.log('📦 Updating packages...');
    execSync('bun remove tailwindcss postcss autoprefixer', { stdio: 'inherit' });
    execSync('bun add tailwindcss@latest postcss@latest autoprefixer@latest', { stdio: 'inherit' });
    
    // Step 2: Generate new Tailwind config file
    console.log('🔧 Generating new tailwind.config.js...');
    execSync('npx tailwindcss init --full', { stdio: 'inherit' });
    
    // Step 3: Update tailwind.config.js with project-specific settings
    console.log('✏️ Customizing tailwind.config.js...');
    
    const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');
    let tailwindConfig = await fs.readFile(tailwindConfigPath, 'utf8');
    
    // Transform config to incorporate existing settings but with v4 structure
    const updatedConfig = `import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';
import preline from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
    "../node_modules/@repo/editor/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    preline,
    typography,
    animate,
  ],
}`;

    await fs.writeFile(tailwindConfigPath, updatedConfig, 'utf8');
    
    // Step 4: Create/update PostCSS config
    console.log('✏️ Updating PostCSS config...');
    const postcssConfigPath = path.join(process.cwd(), 'postcss.config.js');
    const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
    await fs.writeFile(postcssConfigPath, postcssConfig, 'utf8');
    
    // Step 5: Update CSS imports if necessary
    console.log('🎨 Checking CSS imports...');
    const tailwindCssPath = path.join(process.cwd(), 'app', 'styles', 'tailwind.css');
    let tailwindCssExists = false;
    
    try {
      await fs.access(tailwindCssPath);
      tailwindCssExists = true;
    } catch (error) {
      console.log('Creating tailwind.css file...');
    }
    
    if (!tailwindCssExists) {
      const tailwindCssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --novel-highlight-default: #ffffff;
    --novel-highlight-purple: #f6f3f8;
    --novel-highlight-red: #fdebeb;
    --novel-highlight-yellow: #fbf4a2;
    --novel-highlight-blue: #c1ecf9;
    --novel-highlight-green: #acf79f;
    --novel-highlight-orange: #faebdd;
    --novel-highlight-pink: #faf1f5;
    --novel-highlight-gray: #f1f1ef;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;

    --novel-highlight-default: #000000;
    --novel-highlight-purple: #3f2c4b;
    --novel-highlight-red: #5c1a1a;
    --novel-highlight-yellow: #5c4b1a;
    --novel-highlight-blue: #1a3d5c;
    --novel-highlight-green: #1a5c20;
    --novel-highlight-orange: #5c3a1a;
    --novel-highlight-pink: #5c1a3a;
    --novel-highlight-gray: #3a3a3a;
  }
}`;

      await fs.writeFile(tailwindCssPath, tailwindCssContent, 'utf8');
    }
    
    // Step 6: Update package.json scripts if needed
    console.log('📝 Checking package.json scripts...');
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJsonContent = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    
    // Add a tailwind build script if it doesn't exist
    if (!packageJsonContent.scripts['build:tailwind']) {
      packageJsonContent.scripts['build:tailwind'] = 'tailwindcss -i ./app/styles/tailwind.css -o ./app/styles/tailwind.generated.css';
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJsonContent, null, 2), 'utf8');
    }
    
    console.log('✅ Tailwind CSS v4 upgrade complete!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Review the updated tailwind.config.js');
    console.log('2. Run `bun run build:tailwind` to generate the new CSS');
    console.log('3. Make sure to import the generated CSS in your Remix app');
    console.log('4. Check for any styling issues and update class names as needed');
    console.log('');
    console.log('Documentation: https://tailwindcss.com/docs/upgrade-guide');
    
  } catch (error) {
    console.error('❌ Error upgrading Tailwind CSS:', error);
    process.exit(1);
  }
}

upgradeTailwind();