import Constants from "expo-constants";
import { useState } from "react";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { domain } = Constants.expoConfig.extra;

const useHttp = () => {
  const { setIsLoggedIn } = useLogin();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRequest = async (endPoint, token = null) => {
    setLoading(true);
    setError(null);

    const apiUrl = `${domain}${endPoint}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(apiUrl, config);
      if (response.status === 403) {
        await AsyncStorage.clear();
        setIsLoggedIn(false);
        return;
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const postRequest = async (endPoint, body, token = null) => {
    setLoading(true);
    setError(null);

    const apiUrl = `${domain}${endPoint}`;

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const config = {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(apiUrl, config);
      if (response.status === 403) {
        await AsyncStorage.clear();
        setIsLoggedIn(false);
        return;
      }
      const data = await response.json();

      setLoading(false);
      return data;
    } catch (err) {
      setError("ERROR", err.message);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    postRequest,
    getRequest,
  };
};

export default useHttp;
