import { useEffect } from "react";
import send from "../../../public/client";

const Home = () => {
  // if ("Notification" in window) {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === "garanted") {
  //       alert("Notification permission garanted!");
  //     }
  //   });
  // }

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.log(err));
    }
  }, []);

  async function unsubscribeUser() {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      console.log("Old subscription removed");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-center text-3xl font-bold">Home</h1>
      <button onClick={unsubscribeUser}>unsubscribe</button>
    </div>
  );
};

export default Home;
