const sentence = "hello there from lighthouse labs";
interval = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 50;
};
setTimeout(() => {
  process.stdout.write("\n");
}, interval);