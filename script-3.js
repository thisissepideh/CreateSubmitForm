function handleSubmit() {
    //e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const nationality = document.getElementById("nationality").value;
    const genderValue = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let count = table.getElementsByTagName("tr").length - 1;

    tr.innerHTML = `
    <th scope="row"> ${++count}</th>
    <td> ${firstName + " " + lastName}</td>
    <td> ${email}</td>
    <td> ${phone}</td>
    <td> ${genderValue} </td>
    <td> ${nationality} </td>
    <td> <button class="bg-danger" onclick="deleteFunction(this)"> delete </button> </td>
    `;

    table.appendChild(tr);
}

function deleteFunction(o) {
    //no clue what to put here?
    //console.log(o)

    var p = o.parentNode.parentNode;
    //console.log(p)
    p.parentNode.removeChild(p);
}