export interface TravelPlan {
    destination: {
      name: string;
      latitude: number;
      longitude: number;
    };
    days: number;
    weather_forecast: string;
    plan_details: string;
  }
  