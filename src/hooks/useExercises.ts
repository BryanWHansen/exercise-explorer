import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Exercise {
    id: string;
    name: string;
    gifUrl: string;
    bodyPart: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
  }

 export const useExercises = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [error, SetError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient
            .get<Exercise[]>("/exercises", { signal: controller.signal })
            .then((res) => {
                setExercises(res.data); 
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                SetError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { exercises, error, isLoading };
} 
