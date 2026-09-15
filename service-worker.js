self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {};

  event.waitUntil(
    self.registration.showNotification(
      data.title ?? "Awake FullFact",
      {
        body: data.body ?? "",
        icon: "/apple-touch-icon.png",
      }
    )
  );
});