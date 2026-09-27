"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IWorkout } from "@/types/workout";

type PlanContextType = {
  planItems: IWorkout[];
  savedItems: IWorkout[];
  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
  addToSaved: (workout: IWorkout) => void;
  removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [planItems, setPlanItems] = useState<IWorkout[]>([]);
  const [savedItems, setSavedItems] = useState<IWorkout[]>([]);

  const addToPlan = (workout: IWorkout) => {
    setPlanItems((prev) =>
      prev.some((item) => item.id === workout.id) ? prev : [...prev, workout]
    );
  };

  const removeFromPlan = (id: number) => {
    setPlanItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToSaved = (workout: IWorkout) => {
    setSavedItems((prev) =>
      prev.some((item) => item.id === workout.id) ? prev : [...prev, workout]
    );
  };

  const removeFromSaved = (id: number) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};