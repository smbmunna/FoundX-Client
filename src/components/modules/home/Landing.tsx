import { Input } from "@heroui/input";
import { SearchIcon } from "../../icons";

export default function Landing() {
    return (
        <div className="bg-[url('/country.jpg')] h-screen bg-cover bg-center">
            <div className="max-w-xl pt-32 mx-auto">
                <Input 
                startContent={<SearchIcon className="w-5 h-5 text-gray-500"/>}
                placeholder="Search"/>
            </div>
        </div>
    )
}
