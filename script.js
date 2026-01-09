document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  alert(`ধন্যবাদ, ${name}! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।`);
  this.reset();
});
