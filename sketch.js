let images = {};
let imageNames = [
  "img1",
  "img2",
  "img",
  "meo",
  "hani",
  "bg",
  "miki",
  "trash",
  "bgs",
  "title",
  "treasure"
];

function preload() {
  imageNames.forEach(name => {
    let extension = name === "bg" ? ".jpeg" : ".png";  // Use .jpeg for bg, .png for others
    images[name] = loadImage(`images/${name}${extension}`);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  images['treasure'].resize(windowWidth + 300, windowHeight + 300);
  images['img1'].resize(300, 0);
  images['img2'].resize(100, 0);
  images['img'].resize(250, 0);
  images['meo'].resize(300, 0);
  images['hani'].resize(300, 0);
  images['miki'].resize(300, 0);
  images['trash'].resize(250, 0);
  images['bgs'].resize(200, 0);
  images['title'].resize(900, 0);

  xToilet = width / 2;
  yToilet = height / 2;
  xMeo = 150;
  yMeo = 150;
  xHani = width - 200;
  yHani = height - 200;

  ascii = createGraphics(1000, 1000);
  ascii1 = createGraphics(1000, 1000);
  ascii2 = createGraphics(1000, 1000);

  images['img2'].loadPixels();
  for (let i = 0; i < images['img2'].height; i++) {
    for (let j = 0; j < images['img2'].width; j++) {
      let idx = (i * images['img2'].width + j) * 4;
      let r = images['img2'].pixels[idx];
      let g = images['img2'].pixels[idx + 1];
      let b = images['img2'].pixels[idx + 2];
      let grayScale = (r + g + b) / 3;

      if ((0 < grayScale) & (grayScale < 120)) {
        let idxSymbols = int(map(grayScale, 0, 255, 0, symbols.length));
        let kytu = symbols[idxSymbols];
        ascii.fill(206, 55, 88);
        ascii.textSize(12);
        ascii.text(kytu, j * ratio, i * ratio);

        let idxSymbols1 = int(map(grayScale, 0, 255, 0, symbols1.length));
        let kytu1 = symbols1[idxSymbols1];
        ascii1.fill(71, 173, 88);
        ascii1.textSize(12);
        ascii1.text(kytu1, j * ratio, i * ratio);

        let idxSymbols2 = int(map(grayScale, 0, 255, 0, symbols2.length));
        let kytu2 = symbols2[idxSymbols2];
        ascii2.fill(65, 47, 138);
        ascii2.textSize(12);
        ascii2.text(kytu2, j * ratio, i * ratio);
      } else {
        let idxSymbols = int(map(grayScale, 0, 255, 0, symbols.length));
        let kytu = symbols[idxSymbols];
        ascii.fill(70, 127, 128);
        ascii.textSize(12);
        ascii.text(kytu, j * ratio, i * ratio);

        let idxSymbols1 = int(map(grayScale, 0, 255, 0, symbols1.length));
        let kytu1 = symbols1[idxSymbols1];
        ascii1.fill(223, 110, 164);
        ascii1.textSize(12);
        ascii1.text(kytu1, j * ratio, i * ratio);

        let idxSymbols2 = int(map(grayScale, 0, 255, 0, symbols2.length));
        let kytu2 = symbols2[idxSymbols2];
        ascii2.fill(235, 163, 225);
        ascii2.textSize(12);
        ascii2.text(kytu2, j * ratio, i * ratio);
      }
    }
  }
}

function draw() {
  image(images['treasure'], width / 2, height / 2);
  image(images['miki'], width / 2 + 200, height - 140);
  image(images['trash'], 250, 700);
  image(images['bgs'], width - 250, 200);
  image(images['title'], width / 2, 130);

  let khoangCachToilet = dist(xToilet, yToilet, mouseX, mouseY);
  let khoangCachMeo = dist(xMeo, yMeo, mouseX, mouseY);
  let khoangCachHani = dist(xHani, yHani, mouseX, mouseY);

  let allKhoangCach = [khoangCachToilet, khoangCachMeo, khoangCachHani];

  if (khoangCachToilet < khoangCachMeo) {
    if (khoangCachMeo < khoangCachHani) {
      target = 0;
    } else {
      if (khoangCachToilet < khoangCachHani) {
        target = 0;
      } else {
        target = 2;
      }
    }
  } else {
    if (khoangCachMeo > khoangCachHani) {
      target = 2;
    } else {
      target = 1;
    }
  }

  if (target == 0) {
    if (khoangCachToilet < 50) {
      image(images['meo'], xMeo, yMeo);
      image(images['hani'], xHani, yHani);
      image(ascii, width / 2, height / 2);
    } else {
      image(images['img'], xToilet, yToilet);
      image(images['meo'], xMeo, yMeo);
      image(images['hani'], xHani, yHani);

      push();
      let doTint = map(khoangCachToilet, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(images['img1'], mouseX, mouseY, 150, 150);
      pop();
    }
  } else if (target == 1) {
    if (khoangCachMeo < 50) {
      image(images['img'], xToilet, yToilet);
      image(images['hani'], xHani, yHani);
      image(ascii1, width / 2, height / 2);
    } else {
      image(images['img'], xToilet, yToilet);
      image(images['meo'], xMeo, yMeo);
      image(images['hani'], xHani, yHani);

      push();
      let doTint = map(khoangCachMeo, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(images['img1'], mouseX, mouseY, 150, 150);
      pop();
    }
  } else {
    if (khoangCachHani < 50) {
      image(images['img'], xToilet, yToilet);
      image(images['meo'], xMeo, yMeo);
      image(ascii2, width / 2, height / 2);
    } else {
      image(images['img'], xToilet, yToilet);
      image(images['meo'], xMeo, yMeo);
      image(images['hani'], xHani, yHani);
      push();
      let doTint = map(khoangCachHani, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(images['img1'], mouseX, mouseY, 150, 150);
      pop();
    }
  }
}
