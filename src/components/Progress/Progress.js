const progresses = document.querySelectorAll(`.ProgressItem`);

progresses.forEach(progress => {
  const bar = progress.querySelector(`.ProgressItem-bar`);
  const width = bar.dataset.width > 100 ? 100 : bar.dataset.width;
  bar.style.width = `${width}%`;
});
