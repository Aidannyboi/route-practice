import { useParams } from "react-router-dom"

const DisplayParam = (props) => {
    const {userInput} = useParams();
    console.log(userInput)
    console.log(isNaN(userInput));

return(
    <div>
        {
            isNaN(userInput)?
            <h1>The word is : {userInput}</h1> :
            <h1>The number is : {userInput}</h1>
        }
    </div>
    )
}

export default DisplayParam;
