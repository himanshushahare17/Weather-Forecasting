const generateAdvisory = (forecast) => {
  const advisories = [];
  const current = forecast.list[0];

  const temp = current.main.temp;
  const humidity = current.main.humidity;
  const wind = current.wind.speed * 3.6;
  const rain = (current.pop || 0) * 100;

  if (rain > 60)
    advisories.push("🌧 Avoid irrigation and pesticide spraying today.");

  if (temp > 35)
    advisories.push("🔥 High temperature. Increase irrigation.");

  if (wind > 15)
    advisories.push("🌬 Strong winds. Avoid pesticide spraying.");

  if (humidity > 80)
    advisories.push("🍄 High humidity. Risk of fungal infection.");

  if (wind < 10 && rain < 20)
    advisories.push("✅ Good spraying window available.");

  return advisories;
};

module.exports = generateAdvisory;
