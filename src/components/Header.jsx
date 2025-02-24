import { IdCard } from "lucide-react"

function header() {
  return (
    <div className="flex justify-center items-center py-2 border-b-2">
      <IdCard className="w-[40px] h-[28px] stroke-[1px] stroke-[#312E81]" />
      <p className="text-lg font-semibold text-[#312E81]">NameCard.</p>
    </div>
  )
}

export default header