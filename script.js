function toggleInfo(featureId) {
    const info = document.getElementById(featureId);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Initialize all feature info to be hidden
document.querySelectorAll('.info').forEach(info => {
    info.style.display = "none";
});
function toggleInfo(featureId) {
    const info = document.getElementById(featureId);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Initialize all feature info to be hidden
document.querySelectorAll('.info').forEach(info => {
    info.style.display = "none";
});
var typed = new Typed('#element', {
    strings: ['CORESEILD'],
    typeSpeed: 50,
  });