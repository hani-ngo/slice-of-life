let img1;
let img2;
let img;
let meo;
let hani;
let bg;
let miki;
// let bunbo;
//let mogu;
let trash;
let bgs;
let title;
let treasure; 

let symbols = [
  "💩",
  "🅣",
  "🅞",
  "🅘",
  "🅛",
  "🅔",
  "🅣",
  "🚽",
  "うん",
  "こ",
  "ⓟ",
  "ⓞ",
  "ⓞ",
  "ⓟ",
  "✳",
];
let symbols1 = [
  "😼",
  "🅒",
  "🅐",
  "🅣",
  "𖢑",
  "𖠢",
  "𖥕",
  "𖧉",
  "𖢑",
  "𖠢",
  "𖥕",
  "𖧉",
  "✳",
];
let symbols2 = [
  "👩‍🎨",
  "い",
  "つ",
  "も",
  "頑",
  "張",
  "って",
  "る",
  "🌿",
  "🌸",
];

let ratio = 10;
let ascii;
let ascii1;
let ascii2;

let xToilet, yToilet;
let xMeo, yMeo;
let xHani, yHani;

let target = 0;

function preload() {
  img1 = loadImage("/images/img1.png");
  img2 = loadImage("/images/img2.png");
  img = loadImage("/images/img.png");
  meo = loadImimgage("/images/meo.png");
  hani = loadImage("/images/hani.png");
  bg = loadImage("/images/bg.jpeg");
  miki = loadImage("/images/miki.png");
  // bunbo = loadImage("/images/bunbo.png");
  trash = loadImage("/images/trash.png");
  bgs =loadImage("/images/bgs.png");
  //mogu = loadImage("/images/mogu.png");
  title = loadImage("/images/title.png");
  treasure = loadImage("/images/treasure.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  treasure.resize(windowWidth+300,windowHeight+300);
  img1.resize(300, 0);
  img2.resize(100, 0);
  img.resize(250, 0);
  meo.resize(300, 0);
  hani.resize(300, 0);
  miki.resize(300,0);
  // bunbo.resize(200,0);
  trash.resize(250,0);
  bgs.resize(200,0);
  //mogu.resize(250,0);
  title.resize(900,0);


  xToilet = width / 2;
  yToilet = height / 2;
  xMeo = 150;
  yMeo = 150;
  xHani = width - 200;
  yHani = height - 200;

  // noLoop();

  ascii = createGraphics(1000, 1000);
  ascii1 = createGraphics(1000, 1000);
  ascii2 = createGraphics(1000, 1000);

  img2.loadPixels();
  for (let i = 0; i < img2.height; i++) {
    for (let j = 0; j < img2.width; j++) {
      let idx = (i * img2.width + j) * 4;
      let r = img2.pixels[idx];
      let g = img2.pixels[idx + 1];
      let b = img2.pixels[idx + 2];
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
  //background(255,251,243);
  
  image (treasure,width/2, height/2);
  image (miki,width/2+200,height-140);
  image (trash, 250, 700);
  image (bgs, width-250, 200);
  image (title, width/2, 130);
  // image (bunbo, width-350, height/2+50);
  //image (mogu, width/2, 300);
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

  // target = allKhoangCach.indexOf(Math.min(allKhoangCach));
  // console.log(target);

  
  
  
  
  
  
  
  if (target == 0) {
    if (khoangCachToilet < 50) {
      image(meo, xMeo, yMeo);
      image(hani, xHani, yHani);
      image(ascii, width/2, height/2);
      
    } else {
      image(img, xToilet, yToilet);
      image(meo, xMeo, yMeo);
      image(hani, xHani, yHani);

      push();
      let doTint = map(khoangCachToilet, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(img1, mouseX, mouseY, 150, 150);
      pop();
    }
  } else if (target == 1) {
    if (khoangCachMeo < 50) {
      image(img, xToilet, yToilet);
      image(hani, xHani, yHani);
      image(ascii1, width/2, height/2);
      
    } else {
      image(img, xToilet, yToilet);
      image(meo, xMeo, yMeo);
      image(hani, xHani, yHani);

      push();
      let doTint = map(khoangCachMeo, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(img1, mouseX, mouseY, 150, 150);
      pop();
    }
  } else {
    if (khoangCachHani < 50) {
      image(img, xToilet, yToilet);
      image(meo, xMeo, yMeo);
      image(ascii2, width/2, height/2);
    } else {
      image(img, xToilet, yToilet);
      image(meo, xMeo, yMeo);
      image(hani, xHani, yHani);
      push();
      let doTint = map(khoangCachHani, 0, width / 2, 0, 255);
      tint(255, doTint);
      image(img1, mouseX, mouseY, 150, 150);
      pop();
    }
  }
}

// function mouseDragged() {
//   if (
//     mouseX > img1PosX - img1.width / 2 &&
//     mouseX < img1PosX + img1.width / 2 &&
//     mouseY > img1PosY - img1.height / 2 &&
//     mouseY < img1PosX + img1.height / 2
//   ) {
//     img1PosX = mouseX;
//     img1PosY = mouseY;
//   }
// }
