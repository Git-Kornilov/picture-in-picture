"use strict";

const videoEl = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass ro videoEl, play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoEl.srcObject = mediaStream;

    videoEl.onloadedmetadata = () => videoEl.play();
  } catch (e) {
    console.error("Select media stream:", e);
  }
};

button.addEventListener("click", async () => {
  button.ariaDisabled = true;

  await videoEl.requestPictureInPicture();

  button.ariaDisabled = false;
});

selectMediaStream();
