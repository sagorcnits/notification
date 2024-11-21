function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function send() {
  // register server worker
  const register = await navigator.serviceWorker.register("sw.js");
  // register psush
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      "BOl20j8f24gMPqTHi9W1MLlxk5Q-Wrfs-r5KL8wcEch0dNCL4HVi_mnja5RnVsmBfuGYXnX6FrlVD0Hocvus3qU"
    ),
  });
  // sending notification

  await fetch("http://localhost:3000/save-subscription", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(subscription),
  });
}

export default send;

//   document.getElementById("notifyBtn").addEventListener("click", () => {
//     if ("serviceWorker" in navigator) {
//     }
//   });
