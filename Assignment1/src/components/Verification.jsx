import { useEffect } from "react"
import { useState } from "react"

                        function myRandomInts(quantity, max) {
                            const arr = []
                            while (arr.length < quantity) {
                                let candidateInt = Math.floor(Math.random() * max) + 1
                                if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
                            }
                            return (arr)
                        }
                        const [a, b, c, d, e] = myRandomInts(5, 5);
                        console.log(a, b, c, d, e)

                        const randomval = Math.floor(Math.random() * 5) + 1;

const Verification = () => {


    const images = [
        { "id": `${a}`, "image": `images/image${a}.jpeg` },
        { "id": `${b}`, "image": `images/image${b}.jpeg` },
        { "id": `${c}`, "image": `images/image${c}.jpeg` },
        { "id": `${d}`, "image": `images/image${d}.jpeg` },
        { "id": `${e}`, "image": `images/image${e}.jpeg` },
        { "id": `${randomval}`, "image": `images/image${randomval}.jpeg` },

    ];
    const [id, setid] = useState("");
    const [id2, setid2] = useState("");
    const [err,seterr] = useState("")

    const Compare = (clickedid) => {
        if (id) {
            console.log("after first click")
            setid2(...clickedid)
        }
        
        if (id=="") {
            setid(...id,clickedid)
        
        }
        // if(id!=""){
        //     seterr("Dont select same image ")
        // }
    }

    console.log("Both id ", id, id2)

    const verify = () => {
        if (id == id2) {
            seterr("You are a human. Congratulations!")
        } else {
            seterr(" We can't verify you as a human")
        }
    }
    const reset = () => {
        setid("");
        setid2("");
        seterr("")
    }
    return (
        <>
            <h3>Please click on the identical tiles to verify that you are not a robot</h3>
            {images.map((image) => {

                return (
                    <>
                        <div key={image.id} id="images">
                            <img src={image.image} id="images" onClick={() => Compare(image.id)}  data-ns-test attribute={image.id}/>
                        </div>
                    </>
                )
            })}
            {id ? <div> <button onClick={reset} id="reset" > Reset </button> </div> : ""}
            {/* {double ? <div></div>:""} */}
           {id && id2 ? <div><button onClick={verify} id="btn" > Verify</button></div> : ""}
                <div> {err}</div>
      


        </>
    )
}
export default Verification