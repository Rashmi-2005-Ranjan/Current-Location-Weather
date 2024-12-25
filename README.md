# **Current Location Weather**

A simple and efficient web application built with **JavaScript**, **HTML**, and **CSS** that fetches and displays the current weather for your location. Using geolocation and weather APIs, this app provides real-time weather updates for users based on their current geographic coordinates.

---

## **Features**

- **Real-Time Weather Data**: Get current temperature, weather conditions, and other details for your location.
- **Geolocation Support**: Automatically detects the user's location using the browser's geolocation API.
- **Interactive Design**: Clean and user-friendly interface for a seamless experience.
- **Error Handling**: Displays appropriate error messages for denied permissions or API issues.

---

## **Technologies Used**

- **HTML**: For the structure of the web application.
- **CSS**: For styling and responsive design.
- **JavaScript**: For fetching and displaying weather data using APIs.

---

## **How It Works**

1. **Location Detection**:
   - Uses the `navigator.geolocation` API to fetch the user's current latitude and longitude.

2. **Weather Fetching**:
   - Calls a weather API (e.g., OpenWeatherMap API) using the detected coordinates.
   - Retrieves details such as temperature, weather conditions, humidity, and wind speed.

3. **Display**:
   - Updates the UI dynamically to display the fetched weather details.

---

## **Installation and Usage**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Current-Location-Weather.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Current-Location-Weather
   ```

3. **API Key Setup**:
   - Register for a free API key on [OpenWeatherMap](https://openweathermap.org/).
   - Replace the placeholder `YOUR_API_KEY` in the JavaScript file with your actual API key.

4. **Open the Application**:
   - Open the `index.html` file in any modern web browser.
   - Grant location access when prompted by the browser.

---


## **Contributing**

Contributions are welcome! If you'd like to improve this application, follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---



---

## **Acknowledgments**

- Thanks to **OpenWeatherMap** for their comprehensive weather API.
- Inspired by the need for real-time weather updates tailored to user location.
