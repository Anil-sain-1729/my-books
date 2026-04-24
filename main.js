

let currentPDF = "";

// Open PDF
function openPDF(element, file) {
    document.getElementById("pdfViewer").src = file;
    currentPDF = file;

    document.getElementById("fileName").innerText = file.split("/").pop();

    let items = document.querySelectorAll(".pdf-item");
    items.forEach(i => i.classList.remove("active"));
    element.classList.add("active");
}

// Download
function downloadPDF() {
    if (currentPDF === "") {
        alert("Select PDF first");
        return;
    }
    window.open(currentPDF, "_blank");
}

// Toggle group
function toggleGroup(id) {
    let el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}
