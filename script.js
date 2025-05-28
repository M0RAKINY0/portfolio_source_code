function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(el => {
      if (el.id !== 'profile') {
        el.style.display = 'none';
      }
    });
    
    if (sectionId !== 'profile') {
      document.getElementById(sectionId).style.display = 'block';
    }
  }
  
  function downloadCV() {
    // Using the exact filename from the directory
    const cvUrl = 'Kolade-Abdul-lateef-Resume.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Kolade-Abdul-lateef-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Windows-style console message
    const consoleMsg = document.createElement('div');
    consoleMsg.className = 'prompt';
    consoleMsg.innerHTML = 'C:\\portfolio&gt; <span style="color:#cccccc">Downloading CV... [100%]</span>';
    document.querySelector('.command-area').prepend(consoleMsg);
  }