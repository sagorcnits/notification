import { useEffect } from "react";
import send from "../../../public/client";

const Home = () => {
  // const [permission,setPermission] = useState(false)

  useEffect(() => {
    if ("Notification" in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // setPermission(true)
          console.log("Notification permission garanted!");
          if ("serviceWorker" in navigator) {
            send().catch((err) => console.log(err));
          }
        }
      });
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
