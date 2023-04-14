const pencil = {
  length: "7.5 inches",
  shape: "hexagonal",
  diameter: "1/4 inch",
  write: function () {
    console.log("write");
  },
  erase: function () {
    console.log("erase");
  },
  sharpen: function () {
    console.log("sharpen");
  },
};

pencil.sharpen();

pencil.length = "7 inches";

pencil.sharpness = "sharp";

const newPencil = { ...pencil };
console.log(`newPencil: ${newPencil}`);
