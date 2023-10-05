//Catch player's
let ask = true;
while (ask) {
  let player = prompt("Pilih: Kertas, Gunting, Batu");

  //Catch Computer's
  let computer = Math.random();

  if (computer < 0.34) {
    computer = "Kertas";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "Gunting";
  } else {
    computer = "Batu";
  }

  //the rules
  let result = "";

  //   if (player == computer) {
  //     result = "Seri";
  //   } else if (player == "Kertas") {
  //     if (computer == "Batu") {
  //       result = "Menang";
  //     } else {
  //       result = "Kalah";
  //     }
  //   } else if (player == "Gunting") {
  //     if (computer == "Kertas") {
  //       result = "Kalah";
  //     } else {
  //       result = "Menang";
  //     }
  //   } else if (player == "Batu") {
  //     if (computer == "kertas") {
  //       result = "Kalah";
  //     } else {
  //       result = "Menang";
  //     }
  //   } else {
  //     result = "Masukan Pilihan Yang Benar";
  //   }

  if (player == computer) {
    result = "Seri";
  } else if (player == "Kertas") {
    result = computer == "Batu" ? "Menang" : "Kalah";
  } else if (player == "Gunting") {
    result = computer == "Kertas" ? "Menang" : "Kalah";
  } else if (player == "Batu") {
    result = computer == "Kertas" ? "Kalah" : "Menang";
  } else {
    result = "Masukan Pilihan Yang Benar";
  }

  alert(`Kamu Memilih ${player} dan komputer Memilih ${computer}\nMaka hasilnya ${result}`);
  ask = confirm("again?");
}
alert("Terimakasih sudah bermain ");
