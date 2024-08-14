import React from 'react';
import { useLocation } from 'react-router-dom';
import { TravelPlan } from '../types';

const PlanResult: React.FC = () => {
  const location = useLocation();
  const plan = location.state?.plan as TravelPlan | undefined;

  if (!plan) {
    return <div>No plan available. Please go back and generate a plan.</div>;
  }

  return (
    <div>
      <h2>Travel Plan for {plan.destination.name}</h2>
      <p><strong>Days:</strong> {plan.days}</p>
      <p><strong>Weather Forecast:</strong> {plan.weather_forecast}</p>
      <p><strong>Plan Details:</strong> {plan.plan_details}</p>
    </div>
  );
}

export default PlanResult;
