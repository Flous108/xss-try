fetch("https://chat/chatResult", {
    method: "POST",
    body: JSON.stringify({ message: "test" }),
});
