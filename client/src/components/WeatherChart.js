import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function WeatherChart({ weather }) {
  if (!weather) return null;

  const labels = weather.list.slice(0, 8).map(item =>
    item.dt_txt.split(" ")[1]
  );

  const temps = weather.list.slice(0, 8).map(item =>
    item.main.temp
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "green",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card">
      <h3>📈 Temperature Trend (Next 24 hrs)</h3>
      <Line data={data} />
    </div>
  );
}

export default WeatherChart;
