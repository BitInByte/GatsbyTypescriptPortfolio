---
title: "My Weather App With City Clock"
sourceLink: "https://github.com/BitInByte/WeatherClockApplication"
liveLink: "https://weatherapp-758e4.web.app/"
image: "Projects/project3.png"
projectNr: 3
keyword: "projects"
---

In conversation with one of my friend from another country, I came up with one idea of creating a weather app that displays a city clock to realise if I could call to him or not. The project was really challenging, I get a lot of stuck times, specially with the intervals to create the clock. The most challenging thing was in how to delete the intervals of the clocks when the element was not on the **DOM**. Some of the elements, I just stored in one variable the reference of the interval, and then, everytime that the interval got fired up again, I just added a check if the element was on the **DOM** or not and if was not on the **DOM**, just deleted it. I even created an **array** on the **state**, and beacuse this type is a reference type, I just stored each interval on the array and when the use changed the page, I just deleted every element on the **artay** that contains each interval on the **DOM**. The **CSS** was built with the help of **SASS** processor and **BEM** convention and was built without **flexbox** or **grid**.
