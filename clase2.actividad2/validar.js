//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo['nota1']="errornota1";
arreglo['nota2']="errornota2";
arreglo['nota3']="errornota3";
arreglo['nota4']="errornota4";
arreglo['examen']="errorexamen";

function validar(obj){
    if(obj.value < 1 || obj.value > 7){
        document.getElementById(arreglo[obj.id]).innerHTML ='<div class="alert alert-danger" role="alert"> Nota no valida!</div>';
        return false;
    }
    else{
        document.getElementById(arreglo[obj.id]).innerHTML ="";
    }
    return true;

}



function validarTodos(){
    document.getElementById('mensajefinal').innerHTML = '';
    for(i in arreglo){
        //valido
        if(document.getElementById(arreglo[i]).innerHTML != ""){
            document.getElementById('mensajefinal').innerHTML = '<div class="alert alert-danger" role="alert"> Hay campos no completados!</div>';
            return false;
        }
    }
    var entrada = new Array();
    entrada[0]=document.getElementById('nota1').value;
    entrada[1]=document.getElementById('nota2').value;
    entrada[2]=document.getElementById('nota3').value;
    entrada[3]=document.getElementById('nota4').value;
    entrada[4]=document.getElementById('examen').value;
    var parcial = (parseFloat(entrada[0]) + parseFloat(entrada[2]) + parseFloat(entrada[3]) +  parseFloat(entrada[4]))/4;
    var final = parcial*0.7 + parseFloat(entrada[4])*0.3
    document.getElementById("notaParcial").innerHTML = parcial;
    document.getElementById("notaFinal").innerHTML = final.toFixed(2);;

    if( parcial<4 || final<4){
        document.getElementById("estado").innerHTML = "Reprobado";
        document.getElementById("estado").style = "color: red";
    }
    else{
        document.getElementById("estado").innerHTML = "Aprobado";
        document.getElementById("estado").style = "color: green";
    }

}
