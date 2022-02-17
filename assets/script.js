// -------------------------------- selected keys -------------------------------

document.querySelector(".provisioning_class").style.display = "block";
document.querySelector(".regulating_class").style.display = "none";

let selectedData = "";

document
  .querySelector("#selectedClass")
  .addEventListener("click", function (e) {
    if (e.target.value == "provisioning") {
      document.querySelector(".provisioning_class").style.display = "block";
      document.querySelector(".regulating_class").style.display = "none";
    } else {
      document.querySelector(".regulating_class").style.display = "block";
      document.querySelector(".provisioning_class").style.display = "none";
    }
  });

// -------------------------------- selected keys -------------------------------

//  -------------------------------------------------- provisioning ------------------------------------------------------------

// ------------------- food ----------------------------------

let food = document.querySelector("#food");
let food_button_plus = document.querySelector(".food_button_plus");
let food_button_extension = document.querySelector("#food_button_extension");
let food_row = document.querySelector("#food_row");

function foodRadio() {
  food_button_plus.style.display = "inline";
  food_button_extension.style.display = "inline";
}

function food_button_plus_click() {
  food_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// end - food -----------------------------------------------

// ------------ water --------------------------------

let water = document.querySelector("#water");
let water_button_plus = document.querySelector(".water_button_plus");
let water_button_extension = document.querySelector("#water_button_extension");
let water_row = document.querySelector("#water_row");

function waterRadio() {
  water_button_plus.style.display = "inline";
  water_button_extension.style.display = "inline";
}

function water_button_plus_click() {
  water_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------ water --------------------------------

// ------------ raw --------------------------------

let raw = document.querySelector("#raw");
let raw_button_plus = document.querySelector(".raw_button_plus");
let raw_button_extension = document.querySelector("#raw_button_extension");
let raw_row = document.querySelector("#raw_row");

function rawRadio() {
  raw_button_plus.style.display = "inline";
  raw_button_extension.style.display = "inline";
}

function raw_button_plus_click() {
  raw_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------ raw --------------------------------

// ------------ raw --------------------------------

let generic = document.querySelector("#generic");
let generic_button_plus = document.querySelector(".generic_button_plus");
let generic_button_extension = document.querySelector(
  "#generic_button_extension"
);
let generic_row = document.querySelector("#generic_row");

function genericRadio() {
  generic_button_plus.style.display = "inline";
  generic_button_extension.style.display = "inline";
}

function generic_button_plus_click() {
  generic_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------ raw --------------------------------

// ------------ medicinal --------------------------------

let medicinal = document.querySelector("#medicinal");
let medicinal_button_plus = document.querySelector(".medicinal_button_plus");
let medicinal_button_extension = document.querySelector(
  "#medicinal_button_extension"
);
let medicinal_row = document.querySelector("#medicinal_row");

function medicinalRadio() {
  medicinal_button_plus.style.display = "inline";
  medicinal_button_extension.style.display = "inline";
}

function medicinal_button_plus_click() {
  medicinal_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------ medicinal --------------------------------

// ------------ ornamental --------------------------------

let ornamental = document.querySelector("#ornamental");
let ornamental_button_plus = document.querySelector(".ornamental_button_plus");
let ornamental_button_extension = document.querySelector(
  "#ornamental_button_extension"
);
let ornamental_row = document.querySelector("#ornamental_row");

function ornamentalRadio() {
  ornamental_button_plus.style.display = "inline";
  ornamental_button_extension.style.display = "inline";
}

function ornamental_button_plus_click() {
  ornamental_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------ ornamental --------------------------------

//  -------------------------------------------------- provisioning ------------------------------------------------------------

//  ---------------------------------------------------- regulating ------------------------------------------------------------

// ------------------------------ ornamental 2 ---------------------------------

let ornamental2 = document.querySelector("#ornamental2");
let ornamental2_button_plus = document.querySelector(
  ".ornamental2_button_plus"
);
let ornamental2_button_extension = document.querySelector(
  "#ornamental2_button_extension"
);
let ornamental2_row = document.querySelector("#ornamental2_row");

function ornamental2Radio() {
  ornamental2_button_plus.style.display = "inline";
  ornamental2_button_extension.style.display = "inline";
}

function ornamental2_button_plus_click() {
  ornamental2_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ ornamental 2 ---------------------------------

// ------------------------------ climate ---------------------------------

let climate = document.querySelector("#climate");
let climate_button_plus = document.querySelector(".climate_button_plus");
let climate_button_extension = document.querySelector(
  "#climate_button_extension"
);
let climate_row = document.querySelector("#climate_row");

function climateRadio() {
  climate_button_plus.style.display = "inline";
  climate_button_extension.style.display = "inline";
}

function climate_button_plus_click() {
  climate_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ climate ---------------------------------

// ------------------------------ regulation ---------------------------------

let regulation = document.querySelector("#regulation");
let regulation_button_plus = document.querySelector(".regulation_button_plus");
let regulation_button_extension = document.querySelector(
  "#regulation_button_extension"
);
let regulation_row = document.querySelector("#regulation_row");

function regulationRadio() {
  regulation_button_plus.style.display = "inline";
  regulation_button_extension.style.display = "inline";
}

function regulation_button_plus_click() {
  regulation_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ regulation ---------------------------------

// ------------------------------ moderation of extreme events ---------------------------------

let moderation = document.querySelector("#moderation");
let moderation_button_plus = document.querySelector(".moderation_button_plus");
let moderation_button_extension = document.querySelector(
  "#moderation_button_extension"
);
let moderation_row = document.querySelector("#moderation_row");

function moderationRadio() {
  moderation_button_plus.style.display = "inline";
  moderation_button_extension.style.display = "inline";
}

function moderation_button_plus_click() {
  moderation_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ moderation of extreme events ---------------------------------

// ------------------------------ Waste Treatment ---------------------------------

let waste = document.querySelector("#waste");
let waste_button_plus = document.querySelector(".waste_button_plus");
let waste_button_extension = document.querySelector("#waste_button_extension");
let waste_row = document.querySelector("#waste_row");

function wasteRadio() {
  waste_button_plus.style.display = "inline";
  waste_button_extension.style.display = "inline";
}

function waste_button_plus_click() {
  waste_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ Waste Treatment ---------------------------------

// ------------------------------ Erosion prevension ---------------------------------

let erosion = document.querySelector("#erosion");
let erosion_button_plus = document.querySelector(".erosion_button_plus");
let erosion_button_extension = document.querySelector(
  "#erosion_button_extension"
);
let erosion_row = document.querySelector("#erosion_row");

function erosionRadio() {
  erosion_button_plus.style.display = "inline";
  erosion_button_extension.style.display = "inline";
}

function erosion_button_plus_click() {
  erosion_row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-3">
    <div class="form-field" style="margin-top: 30px">
    <label for="">SubES Name</label>
    <input type="text" />

    <label for="">SubES Quantity</label>
    <input type="text" />

    <label for="">SubES Quantity Unit</label>
    <input type="text" />

    <div>
        <label for="">SubES Value</label><br />
        <input type="text" />
    </div>

    <label for="">SubES Value Unit</label>
    <input type="text" />

    <label for="">SubES Validation</label>
    <input type="text" />
    </div>
    </div>
  `
  );
}

// ------------------------------ Erosion prevension ---------------------------------

//  ---------------------------------------------------- regulating ------------------------------------------------------------
