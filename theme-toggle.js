document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
  

    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme) {

      document.body.classList.toggle("dark-mode", savedTheme === "dark");
    } else {

      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.classList.toggle("dark-mode", systemPrefersDark);
    }
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme); 
    });
  });
  