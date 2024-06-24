const API_BASE_URL = "http://localhost:3000/";

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export { fetchUserData };
