import jsPDF from "jspdf";

export const generateAdvisoryPDF = (weather, advisories) => {
  const doc = new jsPDF("p", "mm", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 15;

  // ================= HEADER =================
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("GramiQ – Farmer Weather Advisory", pageWidth / 2, y, {
    align: "center",
  });

  y += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  doc.text(
    `City: ${weather.city.name}, ${weather.city.country}`,
    14,
    y
  );
  y += 6;

  doc.text(`Date & Time: ${new Date().toLocaleString()}`, 14, y);

  y += 5;
  doc.line(14, y, pageWidth - 14, y);
  y += 8;

  // ================= TODAY FORECAST =================
  const today = weather.list[0]; // current 3-hour block

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("TODAY’S WEATHER SUMMARY", 14, y);

  y += 4;
  doc.line(14, y, pageWidth - 14, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  const weatherData = [
    `Temperature : ${today.main.temp} °C`,
    `Humidity    : ${today.main.humidity} %`,
    `Wind Speed  : ${(today.wind.speed * 3.6).toFixed(1)} km/h`,
    `Rain Chance : ${((today.pop || 0) * 100).toFixed(0)} %`,
  ];

  weatherData.forEach((item) => {
    doc.text(item, 18, y);
    y += 7;
  });

  y += 5;
  doc.line(14, y, pageWidth - 14, y);
  y += 8;

  // ================= ADVISORY =================
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("FARMER ADVISORY", 14, y);

  y += 4;
  doc.line(14, y, pageWidth - 14, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  if (advisories.length === 0) {
    doc.text("No specific advisory for today.", 18, y);
    y += 7;
  } else {
    advisories.forEach((advice, index) => {
      doc.text(`${index + 1}. ${advice}`, 18, y, {
        maxWidth: pageWidth - 36,
      });
      y += 8;
    });
  }

  y += 10;
  doc.line(14, y, pageWidth - 14, y);
  y += 6;

  // ================= FOOTER =================
  doc.setFontSize(10);
  doc.text(
    "Note: This advisory is generated using weather forecast data. Please consult local agriculture experts before taking critical decisions.",
    14,
    y,
    { maxWidth: pageWidth - 28 }
  );

  // ================= SAVE =================
  doc.save(`GramiQ_Advisory_${weather.city.name}.pdf`);
};
