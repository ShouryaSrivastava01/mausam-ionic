# Mausam

Mausam is an Ionic application that provides real-time weather information and forecasts. The app uses Capacitor to build cross-platform mobile applications and integrates with a weather API to deliver accurate weather data.

https://www.weatherapi.com/

## Features

1. **Current Weather:**
   - Display current weather conditions for the user's location using geolocation.
   - Search for and display current weather conditions for any city.

2. **Weather Forecast:**
   - View a 3-day (free subscription) weather forecast for the user's location or any searched city.

3. **Weather Details:**
   - Detailed information including temperature, humidity, wind speed, and weather description.

## Technologies Used

- **Ionic:** Framework for building cross-platform mobile applications.
- **Capacitor:** Native runtime for Ionic apps.
- **Weather API:** To fetch weather data https://www.weatherapi.com/.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Ionic CLI (`npm install -g @ionic/cli`)

### Installation

1. **Clone the Repository:**


2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Capacitor:**

   - Add Android platform if needed:

     ```bash
     ionic cap add android
     ```

   - Update the Capacitor configuration with your app's details (e.g., app name, package ID) in `capacitor.config.json`.

5. **Run the App Locally:**

   ```bash
   ionic serve
   ```

   Open your browser and navigate to `http://localhost:8100` to view the app.
