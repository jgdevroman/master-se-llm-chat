import axios from "axios";

const backendEntrypoint = "http://localhost:5005";

export const sendMessage = async (message) => {
  console.log("Sending message to the backend:", backendEntrypoint);
  try {
    const response = await axios.post(`${backendEntrypoint}/chat`, {
      newMessage: message,
    });
    console.log("Response:", response.data);
    return response.data.message.answer;
  } catch (error) {
    console.error("Error:", error);
    return "Internal Server Error";
  }
};
