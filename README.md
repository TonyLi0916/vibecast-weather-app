# 🌦️ VibeCast — Weather Insights & Prediction App

VibeCast is a clean, data-driven weather application that allows users to search any city and instantly view current conditions, short-term forecasts, and simple temperature trend predictions.
In addition to displaying live API data, VibeCast performs lightweight analysis on recent temperatures to predict upcoming trends and compare them against actual forecasts.

# 💻 Live Website

https://tonyli0916.github.io/vibecast-weather-app/

# ✨ Features

- 🔍 Search any city for live weather data

- 🌡️ Current temperature, min/max temp, and conditions

- ⏱️ Next 4 hours forecast (auto-aligned with user’s local time)

- 👕 Outfit suggestions based on temperature

- 🎨 Fully responsive UI built with Tailwind CSS

- 📈 Temperature trend prediction for upcoming days using simple linear regression

- 📊 Comparison between predicted temperatures and actual API forecasts

- 🧠 Basic accuracy classification (excellent / good / fair) based on prediction error

- 📱 Mobile-friendly design

# 🛠️ Tech Stack

- HTML5

- CSS3 / Tailwind CSS

- JavaScript (ES Modules)

- Webpack

- Visual Crossing Weather API

# 📸 Screenshots

<img width="309" height="674" alt="Screenshot 2025-11-29 at 7 17 46 PM" src="https://github.com/user-attachments/assets/9ac30644-c671-4c64-8255-c1804166c8a6" />
<img width="310" height="671" alt="Screenshot 2025-11-29 at 7 18 28 PM" src="https://github.com/user-attachments/assets/1f9b5a66-1bc6-4fad-8ef0-f9a3516001cf" />

# 🚀 Getting Started

**Prerequisites**

- Node.js (v18+ recommended)
- npm (comes with Node)

# 🔧 Installation

Clone the repo:

```
git clone https://github.com/TonyLi0916/vibecast-weather-app.git
cd vibecast-weather-app
```

Install dependencies:

```
npm install
```

Start Tailwind and Webpack dev servers:

```
npm run dev
```

Build for production

```
npm run build
```

# 🌐 API Setup

Go to Visual Crossing Weather API

Generate a free API key

Open src/modules/api.js

Insert your key:

```
const API_KEY = "YOUR_KEY_HERE";
```
