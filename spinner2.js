const spinnerAnimation = () => {
  let delay = 150;
  let spinnerAnimation = [
    "\r|   ",
    "\r/   ",
    "\r-   ",
    "\r\\   ",
    "\r|   ",
    "\r/   ",
    "\r-   ",
    "\r\\   ",
  ];

  for (const rotation of spinnerAnimation) {
    setTimeout(() => {
      process.stdout.write(rotation);
    }, delay);

    delay += 150;
  }
};

spinnerAnimation();
