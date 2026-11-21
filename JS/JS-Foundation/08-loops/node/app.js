const row = Number(process.argv[2] || 5);
const col = Number(process.argv[3] || 6);


let availableSeats =  0;
let reservedSeats = 0;

// console.log(`Rows: ${row}`);
// console.log(`Cols: ${col}`);

if (
  !Number.isInteger(row) ||
  !Number.isInteger(col) ||
  row < 1 ||
  col < 1 ||
  row > 20 ||
  col > 20
) {
  console.log("Rows and columns must be integers from 1 to 20");
  process.exit(1);
}

console.log("");
console.log("==============================================");
console.log("             SMART SEAT ALLOCATION            ");
console.log("==============================================");
console.log("Legend: A = Available, R = Reserved");
console.log("");

for (let i = 1; i <= row; i++) {
  let line = `Row ${String(row).padStart(2, "0")}`;

  for (let j = 1; j <= col; j++) {
    if ((i + j) % 4 === 0) {
      line += "[R]";

     reservedSeats++;

    } else {
      line += "[A]";
      availableSeats++; 
      
    }
  }

  console.log(line);
}

console.log("");
console.log("==================================================");
