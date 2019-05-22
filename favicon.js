const favicon = document.querySelector("link[rel=icon]");

if (favicon) {
 {
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillText("😋", -10, 56);

    favicon.href = canvas.toDataURL();
  }
}