let makeCars = (manufacturer: string, model: string, color?: string, type?: string):{ manufacturer: string, model: string, color?: string, type?: string } => {
    let car: { manufacturer: string, model: string, color?: string, type?: string } = {
                manufacturer,
                model,
              };
            if (color !== undefined) {
                car.color = color;
            }
            if (type !== undefined) {
                car.type = type;
            }
            return car;
    }
  console.log(makeCars('toyota', '2012'));
  console.log(makeCars('toyota', '2015', 'red'));
  console.log(makeCars('toyota', '2018', 'red', 'seden'));
  