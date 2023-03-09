(async function getBMI() {
    const response = await fetch('/get-bmi')
    const data = await response.json()
    console.log(data)
    populateTable(data)
})()

function populateTable(bmis) {
    let table = document.getElementById('table')
    let sum = 0;
    bmis.forEach(bmi => {
        let row = document.createElement('tr')

        let value = document.createElement('td')
        let bval = document.createTextNode(bmi.bmi)
        sum += bmi.bmi
        value.appendChild(bval)

        row.appendChild(value)
        table.appendChild(row)
    });
    console.log(sum)
    document.getElementById('avg').innerText = (sum / bmis.length)
}