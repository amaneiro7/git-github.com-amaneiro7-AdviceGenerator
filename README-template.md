# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./dist/assets/images/challenge.jpg


### Links

- Solution URL: [Add solution URL here](https://github.com/amaneiro7/git-github.com-amaneiro7-AdviceGenerator)
- Live Site URL: [Add live site URL here](https://advicegenereatoram7.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS Preprocesador



### What I learned

To see how you can add code snippets, see below:

```html
    <article id="app">
        <p class="id"></p>
        <p class="advice"></p>
        <img src="">
        <button type="button">           
        </button>
    </article>
```

```js
const getData = async () => {
    try {
        const response = await fetch(API)
        const data = await response.json();
        return data
    } catch (error) {
        console,error('Fetch Error ', error)
    }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



## Author

- Frontend Mentor - [@amaneiro7](https://www.frontendmentor.io/profile/amaneiro7)
- Twitter - [@andruelectronic](https://www.twitter.com/andrueelctronic)
- GitHub - [@amaneiro7](https://www.twitter.com/andrueelctronic)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
