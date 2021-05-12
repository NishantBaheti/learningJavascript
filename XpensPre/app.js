const totalExpenseEl = document.querySelector("#totalExpense");
const inputAmountEl = document.querySelector("#inputAmount");
const inputDescriptionEl = document.querySelector("#inputDescription");
const addExpenseEl = document.querySelector("#btnAddExpense");
const tableElement = document.querySelector("#expenseTable");

let totalExpense = 0;
let expenseArr = [];

totalExpenseEl.textContent = totalExpense;

function refreshExpenseTable(arr) {
  const allExpenses = arr.map((expense) => createListItem(expense));

  tableElement.innerHTML = allExpenses.join("");
}

function refreshTotalExpense(value) {
  totalExpenseEl.textContent = value;
}

function addExpenseToTotal() {
  const textAmount = inputAmountEl.value;
  const expenseDescription = inputDescriptionEl.value;
  const expenseAmount = parseFloat(textAmount);
  const dateValue = new Date();

  if (expenseAmount) {
    expenseArr.push({
      tick: dateValue.getTime(),
      amount: expenseAmount,
      desc: expenseDescription,
      date: dateValue,
    });
    totalExpense += expenseAmount;
    refreshExpenseTable(expenseArr);
  }
  refreshTotalExpense(totalExpense);
}

function deleteRecord(tick) {
  const filteredArray = [];
  for (let i = 0; i < expenseArr.length; i++) {
    if (expenseArr[i].tick === tick) {
      // console.log(expenseArr[i]);
      totalExpense -= expenseArr[i].amount;
    } else {
      filteredArray.push(expenseArr[i]);
    }
  }

  expenseArr = filteredArray;
  refreshTotalExpense(totalExpense);
  refreshExpenseTable(expenseArr);
}

function getMomentString(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function createListItem({ desc, amount, date, tick }) {
  return `
        <li class="list-group-item d-flex justify-content-between">
          <div class="d-flex flex-column">
            ${desc}
            <small class="text-muted">${getMomentString(date)}</small>
          </div>
          <div>
            <span class="px-5">
              ${amount} Rs.
            </span>
            <button type="button" onclick=deleteRecord(${tick}) class="btn btn-outline-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>`;
}

addExpenseEl.addEventListener("click", addExpenseToTotal, false);
