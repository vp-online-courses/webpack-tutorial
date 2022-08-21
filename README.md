## Overview

This repository was designed to help you with learning Webpack 5.

This repository is a supplementary resource to the course ["Webpack 5: The Complete Guide For Beginners"](https://www.udemy.com/course/webpack-from-beginner-to-advanced/?referralCode=6348A0DAFB30D091F7F3).

If you want to get a discount (up to 70%) on one of my other courses, feel free to send me an email at vp.online.courses@gmail.com, and I will try to get the best offer for you.

## Clone This Repository

1. ```git clone https://github.com/vp-online-courses/webpack-tutorial.git```
1. ```cd webpack-tutorial```

## Branches

This repository consists of many branches, which correspond to different lessons of the course.
Every lesson that requires code changes has 2 branches associated with it:

1. First branch points to the beginning of the lesson.
1. Second branch points to the end of the lesson.

Let's take as an example *"Minification Of The Resulting JavaScript Bundles"* lesson.
There are 2 branches associated with it:
1. *minification-of-the-resulting-javascript-bundles-begin*. You can check out this branch right before starting the lesson and repeat all the steps from the lesson while watching it.
2. *minification-of-the-resulting-javascript-bundles-end*. If you want to see how the application looks like at the end of this lesson, you can check out this branch.

Don't forget to run ```npm install``` when switching branches.
- ```git checkout minification-of-the-resulting-javascript-bundles-begin```
- ```npm install```

There are 2 special branches that you may want to check out:
- single-page-application. Contains webpack configuration for a Single Page Application.
- multiple-page-application. Contains webpack configuration for a Multiple Page Application.


#### Please don't use the master branch

There are separate git branches in this repository related to each Lesson. They are usually named the same as the Lessons are named. For example, if you are watching Lesson 33 "How To Generate Multiple HTML Files", there are 2 branches related to this lesson:

- how-to-generate-multiple-html-files-begin
- how-to-generate-multiple-html-files-end

There is a separate video explaining how to use Github repository in this course. 
In this video I talk about how to switch between branches and how to use the repository.

## Single Page Application

#### Run in Development Mode

1. ```git checkout single-page-application```
1. ```npm run dev```

Application will be served on the ```http://localhost:9000/```.

#### Run in Production Mode

1. ```git checkout single-page-application```
1. ```npm run build```
1. ```npm start```

Application will be served on the ```http://localhost:3000/```.

## Multiple Page Application

#### Run in Development Mode

1. ```git checkout multiple-page-application```
1. ```npm run dev```

Application will be served on the ```http://localhost:9000/```.
It will show an empty page.

In order to go to the "Hello World" page, go to ```http://localhost:9000/hello-world.html```.

In order to go to the "Kiwi" page, go to ```http://localhost:9000/kiwi.html```.


#### Run in Production Mode

1. ```git checkout multiple-page-application```
1. ```npm run build```
1. ```npm start```

Application will be served on the ```http://localhost:3000/```.
It will show an empty page.

In order to go to the "Hello World" page, go to ```http://localhost:3000/hello-world```.

In order to go to the "Kiwi" page, go to ```http://localhost:3000/kiwi```.
