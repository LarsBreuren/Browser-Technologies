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
- The usabel layer is just the basics, giving the shirt a funny text and a background and text color. This works on the current browsers starting from IE11. There is also no JS involved since everything is server side rendered. Saving and requesting a shirt works as well.
- The usable layer i improved with live updating. this means when you pick a color or type a text, the shirt on the right will allready show you what it's going to look like. This is live, so typing something immediately changes the shirt. Another thing that i did was when you request a saved shirt, the form is filled in as the way you left it. So the colors and text you choose are ready for editing. This only works when JS is enabled however the website won't break if you can't run JS.
-The pleasurable layer is still under construction, i had 2 things in mind. One is a drag and drop for colors or logo's on the shirt. To make it more natural instead of having a form. The other was when you hit the create shirt button the page of editing would fly in instead of a normal page load. Still haven't figured out how to do that with server side. 

![wireflow](https://user-images.githubusercontent.com/43336468/78012741-b8e25600-7345-11ea-942b-957eef59e26b.jpg)





