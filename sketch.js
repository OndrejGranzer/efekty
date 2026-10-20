const menuItems = ["Linky", "Čáry máry", "Šachovnice"]

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (keyIsPressed && key === "1") {
    linky();
  } else if (keyIsPressed && key === "2") {
    caryMary();
  } else if (keyIsPressed && key === "3") {
    sachovnice();
  } else {
    background(220);
    drawMenu();
  }
}

function drawMenu() {
  fill(70, 100, 140)
  strokeWeight(3)
  stroke(75)
  rect(20, 20, 250, 200, 10);

  fill(0)
  strokeWeight(0)
  textSize(15)
  text("MENU - vyber efekt", 40, 50)

  strokeWeight(1)
  line(40, 60, 171, 60)

  strokeWeight(0)
  for(let i = 0; i < menuItems.length; i++) {
    text(`${i + 1} - ${menuItems[i]}`, 40, 80 + i * 20)
  }
}

function linky() {
  background(200)

  for(let x = 0; x < width; x += 10) {
    strokeWeight(random(2, 8))
    stroke(random(255), random(255), random(255))
    line(x, 0, x + random(-50, 50), height)
  }
}

function caryMary() {
  background(20)

  translate(300, 300)
  rotate(frameCount * 0.03)

  rectMode(CENTER)

  for(let i = 1; i <= 5; i++) {
    fill(random(255), random(255), random(255))
    rect(0, 0, i * 40, i * 40)
  }

  rectMode(CORNER)
}

function sachovnice() {
  background(255)

  let velikost = 50

  for(let x = 0; x < width; x += velikost) {
    for(let y = 0; y < height; y += velikost) {
      if ((x / velikost + y / velikost) % 2 === 0) {
        fill(0)
      } else {
        fill(255)
      }

      noStroke()
      rect(x, y, velikost, velikost)
    }
  }
}