import {menu} from './menu.js'
const sectionContainer = document.querySelector('.section-center');
const btnsContainer = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)
  displayMenuBtns(menu)
})

const displayMenuItems = menu => {
  let displayMenu = menu.map(item => {
  return `
    <article class="menu-item">
      <img src="${item.img}" class="photo" alt="">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p>${item.desc}</p>
      </div>
    </article>`;
  })
  displayMenu = displayMenu.join('');
  sectionContainer.innerHTML = displayMenu;
}

const displayMenuBtns = menu => {

  let categories = menu.reduce((values,item) => {
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values;
    
  }, ['all'])
  
  const categoriesBtns = categories.map(category => {
    return `<button class="filter-btn" type="button" data-category="${category}">${category}</button>`
  }).join('')
  
  btnsContainer.innerHTML = categoriesBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach( btn => {
    btn.addEventListener("click", e => {
      
      const category = e.currentTarget.dataset.category;
  
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
  
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
  
    });
  });
}






  /**
   * El funcionamiento de .reduce para los arrays funciona de la
   * sigiente manera:
   * 
   * Gracias al metodo .reduce podemos recorrer el array y cada elemento
   * del array ejecutamos una funcion y lo almacenamos en el accumulador
   * 
   * Siempre hay que 'return' sino no funciona el .reduce
   * 
   * Values es == "all", que es un tableau donde meto el resultado de 
   * todo lo realizado en el .reduce  */ 