var loadImg;
let body = document.body
if (loadImg == undefined) {
  var loadImg = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIsUaU2g3NU0gK3FXpCAKScOYxXdsmNF3Clmv6OWdN9Pr2JhBJGwXYUqOPFVZZuMs9aVxi70PWPQwN3n0Eh9Xxkdr72W78UyhjC7AGzSUL5-JGhNdTfX7oec73Xmkv-3fp-kvyu882aZ_G500bFLj4JKhqrE2xAd2vkM7TUyq6t4tBKWGx11Ae5V15fKpo/w643-h482/loader.gif";
}
let loader = document.createElement('div')
loader.classList.add('loader')
loader.innerHTML =
  "<img src=" + loadImg + 'alt="load-img" class="load-img"><h2>Loading...</h2>';

  body.insertBefore(loader,body.firstChild)


window.addEventListener("load", () => {
  loader.classList.add("loaded");
  loader.addEventListener("animationend", () => {
    body.removeChild(loader);
  });

});
