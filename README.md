# SVTTakeHome

Project Started 9:16AM CST 10/12/2022

Overall did not have a lot of time as my brothers wedding is this week, but luckily the other app I've been working on https://github.com/Alexander-Quatrini/Steam-App is VERY similar.

# Installation Instructions

1. First download Node.js: https://nodejs.org/en/ *Note: I have v16.10.0 of Node. It may be beneficial to use the same version.*

2. During the setup make sure that everything will be installed: 

  ![node](https://user-images.githubusercontent.com/17236535/195655449-9685608e-3ca3-437c-b229-bf412aa5bb45.png)
  
3. Next clone this repository to your machine <code>git clone https://github.com/Alexander-Quatrini/SVT-Take-Home.git</code>

4. Open a command prompt window and navigate to the cloned repository and run the command <code>npm install</code>

5. When the command finishes run <code>npm start</code> in the same directory.

6. After the code is successfully compiled open a browser of your choice and navigate to localhost:4200 to see the project.

# Notes

Unfortunately, I did not have a lot of time to add the features I would usually add in a frontend app like this.

First off, development did not take place with responsiveness in mind. The webpage ends up looking good in Chrome, but I'm not sure if any other browser would display this webpage in a different or incorrect manner. The webpage also does not respond to changes in window size very well, looking clunky on smaller phone screens. If I had the time I would use bootstraps built-in breakpoints (sm,md,lg,etc.) to make this webpage more responsive.

Next, I did not have the time to make the website accessible for screen readers using aria- attributes. By using aria-label, tab-indicies, and a few more event listeners, I could have made the whole website accessible with just the tab and arrow keys.

As I am writing this I had an idea to make the red highlighted rows convey to the user that the robot's battery level is low. My last commit to the code will include this change. In addition I think it would be helpful to be able to only show robots with a low battery life.

If the endpoint had more information about the robots like if it is currently operating correctly for example, it would be helpful to be able to show this extra information with a click or button press.

Those are just the next few things I would think of adding.

Project Ended ~12:07PM CST 10/13/2022
