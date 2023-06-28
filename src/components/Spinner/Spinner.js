import { ThreeDots } from "react-loader-spinner"

export function Spinner({ status }) {
    return (
        <div className="flex w-full justify-center">
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#fff" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={status}
            />
        </div>
    )
   
}