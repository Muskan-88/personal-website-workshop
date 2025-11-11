# Personal Website Workshop

## Overview

This project was created as part of a web development workshop for the UVIC WECS (Women in Engineering & Computer Science) club to help students build a personal website. Feel free to clone the repository and build your own website!

 ## Website Features

* **🏠 Home Page** - Welcome section with introduction
* **👤 About Page** - Personal story, education, and picture
* **💼 Projects Page** - Show off projects with easy Github integration
* **📞 Contact Page** - Social media links and contact information
* **🧭 Navigation Bar** - Navigation between all pages

Visit the website at: https://muskan-88.github.io/personal-website-workshop/

## 🛠 Built With

* React
* Bootstrap
* React Router
* Github Pages

# Getting Setup

## 🌱 The Basics
Before you begin, make sure you have the following installed on your computer.

* Node.js
* Git
* Github account
* Your favorite IDE

For Windows users, we recommend Git Bash, but other command lines like PowerShell should work fine too!

## ⬇️ Installation & Setup

1. **Clone** or download this repository (we recommend making a folder in any **non-cloud** based locations, like your Desktop or Downloads)
2. **Navigate** to the project folder
3. **Install** dependencies (these downloads require packages)

```
npm install
```
4. Start the development server
```
npm start
```
5. Your browser should open to http://localhost:3000 and you should see the website running

## 🎨 Customization Guide

* We recommend customizing all the pages of the website with your information and these files can be found in *src/components*
* Add your photos to the *public/images/ folder* and update the image paths in the component files
* For things like fonts, color, animations and layouts, look into the *.css files* (files that specify how the web elements look)

## 🌐 Publishing Your Website

Your website can be published online and accessed by a specific link. 

⚠️ This is one of the trickier parts of the workshop, and although the steps on how to do publish are outlined below, we recommend browsing additional resources online before doing so.

1. **Push your code to GitHub:**
```
git add .
git commit -m "My personal website"
git push origin main
```

2. **Install GitHub pages package:**
```
npm install --save-dev gh-pages
```
3. **Add Deployment scripts to package.json:** Add these lines to *package.json*
```
   {
     "homepage": "https://YOUR_USERNAME.github.io/personal-website-template",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
```
4. **Deploy to GitHub pages:**
```
npm run deploy
```
5. **Website is live:** You can find it live at https://YOUR_USERNAME.github.io/NAME_OF_THIS_REPOSITORY

## 🎯 Next Steps & Ideas

Once your website is running, here's some ideas on improving it:

**Content:**
1. Add more detailed project descriptions
2. Add your resume and make it saveable
3. Create a hobbies section with a photo gallery

**Technical:**
1. Implement dark/light mode
2. Add loading animations

**Design:**
1. Create a custom colour scheme
2. Add CSS (style) animations and transitions
3. Add interactive elements
