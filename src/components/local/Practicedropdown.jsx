import React,{useState} from 'react'

const Practicedropdown = () => {
    const [val, setVal] = useState('')

    const arr = ['pakistan', 'india', 'newzealand', 'australia']

    const handleChange = (e)=>{setVal(e.target.value)}


  return (
    <div>
        <select value={val} onChange={handleChange}>
            {arr.map((item)=>{
                return(
                    <option value={item} >{item}</option>
                )
               
            })}
            {/* <option value="Pakistanzindabad">Pakistanzindabad</option>
            <option value="b" >b</option>
            <option value="c">c</option>
            <option value="d">d</option> */}
        </select>
    </div>
  )
}

export default Practicedropdown