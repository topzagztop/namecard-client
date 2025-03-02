import { Eye } from "lucide-react"
import { Link } from "react-router"

function CardTheme(props) {
    const { name } = props
    return (
        <Link className="relative bg-white border rounded-2xl h-24 basis-[165px] flex-grow cursor-pointer hover:border-indigo-900">
            <Eye className="text-gray-400 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[33px] h-[33px] stroke-slate-400" />
            <span className="absolute right-3 bottom-3 text-xs text-gray-400">Theme {name}</span>
        </Link>
    )
}

export default CardTheme