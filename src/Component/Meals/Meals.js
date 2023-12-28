import {MealsSummary} from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

