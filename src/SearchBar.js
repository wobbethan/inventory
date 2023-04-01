import {useState} from 'react'

function SearchBar() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")

    const searchButtonPressed = () => {
        console.log(name)
        console.log(price)
        console.log(type)
        console.log(brand)

    }

  return (
    <div>
        <h2>Search for an Item</h2>
        <form>
            <label htmlFor="name-field">Name:</label>
            <input id="name-field" value = {name} type="text" onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="price-field">Max Price:</label>
            <input id="price-field" value = {price} type="number" onChange={(e) => setPrice(e.target.value)}></input>

            <label htmlFor="type-field">Type:</label>
            <input id="type-field" value = {type} type="text" onChange={(e) => setType(e.target.value)}></input>

            <label htmlFor="brand-field">Brand:</label>
            <input id="brand-field" value = {brand} type="text" onChange={(e) => setBrand(e.target.value)}></input>

            <button type="button">Search</button>
        </form>

    </div>
  )
}

export default SearchBar