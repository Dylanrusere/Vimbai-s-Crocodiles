
// Counter Section
let targetNumber1 = 999;
let targetNumber2 = 299;
let targetNumber3 = 14;
let targetNumber4 = 9;
let counter1 = 500;
let counter2 = 100;
let counter3 = 0;
let counter4 = 0;
let counterElement1 = document.getElementById("counter_clients");
let counterElement2 = document.getElementById("counter_deliveries");
let counterElement3 = document.getElementById("counter_awards");
let counterElement4 = document.getElementById("counter_certifications");

function incrementCounter1() {
    counter1++;
    counterElement1.textContent = counter1;

    if (counter1 <= targetNumber1) {
      setTimeout(incrementCounter1, 6);
    }
  }

  function incrementCounter2() {
    counter2++;
    counterElement2.textContent = counter2;

    if (counter2 <= targetNumber2) {
      setTimeout(incrementCounter2, 15);
    }
  }

  function incrementCounter3() {
    counter3++;
    counterElement3.textContent = counter3;

    if (counter3 <= targetNumber3) {
      setTimeout(incrementCounter3, 300);
    }
  }

  function incrementCounter4() {
    counter4++;
    counterElement4.textContent = counter4;

    if (counter4 <= targetNumber4) {
      setTimeout(incrementCounter4, 450);
    }
  }

incrementCounter1();
incrementCounter2();
incrementCounter3();
incrementCounter4();