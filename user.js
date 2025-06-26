const form = document.getElementById('form')
const name = document.getElementById('name')
const occupation = document.getElementById('occupation')
const address = document.getElementById('address')
const pass = document.getElementById('password')
const output = document.querySelector('#output')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let nameValue = name.value
    let occupationValue = occupation.value
    let addressValue = address.value
    let passwordValue = password.value
    let telephoneValue = telephone.value

    const data = {
        name: nameValue,
        occupation: occupationValue,
        address: addressValue,
        password: passwordValue,
        telephone: telephoneValue,
        status:false

    }
    const tr = document.createElement('tr')
    const htmlData =`
    <td>${data.name}</td>
    <td>${data.occupation}</td>
    <td>${data.address}</td>
    <td>${data.password}</td>
    <td>${data.telephone}</td>
    <td>${data.status ? 'completed': "Not completed"}</td>
    <td><a><span>Delete</span></a></td>


    `
    tr.innerHTML = htmlData
    output.append(tr)
    name.value =''
    occupation.value =''
    address.value =''
    password.value =''
    telephone.value =''
    // console.log(data)
})






// window.alert('Welcome to my page tea or coffee? plssssss!!!!');

