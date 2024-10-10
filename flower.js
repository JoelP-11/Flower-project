window.onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    document.getElementById('start-button').addEventListener('click', function() {
      document.getElementById('initial-screen').style.display = 'none';
      document.getElementById('flower-screen').style.display = 'block';
    });
  };
  