import { useState, useEffect } from 'react';

const SONIPAT_COORDS = { lat: 28.9931, lon: 77.0178 };

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real app, you'd use an actual API key and process.env
    // For this demonstration, we'll provide mock data but structure it correctly
    async function fetchWeather() {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mocking the structure of OpenWeatherMap Response
        const mockData = {
          current: {
            temp: 34,
            feels_like: 36,
            humidity: 45,
            wind_speed: 12,
            weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }]
          },
          daily: [
            { dt: 1714371600, temp: { day: 32 }, weather: [{ main: 'Clear' }] },
            { dt: 1714458000, temp: { day: 34 }, weather: [{ main: 'Clouds' }] },
            { dt: 1714544400, temp: { day: 35 }, weather: [{ main: 'Clear' }] },
            { dt: 1714630800, temp: { day: 38 }, weather: [{ main: 'Clear' }] },
            { dt: 1714717200, temp: { day: 37 }, weather: [{ main: 'Rain' }] },
            { dt: 1714803600, temp: { day: 33 }, weather: [{ main: 'Clouds' }] },
            { dt: 1714890000, temp: { day: 32 }, weather: [{ main: 'Clear' }] }
          ]
        };
        
        setWeather(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return { weather, loading, error };
}
