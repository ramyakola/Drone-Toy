 /** @type {HTMLCanvasElement} */


 let canvas = document.getElementById('canvas')
 let context= canvas.getContext('2d')
 let report = document.getElementById('report')
 var canvasX = 0 ; 
 var canvasY = 0  ;
 var direction;
 var angle = 0 ;
 context.font = "30px Comic Sans MS";
 context.textAlign="center"
 context.strokeStyle = "#FF0000";
context.strokeText("Place The Drone ",canvas.width/2, canvas.height/2);

context.strokeText(" to START The GAME",185,180);
 var image = new Image();
 image.src = 'images/dronn.png'

function ok(){
 var okX = document.querySelector('#X').value;
 var okY = document.querySelector('#Y').value;
 var dir = document.querySelector('#dir').value;
  canvasX  = parseInt(okX) ;
  canvasY  = parseInt(okY) ;
  direction = dir;
  console.log(canvasX,canvasY);
  console.log(typeof(canvasX))
  console.log(typeof(canvasY))

}
 function place(){
  ok()
   context.save()
   context.clearRect(0,0,canvas.width,canvas.height)
     context.drawImage(image,canvasX,canvasY)
     console.log(canvasX,canvasY)
     
 }

 function moveRight(){

  if(canvasX == canvas.width-50){
    alert('Drone reached to Boundary..Can not Move')
  }
   else{
   context.save()
   context.clearRect(0,0,canvas.width,canvas.height)
   context.translate(0,0)
   context.drawImage(image,canvasX +=10,canvasY)
   context.restore()
   console.log(canvasX,canvasY)
  
  }
 }

 function rRight(){ 
  angle -= 90 ;
  rotateImage(angle);
}
 function rotateImage(degrees){//rotation
    
   context.save()
   context.clearRect(0,0,canvas.width,canvas.height)
   context.translate(0,0)
   context.rotate(degrees*Math.PI/180*8);
   context.drawImage(image,canvasX ,canvasY)
   context.restore()
   console.log(canvasX,canvasY)
  
   
 }

report.addEventListener('click',()=>{
  alert (`X : ${canvasX}, Y : ${canvasY} and Direction is ${direction}`)
})
 