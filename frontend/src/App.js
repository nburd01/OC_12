// frontend/src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchUserData } from "./services";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 12;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(userId);
        console.log("Fetched user data:", userData);
        setUser(userData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, [userId]);

  console.log("user", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user || !user.userInfos) {
    // console.log("No user data available, user:", user);
    return <div>No user data available</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Information</h1>
        <p>First Name: {user.userInfos.firstName}</p>
        <p>Last Name: {user.userInfos.lastName}</p>
        <p>Age: {user.userInfos.age}</p>
        <h2>Key Data</h2>
        <p>Calorie Count: {user.keyData.calorieCount}</p>
        <p>Protein Count: {user.keyData.proteinCount}</p>
        <p>Carbohydrate Count: {user.keyData.carbohydrateCount}</p>
        <p>Lipid Count: {user.keyData.lipidCount}</p>
      </header>
    </div>
  );
}

export default App;
