import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Exercise {
    id: string;
    name: string;
  }

 export const useExercises = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [error, SetError] = useState("");
    
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<Exercise[]>("/exercises", { signal: controller.signal })
            .then((res) => setExercises(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                SetError(err.message)
            });

        return () => controller.abort();
    }, []);

    return { exercises, error };
} 
