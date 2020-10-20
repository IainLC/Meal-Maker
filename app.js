const menu = { 
    _courses: {
    appetizers: [],
    mains:[],
    desserts: [],
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(a){
     this._courses.appetizers = appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(m){
     this._courses.mains = mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set desserts(d){
     this._courses.desserts = desserts;
    },
      get courses(){
      return {
        appetizers: this.appetizers, 
        mains: this.mains,
        desserts: this.desserts
      };
  },
  addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price:dishPrice,
  };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random()*dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your maeal is ${appetizers.name}, ${mains.name} and ${desserts.name}, and the total price is ${totalPrice}.`;
  }
  };
  
  menu.addDishToCourse('appetizers','salad',4.00);
  menu.addDishToCourse('appetizers','fries',1.00);
  menu.addDishToCourse('appetizers','wings',5.00);
  
  menu.addDishToCourse('mains','steak',16.00);
  menu.addDishToCourse('mains','chicken',12.00);
  menu.addDishToCourse('mains','salmon',14.00);
  
  menu.addDishToCourse('desserts','ice cream',6.00);
  menu.addDishToCourse('desserts','coffee',5.00);
  menu.addDishToCourse('desserts','fruit',5.00);
  
  const meal = menu.generateRandomMeal();
    console.log(meal);
  
  
  