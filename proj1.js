
var ajax = new XMLHttpRequest();

ajax.open("GET", "https://api-all2.azurewebsites.net/api/lanche", true);
ajax.send();
ajax.onreadystatechange = function() {

      if (ajax.readyState == 4 && ajax.status == 200) {
            var lanche = JSON.parse(ajax.responseText);
            var doc = document.getElementById('lanches')
            var names , descs , prices

            console.log(lanche.length);
            console.log(lanche[1].nome);

                  for(var i = 0 ; i < lanche.length ; i++){
                        names += "<label>Nome:<input name='nome' type='text' id='nome' size='100' value = " + lanche[i].nome + "></label><br /><label>Descricão:<input name='nome' type='text' id='nome'  value = " +lanche[i].descricao + "></label><br /><label>Preço:<input name='nome' type='text' id='nome' size='100' value = " +lanche[i].preco +"></label><br />"
                  }

            doc.innerHTML = names
      }
}





