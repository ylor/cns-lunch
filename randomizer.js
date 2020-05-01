var array = [
  ["🍖", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍗", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥩", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥓", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍔", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍟", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍕", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🌭", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥪", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🌮", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🌯", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥙", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍳", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥘", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍲", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥣", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥗", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍿", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍱", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍘", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍙", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍚", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍛", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍜", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍝", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍣", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🍤", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥟", "11625 N Kendall Dr, Miami, FL 33176"],
  ["🥡", "11625 N Kendall Dr, Miami, FL 33176"],
];

var randomRestaurant = array[(Math.random() * array.length) | 0];

function buttonFunction() {
  document.getElementById("title").innerHTML = "LUNCH!";
  document.getElementById("pick").style.display = "none";
  document.getElementById("place").innerHTML = randomRestaurant[0]; //+
  //'<br><a href="https://maps.google.com/?q=' +
  //randomRestaurant[1] +
  //'">' +
  //randomRestaurant[1] +
  //"</a>";
}
