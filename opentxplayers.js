fetch("https://chat/chatResult", {
    method: "POST",
    body: JSON.stringify({ message: "/txAdmin:menu:openPlayersPage" }),
});
