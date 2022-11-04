var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 
  color="black";
  width_of_line=1;
    
   canvas.addEventListener("mousedown",myMouseDown);
     
    function myMouseDown (e){

        mouseEvent="mousedown";
          
    } 
      
       canvas.addEventListener("mousemove", myMouseMove);
        
          function myMouseMove(e){
              
              current_position_of_x= e.clientX - canvas.offsetLeft;
              current_position_of_y= e.clientY - canvas.offsetTop;

              if(mouseEvent=="mousedown"){

               ctx.beginPath();
               ctx.strokeStyle=color;
               ctx.lineWidth=width_of_line;

                console.log("last x ="+ last_position_of_x + "last y="+ last_position_of_y);
                ctx.moveTo(last_position_of_x,last_position_of_y);

                console.log("current x ="+ current_position_of_x + "current y="+ current_position_of_y);
                ctx.lineTo(current_position_of_x,current_position_of_y);
                ctx.stroke();
               
              }

              last_position_of_x=current_position_of_x;
              last_position_of_y=current_position_of_y;

            

          }
           
          canvas.addEventListener("mouseup",myMouseUp);
     
            function myMouseUp (e){

             mouseEvent="mouseup";
             
            } 

            canvas.addEventListener("mouseleave",myMouseLeave);
     
                 function myMouseLeave (e){

                       mouseEvent="mouseleave";
          
            } 
             
                
           
