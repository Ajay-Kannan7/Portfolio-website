# Portfolio-website
This is my personal portfolio website created using HTML,CSS,Javascript and Bootstrap, which is fully responsive. 
This portfolio website is a work in progress and it's utilized the tools given above,
also it has utilized some animations open source CSS and Javascript libraries such as Animate.css and AOS(Animate on scroll) library.

# Design
<img width="946" alt="image" src="https://user-images.githubusercontent.com/78952955/143226551-587a80d4-4a5f-4b77-8a20-ebaeb03fe4e4.png">

## Resources used whilst designing this website
### 1) Animate.css
  Website: https://animate.style/
  This website allows us to use simple a CDN link or import to get startes with using smooth animations for your websites.
  i) You can get started with using this CDN
  ```
  <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  </head>
  ```
  OR
  
  ii) You can either use npm or yarn for installation before importing
  ```
  $ npm install animate.css --save
  ```
  ```
  $ yarn add animate.css
  ```
 You can straightaway import it in your file 
  ```
  import 'animate.css';
  ```
### 2) AOS(Javascript library)
   This library allows us to add stunning on scroll animations to improve user experience.
   
   GitHub repository: https://github.com/michalsnik/aos
   
   You can get started with this by either using
   
   i) CDN straight to your HTML file
   ```
     <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
   ```
   OR
   
   ii) Downloading it either using npm or yarn and then importing it to your file.
   
   for npm: ```npm install --save aos@next```
    
   for yarn: ```yarn add aos@next```
    
   Importing it to your file.
   ```
   import AOS from 'aos';
   import 'aos/dist/aos.css'; // You can also use <link> for styles
     // ..
   AOS.init();
   ```
### 3) iHover library

   This website allows us to make smooth and appealing hover effects. It's powered by the CSS preprocessor SASS
   
   GitHub repository: https://github.com/gudh/ihover
   
   To get started with it, you have to download the src folder by forking it and then linking the file in the head part of
   your HTML file.
   
   ```
    <link href="src/ihover.css" rel="stylesheet">
    <link href="src/ihover.min.css" rel="stylesheet">
   ```
    
### Live site URL
Recent update: https://ajaykannan.netlify.app/
