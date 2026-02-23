let selectedRow = null;

function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  let formData = {};
  formData["nama"] = document.getElementById("nama").value;
  formData["telepon"] = document.getElementById("telepon").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  let table = document
    .getElementById("contactList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cells1 = newRow.insertCell(0);
  cells1.innerHTML = data.nama;
  cells2 = newRow.insertCell(1);
  cells2.innerHTML = data.telepon;
  cells2 = newRow.insertCell(2);
  cells2.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nama").value = selectedRow.cells[0].innerHTML;
  document.getElementById("telepon").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nama;
  selectedRow.cells[1].innerHTML = formData.telepon;
}

//Delete the data
function onDelete(td) {
  if (confirm("Apakah anda yakin menghapus data ini?")) {
    row = td.parentElement.parentElement;
    document.getElementById("contactList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("telepon").value = "";
  selectedRow = null;
}
