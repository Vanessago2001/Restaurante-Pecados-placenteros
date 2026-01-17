document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.getElementById("btnMenu");
  const sidebar = document.getElementById("sidebar");

  if (btnMenu && sidebar) {
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
