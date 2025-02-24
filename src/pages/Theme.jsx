import CardTheme from "../components/CardTheme"

function Theme() {
  return (
    <div className="bg-slate-50 w-full px-8 py-6">
        <h1 className="text-2xl font-semibold">My Theme</h1>
        <div className="flex flex-wrap py-4 gap-4">
            <CardTheme name="1" />
            <CardTheme name="2" />
            <CardTheme name="3" />
            <CardTheme name="4" />
            <CardTheme name="5" />
            <CardTheme name="6" />
        </div>
    </div>
  )
}

export default Theme