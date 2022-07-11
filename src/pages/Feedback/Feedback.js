import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';                                                 

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function Feedback() {
    // const submit =()=>{
    // toast.success('Successfull Submit',{position: toast.POSITION.BOTTOM_CENTER})
    // }
    const [inputValue, setInputValue] = useState("");
const [currentValue, setCurrentValue] = useState(0);
const [hoverValue, setHoverValue] = useState(undefined);
const stars = Array(5).fill(0)

const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("");
    toast.success('Successfull Submit',{position: toast.POSITION.BOTTOM_CENTER})
    setHoverValue(undefined)
  };

const handleClick = value => {
    setCurrentValue(value)
}

const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
};

const handleMouseLeave = () => {
    setHoverValue(undefined)
}


return (
    <div style={styles.container}>
    {/* <h1>Review for kiosk </h1> */}
    <div style={styles.stars}>
        {stars.map((_, index) => {
        return (
            <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
                marginRight: 10,
                cursor: "pointer"
            }}
            />
        )
        })}
    </div>
    <textarea type="text" placeholder="What's your experience?"  value={inputValue} onChange={handleUserInput} style={styles.textarea}/>
    {/* <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
    /> */}
    
    <button onClick={resetInputField}
        style={styles.button}
    >
        Submit
    </button>
    <ToastContainer />
    </div>
);
};


const styles = {
container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
},
stars: {
    display: "flex",
    flexDirection: "row",
},
textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 300,
    width: 300
},
button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
}

};

export default Feedback
