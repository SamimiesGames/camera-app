<template>
  <img class="camera-preview" alt="CameraPreview Unavailable" src="https://source.unsplash.com/1920x1080/?cinema camera"/>
</template>

<script>
export default {
  name: "CameraUnderlay"
}
</script>

<style scoped>
.camera-preview {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: black;
}
</style>