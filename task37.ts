function make_shirts(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} T-shirt with the following message: ${message}`);
  }
  make_shirts();
  make_shirts('medium');
  make_shirts('small', 'Coding is wesome!');  