const firstFlavor = document.getElementById("flavor_one");
const firstFlavorText = document.getElementById("first_flavor");
const secondFlavor = document.getElementById("flavor_two");
const secondFlavorText = document.getElementById("second_flavor");
const thirdFlavor = document.getElementById("flavor_three");
const thirdFlavorText = document.getElementById("third_flavor");
const firstFlavorCounter = document.getElementById("flavor_one_counter");
const firstFlavorCount = document.getElementById("first_flavor_count");
const secondFlavorCounter = document.getElementById("flavor_two_counter");
const secondFlavorCount = document.getElementById("second_flavor_count");
const thirdFlavorCounter = document.getElementById("flavor_three_counter");
const thirdFlavorCount = document.getElementById("third_flavor_count");
const firstFlavorCountReset = document.getElementById("flavor_one_counter_reset");
const secondFlavorCountReset = document.getElementById("flavor_two_counter_reset");
const thirdFlavorCountReset = document.getElementById("flavor_three_counter_reset");
const clearEverythingButton = document.getElementById("clear_button");


const updateFlavorOneTotal = () => {
  if (firstFlavorText.innerHTML === 'flavor') {
    alert('Please enter a flavor before adding to the total')
  } else {
    let total = document.getElementById("first_flavor_count").innerHTML;
    total++;
    console.log('total', total);
    firstFlavorCount.innerHTML = total;
  }
}

const resetFirstFlavorCount = () => {
    let total = document.getElementById("first_flavor_count").innerHTML;
    total = 0;
    firstFlavorCount.innerHTML = total;
}

const updateFlavorTwoTotal = () => {
  if (secondFlavorText.innerHTML === 'flavor') {
    alert('Please enter a flavor before adding to the total')
  } else {
    let total = document.getElementById("second_flavor_count").innerHTML;
    total++;
    console.log('total', total);
    secondFlavorCount.innerHTML = total;
  }
}

const resetSecondFlavorCount = () => {
    let total = document.getElementById("second_flavor_count").innerHTML;
    total = 0;
    secondFlavorCount.innerHTML = total;
}

const updateFlavorThreeTotal = () => {
  if (thirdFlavorText.innerHTML === 'flavor') {
    alert('Please enter a flavor before adding to the total')
  } else {
    let total = document.getElementById("third_flavor_count").innerHTML;
    total++;
    console.log('total', total);
    thirdFlavorCount.innerHTML = total;
  }
}

const resetThirdFlavorCount = () => {
    let total = document.getElementById("third_flavor_count").innerHTML;
    total = 0;
    thirdFlavorCount.innerHTML = total;
}

const updateFirstFlavor = (e) => {
    const flavor = e.target.value;
    firstFlavorText.innerHTML = flavor;
}

const updateSecondFlavor = (e) => {
    const flavor = e.target.value;
    secondFlavorText.innerHTML = flavor;
}

const updateThirdFlavor = (e) => {
    const flavor = e.target.value;
    thirdFlavorText.innerHTML = flavor;
}

const clearEverything = () => {
  const text = "flavor"
  const total = 0;
  firstFlavorText.innerHTML = text;
  firstFlavorCount.innerHTML = total;
  secondFlavorText.innerHTML = text;
  secondFlavorCount.innerHTML = total;
  thirdFlavorText.innerHTML = text;
  thirdFlavorCount.innerHTML = total;
}

firstFlavor.addEventListener("input", updateFirstFlavor);
secondFlavor.addEventListener("input", updateSecondFlavor);
thirdFlavor.addEventListener("input", updateThirdFlavor);
firstFlavorCounter.addEventListener("click", updateFlavorOneTotal);
secondFlavorCounter.addEventListener("click", updateFlavorTwoTotal);
thirdFlavorCounter.addEventListener("click", updateFlavorThreeTotal);
firstFlavorCountReset.addEventListener("click", resetFirstFlavorCount);
secondFlavorCountReset.addEventListener("click", resetSecondFlavorCount);
thirdFlavorCountReset.addEventListener("click", resetThirdFlavorCount);
clearEverythingButton.addEventListener("click", clearEverything);



