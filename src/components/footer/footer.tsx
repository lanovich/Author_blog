import { useEffect, useState } from "react";
import styles from "./footer.module.css";
interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=59.950258&lon=30.315635&appid=f9b799f8904e6de4c4f51704359fe973&units=metric&lang=ru`
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp).toString());
        setWeatherDescription(weather[0].description);
      });
  }, []);

  return (
    <footer className={className}>
      <div className={styles.leftSide}>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>

      <div className={styles.rightSide}>
        <div>
          {city}, {new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
        </div>
        <div>
          {temperature} °C, {weatherDescription}
        </div>
      </div>
    </footer>
  );
};
