var h,m,s,hrA,mnA,sA


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("orange");  
  
  translate(200,200)

  rotate(-90)
 h=hour()
 m=minute()
 s=second()

sA=map(s,0,60,0,360)
mnA=map(m,0,60,0,360)
hrA=map(h%12,0,12,0,360)
strokeWeight(4)

push()
rotate(sA)
//strokeWeight(5)
//stroke("")
line(0,0,90,0)
pop()
//////////////////////////
push()
rotate(mnA)
//strokeWeight(7)
line(0,0,60,0)
pop()
////////////////////////
push()
rotate(hrA)
//strokeWeight(9)
line(0,0,40,0)
pop()
/////////////////////
push()

strokeWeight(6)
stroke("red")
point(0,0)
pop()
noFill()
arc(0,0,250,250,0,sA)
arc(0,0,220,220,0,mnA)
arc(0,0,200,200,0,hrA)


}