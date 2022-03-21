# Password Generator

The challenge was to make a password generator that allowed you to choose the length requirements, as well as if the user would like to use lowercase, uppercase, numbers, and/or symbols.

## Description

With the html and css already produced, this caused this challenge to be more specific as I was limited on how I was able to write my code. There were several ways I would have been able to write it but the I was able to use if else statements to write the majority of my javascript. I used prompts to ask the user if they would like to include each criteria one by one. If the user chose to include the criteria then the code would allow that corresponding array to execute. If it didnt then the array would be blank. I then had to add all of the prompts together into one single variable. It did not matter if the "total" value was not random yet since that would come after. I then did some research and ended up using the Uint32Array object to create a password as the algorithm is less likely to be hacked than math.random. It was then a matter of making sure the code would execute a portion of the code set by the user in the length var. I then had to debug and run in different browsers to ensure everything worked!


## Authors


  
Anthony Cattet


## Acknowledgments

Inspiration, code snippets, etc.
* https://github.com/coding-boot-camp/urban-octo-telegram/blob/main/Develop/index.html
* https://github.com/coding-boot-camp/urban-octo-telegram/blob/main/Develop/assets/css/style.css
