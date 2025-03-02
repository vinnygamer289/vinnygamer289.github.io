document.addEventListener("DOMContentLoaded", function() {
  let countdown = 10; // Thời gian đếm ngược
  const countdownEl = document.getElementById("countdown");
  const downloadBtn = document.getElementById("downloadBtn");
  
  // Lấy file từ URL (?file=...)
  const urlParams = new URLSearchParams(window.location.search);
  const filePath = urlParams.get("file");
  
  if (!filePath) {
    document.querySelector("h2").innerText = "Lỗi: Không tìm thấy file!";
    return;
  }
  
  const timer = setInterval(() => {
    countdown--;
    countdownEl.textContent = countdown;
    
    if (countdown <= 0) {
      clearInterval(timer);
      downloadBtn.classList.add("enabled");
      downloadBtn.disabled = false;
      downloadBtn.onclick = () => window.location.href = filePath;
    }
  }, 1000);
});