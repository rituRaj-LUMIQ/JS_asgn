
const search = async()=>{
    const input = document.getElementById('input').value
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c79217b4e636c54108ad2beb8eb121ae`)
    const data = await respone.json()
    console.log(data)
    // const d = `<b>Name : </b><i>${data.}</i>
    // <b>humidity : </b><i>${}</i>
    // <b>Pressure : </b><i>${}</i>
    // <b>Temperature : </b><i>${}</i>
    // <b>Wind : </b><i>${}</i>`
}


let input = document.getElementById('input')

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search()
  }
});