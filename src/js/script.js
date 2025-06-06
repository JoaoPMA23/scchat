
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');
  const container = document.querySelector('.container');

  function toggleSidebar() {
    const isOpen = sidebar.classList.contains('show');
    sidebar.classList.toggle('show', !isOpen);
    overlay.classList.toggle('show', !isOpen);
    hamburger.classList.toggle('active', !isOpen);
    container.classList.toggle('sidebar-open', !isOpen);
  }

  function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.classList.remove('active');
    container.classList.remove('sidebar-open');
  }

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
});
