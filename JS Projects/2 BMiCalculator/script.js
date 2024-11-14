const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = (`Please enter a valid Height ${height}`)
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = (`Please enter a valid weight ${weight}`)
    }else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.5){
            document.querySelector(".WR").innerHTML = "You are Under Weight"
        }else if(bmi >= 18.5 && bmi <= 24.9){
            document.querySelector(".WR").innerHTML = "You are in Normal Range"
        }else{
            document.querySelector(".WR").innerHTML = "You are Over Weight"
        }
    }
})