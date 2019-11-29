// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyBrw8Lx9jXwSOeRSq0x219i3CF_tVIxUiM",
  authDomain: "chat-5c83e.firebaseapp.com",
  databaseURL: "https://chat-5c83e.firebaseio.com",
  projectId: "chat-5c83e",
  storageBucket: "chat-5c83e.appspot.com",
  messagingSenderId: "651772955562",
  appId: "1:651772955562:web:7c7d9a33d1da509d9e79d3"
};

// Initialize Firebase
  var conection = firebase.initializeApp(firebaseConfig);
 
  var connectedRef = firebase.database().ref("chat");
  connectedRef.on("value", function(snap) {
    if (snap.val() != null) {
      console.log("connected");
    } else {
      console.log("not connected");
      console.log(snap)
    }
  });

  document.getElementById("send").addEventListener('click', function(e){
   var u = document.getElementById('user');
   var msg = document.getElementById('msg');

   conection.database().ref('chat').push({ 
       user:u.value,
       txt:msg.value.replace("<","&lt;").replace(">","&gt;").replace("&","&amp;")

   })
       msg.value='';
  });

  var msgs = document.getElementById('msgs');
  conection.database().ref('chat').on('value', function(snp){
      msgs.innerHTML='';
      snp.forEach(function(e) {
          var x = e.val();
          msgs.innerHTML+=`<p>${x.user}: ${x.txt.replace("<","&lt").replace(">","&gt;").replace("&","&amp;")}</p>`
      });
  });

  function openViaCep(){
    window.open('via-cep.html','pagename','resizable,height=600,width=500');
  }

  function openProj1(){
    window.open('proj1.html','pagename','resizable,height=600,width=500');
  }

  function openProj2(){
    window.open('proj2.html','pagename','resizable,height=600,width=500');
  }

  function openProj1Insert(){
    window.open('proj1Insert.html','pagename','resizable,height=600,width=500');
  }

  function openProj2Insert(){
    window.open('proj2Insert.html','pagename','resizable,height=600,width=500');
  }


