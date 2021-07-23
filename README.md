# Blogr landing page

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP).

## Links 🔗

- Solution URL: [Repository](https://github.com/leonardomeza87/blogr-landing-page)
- Live Site URL: [GitHub Pages](https://leonardomeza87.github.io/blogr-landing-page)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.

### Built with

- Semantic HTML5 markup.
- CSS custom properties.
- Flexbox (I did not use Grid).
- Mobile-first workflow.

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

### More about me

- Frontend Mentor - [@leonardomeza87](https://www.frontendmentor.io/profile/leonardomeza87)
- Twitter - [@leonardomeza87](https://www.twitter.com/leonardomeza87)

## Download ⚙️

This project does not have any dependencies.

To clone:

```
git clone https://github.com/leonardomeza87/blogr-landing-page.git
```
