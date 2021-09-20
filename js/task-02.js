const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const list = document.querySelector('#ingredients')
  
  const listIngredients = ingredients.map(elem => {
    const item = document.createElement('li') 
    item.textContent = elem
    return item;
  })
  list.append(...listIngredients)
  
  
    

  

   