import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TravelPlan } from '../types';

const Home: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [days, setDays] = useState<number>(1);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<TravelPlan>('/api/plans/generate_plan/', {
        destination: destination,
        days: days,
      });
      navigate('/result', { state: { plan: response.data } });
    } catch (error) {
      console.error('Error generating travel plan:', error);
    }
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <label>Days:</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
          />
        </div>
        <button type="submit">Generate Plan</button>
      </form>
    </div>
  );
}

export default Home;
