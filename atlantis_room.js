var firebaseConfig = {
      apiKey: "AIzaSyBCs127RuXUSSgurkrEUbiUwInl1zU7i48",
      authDomain: "atlantis-b8235.firebaseapp.com",
      databaseURL: "https://atlantis-b8235-default-rtdb.firebaseio.com",
      projectId: "atlantis-b8235",
      storageBucket: "atlantis-b8235.appspot.com",
      messagingSenderId: "730254551570",
      appId: "1:730254551570:web:6bb9a0f17c4d260d4186cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("holaaa").innerHTML = "Bienvenid@ " + username + " ¯\\_(ツ)_/¯"
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            proposito: "agregar sala"
      })
      document.getElementById("room_name").value = "";
      localStorage.setItem("room_name", room_name);
      window.location = "atlantis_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  row = '<div class="room_name" id="'+Room_names+'" onclick="redirectToRoomName(this.id)">'+Room_names+'</div><hr>';
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room name", name);
      window.location = "atlantis_page.html"
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
