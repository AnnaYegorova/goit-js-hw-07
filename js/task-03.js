const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const listImgs = document.querySelector('#gallery')
  listImgs.style.listStyle = "none"
  listImgs.style.display = "flex"

  
  const getMarkup = images.map(setMarkup).join("");

  listImgs.insertAdjacentHTML('afterbegin', getMarkup)
  
  function setMarkup({url, alt}) {
   return `<li><img src ="${url}" alt = "${alt}" width = "95%" height = "95%" ></li>`
  }

  