let extended_html = `
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
`;

let food = document.querySelector("#food");
let food_button_plus = document.querySelector(".food_button_plus");
let food_button_extension = document.querySelector("#food_button_extension");
let food_row = document.querySelector("#food_row");

function foodRadio() {
  food_button_plus.style.display = "inline";
  food_button_extension.style.display = "inline";
}

function food_button_plus_click() {
  food_row.insertAdjacentHTML("beforeend", extended_html);
}
