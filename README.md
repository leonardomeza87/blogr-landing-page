# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [GitHub Repository](https://github.com/leonardomeza87/frontend-mentor-challenges/tree/main/blogr)
- Live Site URL: [GitHub Page](https://leonardomeza87.github.io/frontend-mentor-challenges/blogr/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox (I did not use Grid)
- Mobile-first workflow

### What I learned

I learned that making a full page takes more time than I expected, but with the layout in sight, it can be done easily.

One of the things that perplexed me the most was that, in the _desktop view_ of the Chrome browser for Android, the texts on the page increased in size for no apparent reason, after trying things without achieving results, I resort to StackOverflow and find the solution:

```css
.text-container {
  max-height: 999999px; /* Fix the issue in Chrome Mobile with desktop view */
}
```

### Continued development

Something I want to improve soon is my CSS layout speed, and the ability to create correct class names.

### Useful resources

- [Font size display issue on Google Chrome for Android](https://stackoverflow.com/questions/59095113/font-size-display-issue-on-google-chrome-for-android) - This helped me solve my desktop view issue in Chrome for Android.

## Author

- Website - [XNOR](https://www.xnor.tk/)
- Frontend Mentor - [@leonardomeza87](https://www.frontendmentor.io/profile/leonardomeza87)
- Twitter - [@leonardomeza87](https://twitter.com/leonardomeza87)
