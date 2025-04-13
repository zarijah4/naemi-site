function toggleSidePanel() {
    const panel = document.getElementById('sidePanel');
    // Переключаем ширину панели между 0 (скрыто) и 250px (открыто)
    if (panel.style.width === '250px') {
      panel.style.width = '0';
    } else {
      panel.style.width = '250px';
    }
  }
function signInAnonymously() {
  auth.signInAnonymously()
    .then(() => {
      alert("Вы вошли как гость!");
      window.location.href = "chat.html"; // или recipes.html
    })
    .catch((error) => {
      alert("Ошибка входа: " + error.message);
    });
}  
const user = auth.currentUser;
const username = user.isAnonymous ? "Гость" : user.email;
db.collection("messages").add({
  user: username,
  text,
  time: firebase.firestore.FieldValue.serverTimestamp()
});