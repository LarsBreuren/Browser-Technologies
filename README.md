## Table of contents use case
- [Code](#the-code)
- [Sketches](#sketches)
- [Testing PWA](#testing-the-progressive-enhancement)
- [Accessibility](#accessibility)
- [Conclusion](#conclusion)

# Opdracht 1.2 Browser technologies
Tested my project website from OBA -> https://github.com/LarsBreuren/ObA-project-week-1

Tested features:
- Searching for 2 titles
- Remove books
- Check details of a book


### Nexus 5 - android 6.0.1 chrome 75
All functions work fine, layout is still okay. But the performance is poor because of the background JS.

### Lenovo legion y540 - Firefox 73
All functions are fine, no lagg or crashes. Layout is good and performance is good.

### Ipod touch - IOS 6.1.6 Safari 8536.25 
Website crashes about 10 seconds after loading finished, no interaction possible.

### Ipad mini - IOS 9.3.5 Safari 9.0
Fetch does not work, so interaction is not possible. Layout does load and so does the background that is rendered with JS.

### Screenreader
The website is not optimized for a screen reader because it can't read the book titles. Inside the a tag there is a h2 tag that contains the title. An easy fix would be to insert the title into the a directly. Adding an alt text to the book cover images would help as well.


# Opdracht 2 Use case 2 | Shirts ontwerpen
The user wants to create a T-shirt with his/hers (most likely) funny texts. Next to just text maybe some color or other design options to make the T-shirt more personal. There has to be an option to save the T-shirt so that the user can come back later and continiu their work. When the work is done the user wants to print his/hers T-shirt for further use.

## The code
I used NodeJS and EJS for this case.
At the homepage there will be a form with some options you can choose, with that given input the website wil generate a cool looking T-shirt for you! After hitting submit the shirt is saved to the server with a unique ID so you can later on continiu working on it. The saving is done with the npm package file system to read and write to .json files.


## To install
1. Clone repository
2. open terminal on master folder
3. Run `npm install`
4. Give the command `npm start`
5. Navigate to localhost:3000




## Sketches
This is the first sketch, basic functions are there but the layout is quite basic.
![18-03-2020-11 50 03](https://user-images.githubusercontent.com/43336468/76953364-e0c9c680-690e-11ea-9392-df6b7143f6cb.jpg)

The second sketch. Some more options and an improved layout. used a header to make navigating a little easier when you switch pages.
In this wireflow there are some layers are in terms of functional/usable and pleasurable.
- The functional layer is just the basics, giving the shirt a funny text and a background and text color. This works on the current browsers starting from IE11. There is also no JS involved since everything is server side rendered. Saving and requesting a shirt works as well.
- The usable layer is enhanched with live updating. this means when you pick a color or type a text, the shirt on the right will allready show you what it's going to look like. This is live, so typing something immediately changes the shirt. Another thing that i did was when you request a saved shirt, the form is filled in as the way you left it. So the colors and text you choose are ready for editing. This only works when JS is enabled however the website won't break if you can't run JS.
- The pleasurable layer is still under construction, i had 2 things in mind. One is a drag and drop for colors or logo's on the shirt. To make it more natural instead of having a form. The other was when you hit the create shirt button the page of editing would fly in instead of a normal page load. Still haven't figured out how to do that with server side. 

![wireflow](https://user-images.githubusercontent.com/43336468/78012741-b8e25600-7345-11ea-942b-957eef59e26b.jpg)


## Testing | Browser technologies & accessibility

## Testing the progressive enhancement
The website works without JS & CSS, looks terrible but it works. The core functionalities like editing and requesting an existing shirt are fine. This is what it looks with with no JS & CSS: 
![NojsCss](https://user-images.githubusercontent.com/43336468/78014769-b59c9980-7348-11ea-9a9b-5e7cf4ae7d4b.png)
The only thing that is a bit off is the shirt text not standing in the shirt but beneath it because there is no CSS, thats it.
Also since there is no client side JS the live updating is not working but not breaking the website.

Now if we turn CSS on this is what we get:
![layout](https://user-images.githubusercontent.com/43336468/78015220-673bca80-7349-11ea-9be3-dde5a2130980.png)

Looks better, but no difference in functionalities. However way more usable.
If we were to turn on JS everything we edit in the form directly changes the shirt on the right. And in my opinion makes the app way more usable. But with or without JS the outcome stays the same.

The taggs and css used is supported by all the current browsers (IE11, edge 80, chrome 80, safari 13, firefox, 74. opera 66, sasmung internet 11.1).
I didnt have to use feature detection for the things i needed so i just looked up a tag on caniuse.com if i noticed a browser acted wierd using that tag. Since flexbox is supported in IE11 i didnt have to make a fallback with float or anything. If i were to use CSS grid that would've been required.
But the wierd thing is that IE11 supports flexbox but not certain properties of flexbox. For example `justify-content: space-evenly` doesn't work. I use that to nicely align my form and shirt so in IE11 it doesn't do that. This is how it looks:
![Screenshot_1](https://user-images.githubusercontent.com/43336468/78016519-378dc200-734b-11ea-952e-643458f79a80.png)

Not game breaking and it's only on IE11 and it's still responsive so i think it's fine.

## accessibility
I've tested the website on the main browsers (for wich ones look to the paragraph above) and the website works with both keyboard and mouse or just a keyboard. If i were to implement the drag and drop function to color the shirt i had to come up with a fallback for the keyboard. But at the moment everything works fine as it is. The taggs are used correctly and so the user can just use the keyboards command to edit the shirt, all the functions are available.

The website runs just fine on all kinds of devices, the core functions have been tested on:
- Samsung s9+ running android 10 with the chrome 80 browser.
- Ipad mini 4 running IOS 12.31 with Safari 12.1.1
- Lenovo y540 laptop running Firefox 74.0 on windows 10.
- Lenovo y540 laptop running IE11.0 on windows 10.
- Lenovo y540 laptop running Chrome 80 on windows 10.
- Lenovo y540 laptop running Edge 18 on windows 10.
- Lenovo y540 laptop running Opera 67.0 on windows 10.

If you want to you can print your shirt and the details about it, this works with JS. With CSS i used the @media print to hide some navigation and buttons to make the print look better. This is how it looks:
![printing](https://user-images.githubusercontent.com/43336468/78027950-855ff580-735e-11ea-80fb-ac81e7dfc22d.png)


# Conclusion
I knew you had to keep in mind that certain browsers are a little odd when it comes to supporting new features but i've learned quite some new features. I had no idea feature detection was a thing, very cool if you use advanched features like geolocation.
I was also suprised that IE11 supported flexbox but not some of it's properties, not gamebreaking but your layout looks diffrent than in other browsers. Overal a cool experience to learn about diffrent browsers and how to work. I thinks it's quite valuable to know about those features.






