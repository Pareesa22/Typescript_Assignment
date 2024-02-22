function city_country(city: string, country: string ) {
    console.log(`${city} ,${country}.`);
  }
  // Calling the function for three different cities
  city_country("Karachi", "Pakistan");
  city_country("New York","USA"); // This will use the default country
  city_country("Paris", "France"); 