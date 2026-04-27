MealSpark 🍳✨

Overview & Purpose

Got a fridge full of food but no ideas? MealSpark is an AI-powered web application designed to eliminate food waste and decision fatigue. By simply uploading a photo of your available ingredients, MealSpark leverages the Gemini AI API to act as your personal chef, generating a completely custom, step-by-step recipe tailored to your exact dietary needs and flavor cravings.

Key Features

Smart Image Recognition: Upload a photo of your ingredients (PNG, JPG, or WEBP) and let the AI identify what you have to work with.

Deep Customization: Fine-tune your recipe by selecting:

Dietary restrictions (Vegan, Gluten-Free, Pescatarian, etc.)

Spice tolerance (from Mild to Very Hot)

Craved flavor profiles (Savory, Sweet, Spicy, Umami)

Preferred cuisines (or choose "Surprise Me!")

Meal type and available cooking time

Personal cooking skill level

Dynamic Recipe Generation: Receives a structured, easy-to-read recipe complete with prep time, cook time, servings, precise measurements, and step-by-step instructions.

Seamless UI/UX: Features a sleek, responsive design with multi-step progressive forms, custom loading animations, and one-click "Copy Recipe" functionality.

Technologies Used

Frontend: HTML5, CSS3, Vanilla JavaScript

Styling: Tailwind CSS (via CDN)

Typography & Icons: Google Fonts (Inter, Playfair Display, Roboto), Lucide Icons

AI Engine: Google Gemini API (handling image-to-text processing and JSON recipe generation)

Deployment & Hosting: Vercel (handling the frontend and /api/gemini serverless endpoint)

Setup & Usage Instructions

To run this project locally, you will need to set up a local development environment that can handle the backend API call to Gemini.

Clone the repository:

git clone [https://github.com/ZacharyBarry/MealSpark.git](https://github.com/ZacharyBarry/MealSpark.git)
cd MealSpark


Set up the backend environment:
Ensure you have your Vercel serverless function set up in the /api/gemini directory to securely handle your API keys.

Add your Environment Variables:
Create a .env file in your root directory and add your Google Gemini API key:

GEMINI_API_KEY=your_api_key_here


Run the application:
If using Vercel CLI, you can start the local development server by running:

vercel dev


Navigate to http://localhost:3000 in your browser.

Usage:
Click the upload area to select an image of your ingredients. Click "Customize Recipe", step through the preference menus, and hit "Generate Recipe" to see your custom dish!

My Contribution

This application was built collaboratively with a friend, though I served as the primary developer. I spearheaded the core frontend architecture, implemented the responsive Tailwind CSS design, engineered the multi-step customization logic in JavaScript, and integrated the payload formatting for the Gemini API connection.

License

All Rights Reserved. This project is provided for portfolio demonstration purposes only. Unauthorized copying, modification, or distribution of the source code is prohibited.
