import { ThankYou } from "../components/thankyou";
import { Work } from "../components/work";

export default function WorkPage() {
    return (
        <div className="flex flex-col justify-end items-center p-5">
            <Work />
            <ThankYou />
        </div>
    );
}