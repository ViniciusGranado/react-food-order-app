import React from 'react';

import { AvailableMeals } from './AvailableMeals/AvailableMeals';
import { MealsSummary } from './MealsSummary/MealsSummary';

export const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}