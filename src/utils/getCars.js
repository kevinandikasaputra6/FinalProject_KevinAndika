function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );
      const typeDriver = isPositive ? "Lepas Kunci" : "Dengan Supir";
      const capacity = getRandomInt(2, 8);
      return {
        ...car,
        capacity,
        typeDriver,
        availableAt,
      };
    });
  };
  
  const listCars = async (filterer) => {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");
  
    if (!cachedCarsString === null) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = populateCars(cacheCars);
    } else {
      const response = await fetch(
        "https://api-car-rental.binaracademy.org/customer/car"
      );
      const body = await response.json();
      cars = populateCars(body);
  
      localStorage.setItem("CARS", JSON.stringify(cars));
    }
  
    if (filterer instanceof Function) return cars.filter(filterer);
  
    return cars;
  };
  
  export { listCars };