import { useParams } from "react-router-dom"

const DisplayParam = (props) => {
    const {userInput} = useParams();

return(
    <div>
        <h1>The number is : {userInput}</h1>
    </div>
    )
}

export default DisplayParam;
