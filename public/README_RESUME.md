# Resume Setup Instructions

## To make the Download CV button work:

1. **Add your resume PDF file** to the `public` folder
2. **Name it exactly**: `Yash_Shinde_Resume.pdf`
3. The button will automatically download it when clicked

## Alternative methods:

### Method 1: Direct PDF file (Recommended)
- Place your PDF resume in `public/Yash_Shinde_Resume.pdf`
- The current code will work automatically

### Method 2: Google Drive link
Replace the download link in App.jsx with:
```jsx
<motion.a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 glass border border-accent-purple text-white font-semibold rounded-lg hover:bg-accent-purple/20 transition-all duration-300 flex items-center gap-2"
>
```

### Method 3: Dropbox/OneDrive
Similar to Google Drive, replace with your cloud storage link.

## Current file path expected:
`/public/Yash_Shinde_Resume.pdf`

The download will work once you add your actual resume PDF file to the public folder.