function greet() {
    alert("Привееееет")
}
function toggleSidePanel() {
    const panel = document.getElementById('sidePanel');
    // Переключаем ширину панели между 0 (скрыто) и 250px (открыто)
    if (panel.style.width === '250px') {
      panel.style.width = '0';
    } else {
      panel.style.width = '250px';
    }
  }