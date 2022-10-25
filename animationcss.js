const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const rcorners1 = entry.target.querySelector('.rcorners1');

    if (entry.isIntersecting) {
      rcorners1.classList.add('rcorners1-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    rcorners1.classList.remove('rcorners1-animation');
  });
});

observer.observe(document.querySelector('.rcorners1-wrapper'));
