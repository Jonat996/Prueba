function traerInformacion(){
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"GET",
        datatype:"JSON",
        success:function respuesta(respuesta){
            console.log(respuesta);
            $("resultado").empty();
            pintarRespuestaCloud(respuesta.items);
        }
    });

}
function pintarRespuestaCloud(items){

    let mytable="<table>";
    mytable+="<td>"+"id"+"</td>"
    mytable+="<td>"+"messagetext"+"</td>"
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].brand+"</td>";
        mytable+="<td>"+items[i].model+"</td>";
        mytable+="<td>"+items[i].category_id+"</td>";
        mytable+="<td>"+items[i].name+"</td>";
        mytable+="<td> <button onclick='borrarElementoCloud("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}
function guardarInformacionCloud(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");

            traerInformacion();
            alert("Se ha guardado la información")
        }
        });
}
function editarInformacionCloud(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("bree");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("bree");

            traerInformacion();
            alert("Se ha actualizado la información")
        }
        });
}
function borrarElementoCloud(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado la informacion")
        }
        });
}