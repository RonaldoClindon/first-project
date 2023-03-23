let a = [65];
let c = a.map((c) => {
  c += 20;
  {
    return c;
  }
});
console.log(c);
