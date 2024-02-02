import { useParams } from "react-router-dom"

const DisplayParam = (props) => {
    const {userInput, color, backgroundColor} = useParams();
    console.log(userInput)
    console.log(isNaN(userInput));

return(
    <div>
        {
            isNaN(userInput)?

            <h1 style={color? {color, backgroundColor} : null}> The word is : {userInput}</h1>

            :

            <h1 style={color? {color, backgroundColor} : null}> The number is : {userInput}</h1>
        }
    </div>
    )
}

export default DisplayParam;
