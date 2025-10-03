import { useContext } from "react"
import { data } from "../App"

const GrandChild = () => {
    const Emp = useContext(data)
    return (
        <>
            {
                Emp.map((item ,idx) => {
                    return (
                        <div key={idx}>
                            <h1 className="text-red-600">{item.name}-{idx+1}</h1>
                            <h1 className="text-green-600">{item.age}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}

export default GrandChild