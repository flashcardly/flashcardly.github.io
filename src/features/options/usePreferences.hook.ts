import { useState, useEffect, useContext, useCallback } from "react";
import StorageProvider from '../../providers/storage.provider'

type Scalar = number | string | boolean;
export type Preferences = {
  selectedDeck: string;
  [key: string]: Scalar;
};

type UsePreferencesOutput = [Preferences, (p: Preferences) => void];
export const usePreferences = (): UsePreferencesOutput => {
  const storage = useContext(StorageProvider);
  const [preferenceData, setPreferenceData] = useState<Preferences>({
    selectedDeck: "ES-EN"
  });

  const setPreferences = useCallback((preferences: Preferences) => {
    storage.setValue("preferences", preferences)
      .then(() => setPreferenceData(preferences))
  }, [storage, setPreferenceData]);

  useEffect(() => {
    storage.getValue("preferences")
      .then((preferences) => {
        if (!preferences) return;
        setPreferenceData(preferences);
      });
  }, [storage]);

  return [preferenceData, setPreferences];
};
