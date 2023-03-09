(async function getBMI() {
    const response = await fetch('/get-bmi')
    const data = await response.json()
    console.log(data)
    console.log(data.length - 1)
    let userBmi = data[data.length - 1].bmi
    document.getElementById('bmi').innerText = userBmi

    if (userBmi < 18)
        document.getElementById('fit').innerText = "Under Weight"
    if (userBmi >= 18 && userBmi <= 25)
        document.getElementById('fit').innerText = "Normal"
    if (userBmi > 25)
        document.getElementById('fit').innerText = "Over Weight"



})()