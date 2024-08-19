function sendToMenu(){
  window.location="menu.html"
}

function sendToAbout(){
  window.location="about.html"
}

function sendToHome(){
  window.location="index.html"
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";

    var span = modal.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

document.getElementById('leftBar').style.gridArea = 'leftBar';
document.getElementById('rightBar').style.gridArea = 'rightBar';
document.getElementById('coffeeImage').style.gridArea = 'coffeeImage';
document.getElementById('barista1').style.gridArea = 'barista1';
document.getElementById('barista2').style.gridArea = 'barista2';
