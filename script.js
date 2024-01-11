const videoElement = document.querySelector("#video");
const button = document.querySelector("#start");

//Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {}
}

button.addEventListener("click", async () => {
    button.disable = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    button.disable = false;
});

//On load
selectMediaStream();
