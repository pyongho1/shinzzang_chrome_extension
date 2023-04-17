chrome.storage.local.get(["image"], async function (result) {
  if (result.image) {
    document.body.style.backgroundImage = `url(${result.image})`;
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundPosition = "center";
  }
});
