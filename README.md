# 🌾 GramiQ – Weather Forecast & Advisory Tool for Farmers

<img width="1429" height="778" alt="image" src="https://github.com/user-attachments/assets/f929e85d-ce76-4bb7-8c6a-c21a9026c013" />

**MERN Stack Technical Assignment**  
**Web Developer Intern (MERN Stack) – GramiQ**

---

## 📌 Project Overview

**GramiQ** is a farmer-centric web application that converts real-time weather forecasts into **simple, actionable advisories** to help farmers make better daily decisions.

The application fetches live weather data from the **OpenWeatherMap API** and generates **rule-based agricultural advisories** related to irrigation, pesticide spraying, heat stress, and crop safety.

---

## 🎯 Key Objectives

- Provide easy-to-understand weather insights
- Generate practical advisories for farmers
- Present data in a clean and intuitive UI
- Demonstrate strong MERN stack fundamentals

---

## 🛠 Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React.js (JavaScript) |
| Backend | Node.js, Express.js |
| Database | MongoDB (Atlas) |
| API | OpenWeatherMap (Free Tier) |
| Charts | Chart.js |
| PDF Export | jsPDF |

---

## 📂 Project Structure

```
gramiq/
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.css
│
└── README.md
```

---

## 🌦 Weather Data Used

- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Rain Probability (POP)
- 5-Day Forecast (3-hour blocks)

---

## 🌾 Farmer Advisory Logic

| Condition | Advisory |
|----------|----------|
| Rain Probability > 60% | Avoid irrigation and pesticide spraying |
| Temperature > 35°C | Increase irrigation frequency |
| Wind Speed > 15 km/h | Avoid pesticide spraying |
| Humidity > 80% | Risk of fungal infection |
| Wind < 10 km/h & Low Rain | Good spraying window |

---

## 📄 Advisory PDF Download

Users can download a professionally formatted PDF containing:
- City name & country
- Today’s weather summary
- Farmer advisories
- Clean printable layout

---

## 🔐 Environment Variables

Create `.env` inside `server/`:

```
PORT=5000
OPENWEATHER_API_KEY=your_api_key
MONGO_URI=your_mongodb_connection
```

---

## ⚙️ Setup Instructions

### Backend
```
cd server
npm install
npx nodemon server.js
```

### Frontend
```
cd client
npm install
npm start
```

---

## 🎥 Demo Video

Shows:
- City search
- Weather display
- Advisory generation
- 5-day forecast
- PDF download

---

## 🌱 Future Enhancements

- Crop-specific advisories
- Multi-language support
- WhatsApp alerts
- Voice advisory support

---



"# Weather-Forecasting" 
