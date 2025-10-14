# Resume Download Setup Guide

## Option 1: Local PDF File (Recommended for production)

1. **Create/Export your resume as PDF**
2. **Name it exactly**: `Yash_Shinde_Resume.pdf`
3. **Place it in the `public` folder** of your project
4. **Update the button code** in `src/App.jsx`:

```jsx
<motion.a
  href="/Yash_Shinde_Resume.pdf"
  download="Yash_Shinde_Resume.pdf"
  className="px-8 py-4 glass border border-accent-purple text-white font-semibold rounded-lg hover:bg-accent-purple/20 transition-all duration-300 flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download size={20} />
  Download Resume
</motion.a>
```

## Option 2: Google Drive Link

1. **Upload your resume to Google Drive**
2. **Make it publicly viewable**
3. **Get the shareable link**
4. **Update the button code**:

```jsx
<motion.a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 glass border border-accent-purple text-white font-semibold rounded-lg hover:bg-accent-purple/20 transition-all duration-300 flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download size={20} />
  View Resume
</motion.a>
```

## Option 3: Direct Download from Google Drive

For direct download, use this format:
```jsx
href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
```

## Option 4: GitHub Repository

If you store your resume in a GitHub repo:
```jsx
href="https://github.com/YashShinde6-/resume/raw/main/Yash_Shinde_Resume.pdf"
```

## Current Status

The button currently shows an alert with instructions. Once you add your resume file to the `public` folder, replace the button code with Option 1 above.

## File Structure
```
public/
├── Yash_Shinde_Resume.pdf  ← Add your resume here
└── README_RESUME.md
```