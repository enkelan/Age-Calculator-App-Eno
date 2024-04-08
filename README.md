# Age Calculator App

This is a work-in-progress application that calculates a user's age based on their birth date. The application is built using HTML, CSS, and JavaScript.

## Features
- User-friendly interface for inputting birth date
- Real-time age calculation
- Responsive design for mobile and desktop

## How It Works
The user inputs their birth date in the form of day, month, and year. The application then calculates the user's age in years, months, and days by comparing the current date with the inputted birth date.

The age calculation is done using JavaScript. Here are the main methods used:

- `addEventListener`: This method is used to listen for user inputs and button clicks. When the user inputs their birth date or clicks the submit button, an event listener triggers a function that calculates the age.
- `Date`: This constructor is used to create Date objects. It's used to get the current date and to create a Date object from the user's input.
- `getFullYear`, `getMonth`, `getDate`: These methods are used to get the year, month, and day from a Date object. They're used to calculate the user's age in years, months, and days.
- `classList.add`, `classList.remove`: These methods are used to add and remove classes from elements. They're used for error handling - when the user inputs an invalid date, the error class is added to the input field and label, changing their color to red.

The application's interface is built using HTML and CSS. It features a responsive design that adapts to different screen sizes, making it accessible on both mobile and desktop devices.

## Future Improvements
This application is still a work in progress. Future updates will include:
- More comprehensive error handling
- Improved user interface
- Additional features based on user feedback
