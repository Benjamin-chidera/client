import { createContext, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const URL = "http://localhost:3000/api/v1/inspection";
  const BASE_URL = "http://localhost:3000/api/v1/properties";
  const [latest, setLatest] = useState([]);
  const [properties, setProperties] = useState([]);
  const [inspection, setInspection] = useState([]);
  const [recent, setRecent] = useState([]);

  const getLatestProperties = async () => {
    // GETTING LATEST PROPERTIES
    try {
      const {
        data: { property },
      } = await axios(`${BASE_URL}/latest`);
      setLatest(property);
    } catch (error) {
      console.log(error);
    }
  };

  const getProperties = async () => {
    // GETTING ALL properties
    try {
      const {
        data: { properties },
      } = await axios(BASE_URL);
      setProperties(properties);
    } catch (error) {
      console.log(error);
    }
  };

  const getInspection = async () => {
    try {
      const {
        data: { inspection },
      } = await axios(URL);
      setInspection(inspection);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInspection = async (inspecId) => {
    try {
      const {
        data: { inspection },
      } = await axios.delete(`${URL}/${inspecId}`);

      if (inspection) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentProperty = async () => {
    try {
      const { data: {properties} } = await axios(`${BASE_URL}/recent`);
      setRecent(properties);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        BASE_URL,
        URL,
        getLatestProperties,
        latest,
        getProperties,
        properties,
        getInspection,
        inspection,
        deleteInspection,
        getRecentProperty,
        recent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
