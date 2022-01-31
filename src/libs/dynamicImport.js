const importDestination = (url, setImage) => {
  import('../assets/destination/image-' + url + '.webp').then(image => setImage(image.default));
}

const importCrew = (url, setImage) => {
  import('../assets/crew/image-' + url + '.webp').then(image => setImage(image.default));
}

const importTechnology = (url, setImage) => {
  import('../assets/technology/image-' + url + '.jpg').then(image => setImage(image.default));
}

export { importDestination, importCrew, importTechnology }