//TUS ENLACES DE FIREBASE
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
room_name = localStorage.getItem("room name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            username: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "proposito") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                        user = message_data["username"];
                        message = message_data["message"];
                        like = message_data["like"];
                        row = '<h4>' + user + '</h4><h4 class="message_h4">' + message + '</h4><button id="' + firebase_message_id + '" class="btn btn-warning" value="' + like + '" onclick="updateLike(this.id)">👍🏻' + like + '</button>'
                        document.getElementById("output").innerHTML += row;
                        //Termina código
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
function back() {
      window.location = "atlantis_room.html";
}
function updateLike(message_id){
      likes = document.getElementById(message_id).value;
      updated_Likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({like:updated_Likes})
}