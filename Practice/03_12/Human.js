class Human{
    constructor(
        name,
        age,
        x,y
    ){
      this.name = name,
      this.age = age,
      this.position = {x,y}
    }
    walk(x,y){
      this.position.x += x
      this.position.y += y
  
    }
  }

export default Human;