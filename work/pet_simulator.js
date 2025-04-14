const name = ["와플", "강동", "애옹", "크롱", "라임", "초코", "바다"];
const family = ["강아지", "고양이", "도마뱀", "앵무새", "잉어"];
const age = [1, 3, 2.4, 5, 8, 1.4, 10, 11, 13, 15];
function Random(menu) {
  return menu[Math.floor(Math.random() * menu.length)];
}

function plus(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

class Pet {
  constructor(name, age, family) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.energy = 50;
    this.hunger = 50;
  }
  getInfo() {
    console.log(
      `이름:${this.name}/종류:${this.family}/나이:${this.age}/에너지:${this.energy}/배고픔:${this.hunger}`
    );
  }
  eat() {
    this.energy = plus(this.energy + 10);
    this.hunger = plus(this.hunger - 30);
  }
  play() {
    this.energy = plus(this.energy - 20);
    this.hunger = plus(this.hunger + 20);
    this.age = plus(this.age + 0.1);
  }
  sleep() {
    this.energy = plus(this.energy + 40);
    this.hunger = plus(this.hunger + 10);
  }
}

class Dog extends Pet {
  constructor(name, age) {
    super(name, "Dog", age);
  }
  speak() {
    console.log("멍멍!");
  }
}
class Cat extends Pet {
  constructor(name, age) {
    super(name, "Cat", age);
  }
  speak() {
    console.log("야용!");
  }
}
class bird extends Pet {
  constructor(name, age) {
    super(name, "bird", age);
  }
  speak() {
    console.log("짹짹!");
  }
}
class lizard extends Pet {
  constructor(name, age) {
    super(name, "lizard", age);
  }
  speak() {
    console.log("크으윽!");
  }
}
class fish extends Pet {
  constructor(name, age) {
    super(name, "fish", age);
  }
  speak() {
    console.log("뻐끔!");
  }
}
class Petmanager {
  constructor() {
    this.pet = [];
  }
  addpet(pet) {
    this.pet.push.pets();
  }
  simulateDay(day) {
    console.log(`--- Day ${day} ---`);
    this.pets.forEach((pet) => {
      console.log(`[${pet.family}] ${pet.name}: ${pet.speak()}`);
      const game = Random(["eat", "play", "sleep"]);
      pet[action]();
      console.log(`${pet.name}은(는) ${game}()을 했습니다.`);
      console.log(pet.getInfo());
    });
    console.log("----------------------");
  }
  showAllPets() {
    console.log(":클립보드: 전체 펫 목록");
    this.pets.forEach((pet) => {
      console.log(pet.getInfo());
    });
  }
}
const manager = new Petmanager();

const petCount = Math.floor(Math.random() * 3) + 3;

for (let i = 0; i < petCount; i++) {
  const names = Random(name);
  const families = Random(family);
  const ages = Random(age);

  let pet;
  if (families === "Dog") pet = new Dog(names, ages);
  else if (families === "Cat") pet = new Cat(names, ages);
  else if (families === "lizard") pet = new lizard(names, ages);
  else if (families === "bird") pet = new bird(names, ages);
  else if (families === "fish") pet = new fish(names, ages);

  manager.addpet(pet);
}

manager.showAllPets();

const days = Math.floor(Math.random() * 3) + 3;

for (let day = 1; day <= days; day++) {
  manager.simulateDay(day);
}
