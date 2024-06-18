# Cake Tracker Frontend

This represents the frontend of the Cake Tracker, an application focused on storing employee information and display keeping track of everyone's birthday.

## Implementation

The frontend is implemented using React. The application has 2 pages: the main page, containing a table with member information, that can either be sorted by upcoming birthdays or not sorted (order of adding a member), and the add member page, where the user can add a new member to the list.

For API calls, the application uses Axios. I utilized React-Bootstrap for more structured components.

As for architecture, the application is divided into:
- components
- controllers (responsible for handling API calls)
- hooks (custom hooks)
- domain (containing models, equivalent to backend's DTOs)
- pages
- style (for .css files).

## Setup

I generally run the application through the WebStorm IDE, but it can run through the terminal as follows:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/suciubogdansb/CakeTrackerFrontend.git
   cd CakeTrackerFrontend
   ```

2. **Run the application**:

   ```bash
    npm install
    npm start
   ```

   The application should run on localhost:3000.