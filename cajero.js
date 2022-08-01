function login(form){
    if(form.u.value=="Lety" && form.c.value=="1611" || form.u.value=="Emma" && form.c.value=="0809" || form.u.value=="Santi" && form.c.value=="0510" ) {
    location="principal.html";
    
    } else {
        alert("password incorrecto");
    }	

}

function mate() {
                        
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad=parseInt(document.getElementById('Cant').value);
            if((cuenta1Temporal-TemporalCantidad)>9){
            document.getElementById('C1').value=(Cantidad1-CantidadT);
            document.getElementById('C2').value=(Cantidad2+CantidadT); 
            alert("Se ha realizado la tranferencia")
            }       
             else{ alert("No procede la transferencia, tu cuenta no puede tener menos de 10 pesos")}
        
                                     
            }

            function mate2() {
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad=parseInt(document.getElementById('Cant').value);
            if((cuenta1Temporal-TemporalCantidad)>9){
                document.getElementById('C1').value=(Cantidad1-CantidadT);
                document.getElementById('C3').value=(Cantidad3+CantidadT); 
                }       
                 else{ alert("No procede la transferencia, tu cuenta no puede tener menos de 10 pesos")}
            
        }
        function mate3() {
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad=parseInt(document.getElementById('Cant').value);                   
            if((cuenta1Temporal+TemporalCantidad)>990) 
              {alert("Lo siento, no puedes tener mas de 990 pesos en tu cuenta")} 
              else {document.getElementById('C2').value=(Cantidad2-CantidadT);
                document.getElementById('C1').value=(Cantidad1+CantidadT); 
                }       
        }
        function mate4() {
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            document.getElementById('C2').value=(Cantidad2-CantidadT);
            document.getElementById('C3').value=(Cantidad3+CantidadT);           
        }
        function mate5() {
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad=parseInt(document.getElementById('Cant').value);                   
            if((cuenta1Temporal+TemporalCantidad)>990) 
              {alert("Lo siento, no puedes tener mas de 990 pesos en tu cuenta")} 
              else {document.getElementById('C3').value=(Cantidad3-CantidadT);
                document.getElementById('C1').value=(Cantidad1+CantidadT); 
                }       
               
        }
        function mate6() {
            var CantidadT=parseInt(document.getElementById('Cant').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            document.getElementById('C3').value=(Cantidad3-CantidadT);
            document.getElementById('C2').value=(Cantidad2+CantidadT);           
        }
        function mate7() {            
            var CantidadT=parseInt(document.getElementById('Dep').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);            
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad =parseInt(document.getElementById('Dep').value);
            if((cuenta1Temporal+TemporalCantidad)>990)
            alert("Lo siento, no puedes tener un saldo de... $" + (cuenta1Temporal+TemporalCantidad) + " pesos")
            else{
            document.getElementById('C1').value=(Cantidad1+CantidadT);  
            }
        }
        function mate8() {
            var CantidadT=parseInt(document.getElementById('Dep').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            document.getElementById('C2').value=(Cantidad2+CantidadT);  

        }
        function mate9() {
            var CantidadT=parseInt(document.getElementById('Dep').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            document.getElementById('C3').value=(Cantidad3+CantidadT);  

        }
        function mate10() {
            var CantidadT=parseInt(document.getElementById('Ret').value);
            var Cantidad1=parseInt(document.getElementById('C1').value);
            var cuenta1Temporal = parseInt(document.getElementById('C1').value);
            var TemporalCantidad =parseInt(document.getElementById('Ret').value);

            if((cuenta1Temporal-TemporalCantidad)<10)
            alert("Lo siento, no puedes tener un saldo de... $" + (cuenta1Temporal-TemporalCantidad) + " pesos")
            else{
            document.getElementById('C1').value=(Cantidad1-CantidadT);  
            }
        }


            
        function mate11() {
            var CantidadT=parseInt(document.getElementById('Ret').value);
            var Cantidad2=parseInt(document.getElementById('C2').value);
            document.getElementById('C2').value=(Cantidad2-CantidadT);  

        }
        function mate12() {
            var CantidadT=parseInt(document.getElementById('Ret').value);
            var Cantidad3=parseInt(document.getElementById('C3').value);
            document.getElementById('C3').value=(Cantidad3-CantidadT);  

        }
        

