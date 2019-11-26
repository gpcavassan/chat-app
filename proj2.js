
var ajax = new XMLHttpRequest();

ajax.open("GET", "http://localhost:8000/carros", true);
ajax.send();
ajax.onreadystatechange = function() {

      if (ajax.readyState == 4 && ajax.status == 200) {
            var clientes = JSON.parse(ajax.responseText);
            var doc = document.getElementById('clientes')
            var names , descs , prices

            console.log(clientes.length);
            console.log(clientes[0].Nome);

                  for(var i = 0 ; i < clientes.length ; i++){
                        names += "<label>Nome:<input name='nome' type='text' id='nome' size='100' value = " + clientes[i].Nome + "></label><br /><label>E-mail:<input name='nome' type='text' id='nome' size='100' value = " +clientes[i].Email + ">"
                  }

            doc.innerHTML = names
      }
}





