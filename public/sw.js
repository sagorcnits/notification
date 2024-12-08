self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data)
  self.registration.showNotification(data.title, {
    body: data.body,
  });
});


// notification.onclick = () => {
//   window.open(payload.url, "_blank"); // নতুন ট্যাবে URL ওপেন
// };