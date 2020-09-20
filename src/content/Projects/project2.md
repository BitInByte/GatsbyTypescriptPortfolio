---
title: "My Movie DataBase Library"
sourceLink: "https://github.com/BitInByte/MyMovieDataBaseLibrary"
liveLink: "https://bitinbyte.github.io/MyMovieDataBaseLibrary/"
image: "Projects/project2.png"
projectNr: 2
keyword: "projects"
---

A bit bigger project to implement a bunch of new technologies and features provided by **nodeJs**. In terms of layout it's still made without **flexbox** or **grid**, all of the elements, the cards for example are one after another only with **floating positioning** and with the technique of **clearing the context** of the floating elements, with clear:both. Besides that, this project is using multiple versions of **Vanilla Javascript** and not only **ES5** or **ES6**.  
To create a **bundled** final **JS** and **CSS** file I used **webpack** which is a tool provided by **nodeJs** that let us use some loaders like for example the **SASS** loader which helps us to process **SASS** code into **CSS** code and some plugins, like **babel** that I used in this project to convert all of the modern **JS** syntax to more older syntax to get the maximum compatibility in each browser. Besides that, I implemented polyfill as well to convert all of the code from modern syntax, that is impossible to be converted to modern syntax, creating work arounds for that.
To styling it I used the **BEM** convection to create a stylesheet that helps us avoiding some unexpected inherited behaviours provided by the cascade. To create the all **JavaScript** I used the **MVC** structure that stands to **Model** where I organised all classes on this folder, **Views** where I organised all of the **Markup** code to be rendered on the **DOM** and **Controller** where I made the connection between the **Model** and the **Views**.  
Last but not least, I implemented persistent data for the first time to store on the **localStorage** a list of the watched movies that the user can refresh the page that will still have the watched list rendered to the user.
