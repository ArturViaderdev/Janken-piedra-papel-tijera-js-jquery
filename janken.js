var x;
x=$(document);
x.ready(inicializarEventos);
var partidainiciada=0;
var turno=0;
var seleccionadoa;
var seleccionadob;

function inicializarEventos()
{
  var x;
  x=$("#fight");
  x.click(pulsafight);

}

function ratonsale()
{
    x=$(this);
    x.animate.stop;
}

function opcionclick()
{
    var selecccionado;
    if(partidainiciada==1)
    {
        var x;
        x=$(this);
        seleccionado=x.attr("id")
        
        if(turno==0)
        {
            seleccionadoa=seleccionado;
            x=$("#player1");
            x.css('background-color','transparent');
            x=$("#player2");
            x.css('background-color','blue');
            x=$("#jugador2 .opcion");
            x.css('display','inline');
            
            
            x=$("#jugador2 .opcion");
            x.mouseover(ratonopcion);
            x.click(opcionclick);
        
            x=$("#jugador1 .opcion");
            x.css('display','none');
            x.off();
            turno=1;
            
        }
        else
        {
            seleccionadob=seleccionado;
            x=$("#player2");
            x.css('background-color','transparent');
            x=$("#player1");
            x.css('background-color','blue');
            /*
            x=$("#jugador1 .opcion");
            x.css('display','inline');
            */
           /* var x;
            x=$("#jugador1 .opcion");
            x.mouseover(ratonopcion);
            x.click(opcionclick);*/
               
            x=$("#jugador2 .opcion");
            x.css('display','none');
            x.off();
            turno=0;
            
            var ganador=compruebaganador();
            x=$(".ganadores");
            x.css('display','block');
            
            switch (ganador){
                case 0:
                        x=$("#draw");
                        x.css('display','block');
                        x=$("#player1Win");
                        x.css('display','none');
                        x=$("#player2Win");
                        x.css('display','none');
                    break;
                case 1:
                        x=$("#draw");
                        x.css('display','none');
                        x=$("#player1Win");
                        x.css('display','block');
                        x=$("#player2Win");
                        x.css('display','none');
                    break;
                case 2:
                        x=$("#draw");
                        x.css('display','none');
                        x=$("#player1Win");
                        x.css('display','none');
                        x=$("#player2Win");
                        x.css('display','block');
                    break;
                    
            }
            
            x=$("#"+ seleccionadoa);
            x.css('display','block');
            
            x.animate(
            {
                left:'150px',
                top:'150px'
            },1000, function(){
                x.stop();
            });  
          
            x=$("#"+ seleccionadob);
            x.css('display','block');
          
      
            x.animate(
            {
                left:'-150px',
                top:'150px'
            },1000, function(){
                x.stop();
            });     
         
            partidainiciada=0;
            
            
        }
    }
}

function compruebaganador()
{
    var resultado; //0 empate, 1 jugador1, 2 jugador2
 
    if(seleccionadoa=="rock1")
    {
            if(seleccionadob=="rock2")
            {
                resultado=0;
            }
            else if(seleccionadob="paper2")
            {
                resultado=2;
            }
            else if(seleccionado="scissor2")
            {
                 resultado=1;   
            }
    }
    else if(seleccionadoa=="paper1")
    {
            if(seleccionadob=="rock2")
            {
                resultado=1;
            }
            else if(seleccionadob="paper2")
            {
                resultado=0;
            }
            else if(seleccionado="scissor2")
            {
                resultado=2; 
            }
    }
    else if(seleccionadoa=="scissor1")
    {
            if(seleccionadob=="rock2")
            {
                resultado=2;  
            }
            else if(seleccionadob="paper2")
            {
                resultado=1;
            }
            else if(seleccionado="scissor2")
            {
                resultado=0;    
            }
    }
    return resultado;
}

function quitaultimaletra(selecciona)
{
    var resultado;
    resultado = selecciona.substr(0,selecciona.length-1);
    return resultado;
}

function ratonopcion()
{
    if(partidainiciada==1)
    {
        x=$(this);
        x.animate(
        {
            width:'140px',
            height:'140px'
        },250, function(){
            x.stop();
        }); 
        
        if(turno==0)
        {
           x=$(".opcion").not(this).not("#jugador2 .opcion"); 
        }
        else
        {
               x=$(".opcion").not(this).not("#jugador1 .opcion");  
        }
        
        
        //$(this).removeClass('opcion');
        x.animate(
        {
            width:'100px',
            height:'100px'
        },250, function(){
            x.stop();
        }); 
        
        
    }
}

function pulsafight()
{
    if(partidainiciada==0)
    {
        var x;
        x=$("#jugador1 .opcion");
        x.mouseover(ratonopcion);
        x.click(opcionclick);
        partidainiciada=1;
        
        x=$(".opcion");
        x.height('120px');
    
        x.css('position','relative');
        x.css('left','0px');
        x.css('top','0px');
        x=$("#player1");
        x.css('background-color','blue');
        x=$(".ganadores");
        x.css('display','none');
        x=$("#jugador2 .opcion");
        x.css('display','none');
    }
    
}