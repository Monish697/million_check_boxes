# Million Checkboxes

This is a hobby project that simulates a "Million Checkboxes" application where multiple users can interact with checkboxes in real-time.

## Status: Work in Progress

This project is currently ongoing. 

**Known Bug:** 
There is an issue regarding state synchronization. If two users are connected to the server and check some checkboxes, a third user who connects afterwards will not receive the updated state of the previously checked boxes. 

I am continuing to work on the project to resolve this and add more features. Thank you!

## How to Run Locally

Follow these steps to run the application on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Monish697/million_check_boxes.git
   cd million_check_boxes
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Start the server:**
   For development (with hot-reloading):
   ```bash
   npm run dev
   ```
   Or to start normally:
   ```bash
   npm start
   ```

4. **Open in browser:**
   Open your web browser and navigate to `http://localhost:5000` (or whichever port the application is configured to use).
