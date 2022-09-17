/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `cpu2 got message:`;
  console.log(response, data);
});
