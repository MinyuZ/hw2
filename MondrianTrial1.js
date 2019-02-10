function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  fill(240,70,40,255);
  noStroke();
  rect(0, 0, mouseX, mouseY);
  
  fill(0);
  rect(mouseX, 0, 6, 400);
  
  fill(0);
  rect(0, mouseY, 400, 8);
  
  fill(0);
  rect(mouseX, 380, 365-mouseX, 8 );
  
  fill(0);
  rect(365, mouseY, 8, 400-mouseY);
  
  fill(255,230,0,255);
  rect(mouseX+6, 388, 0.5*(365-mouseX), 20);
  
  fill(0);
  rect(182.5+0.5*mouseX, 388, 8, 12);
  
  fill(0);
  rect(373, mouseY, 27, 160-0.4*mouseY);
  
  fill(0, 120, 200, 255);
  rect(373, 160+0.6*mouseY, 27, 240-0.6*mouseY)
}
