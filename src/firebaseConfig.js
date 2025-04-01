// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAejliHCLcEgYNoGD9-4bZwSq4j-G-TKj4",
  authDomain: "stoiccodedaily.firebaseapp.com",
  projectId: "stoiccodedaily",
  storageBucket: "stoiccodedaily.firebasestorage.app",
  messagingSenderId: "702266664055",
  appId: "1:702266664055:web:bfa209ff9cea5ac4071272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    console.log("Service Worker Registered:", registration);
    
    await navigator.serviceWorker.ready;
    console.log("Service Worker is Active and Ready");

    const messaging = getMessaging(app);


    const token = await getToken(messaging, {
      vapidkey: "BOoIj3YwmVlpuXCzop95lJmojK-C8oVFteumAV56JQ26qC32noP-7Guytqxam7cJF5VSXvszaPy413jJvvaPsVM",
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error Getting Token:", error);
  }
};

export { messaging };
export default app;