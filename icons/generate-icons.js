const fs = require('fs');
const path = require('path');

// Script to resize Brand Logo PNG to required icon sizes
// Run: npm install sharp (if not already installed)
// Then: node generate-icons.js

async function generateIcons() {
  try {
    const sharp = require('sharp');
    
    const sizes = [16, 32, 48, 128];
    const iconsDir = __dirname;
    const sourceImage = path.join(iconsDir, 'Brand Logo (1).png');
    
    // Check if source image exists
    if (!fs.existsSync(sourceImage)) {
      console.error(`❌ Source image not found: ${sourceImage}`);
      process.exit(1);
    }
    
    console.log(`📸 Resizing ${sourceImage}...\n`);
    
    for (const size of sizes) {
      const outputPath = path.join(iconsDir, `icon${size}.png`);
      
      await sharp(sourceImage)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Created ${outputPath} (${size}x${size})`);
    }
    
    console.log('\n🎉 All icons created successfully!');
    console.log('\nNext steps:');
    console.log('1. Reload the extension in Chrome (chrome://extensions)');
    console.log('2. The new icons should appear in the toolbar and extension page');
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('❌ Sharp library not found.');
      console.log('\nTo install it, run:');
      console.log('  npm install sharp');
      process.exit(1);
    } else {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }
}

generateIcons();
