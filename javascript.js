const imgUrlsArr = [
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_01.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_02.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_03.jpg"
  ];
  
  const articleContainer = document.getElementById("article-container");
  
  let imgIndex = 0;
  
  
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  
  
  function previousImg() {
    imgIndex = (imgIndex > 0) ? imgIndex - 1 : imgUrlsArr.length - 1;
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }
  
  
  function nextImg() {
    imgIndex = (imgIndex < imgUrlsArr.length - 1) ? imgIndex + 1 : 0;
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }
  
  
  setInterval(() => {
    nextImg(); 
  }, 3000); 
  