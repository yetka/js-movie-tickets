function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
  var price = 10;
  if (this.movie === "lebowski" || this.movie === "hangover") {
    price += 2;
    console.log(price);
  }
  if (this.time === "morning" || this.time === "afternoon") {
    price -= 2;
    console.log(price);
  }
  if (this.age > 60 || this.age < 12) {
    price -= 2;
    console.log(price);
  }
  return price;
}

exports.ticketModule = Ticket;
