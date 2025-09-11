import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

function LetsTalk() {
  return (
    <section
      className="relative h-[318px]"
      style={{
        backgroundImage: `url(/media/cardBackground.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-8 flex flex-col items-center lg:items-start justify-center py-8 lg:py-0">
            <h2 className="text-4xl font-bold text-gray-900 text-center lg:text-left">Let's Talk</h2>
            <Link to="/contact">
              <Button className="bg-teal-500 hover:bg-[#B2519A] text-white px-8 py-3 flex items-center gap-2 w-[115px]">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="relative hidden lg:block">
            <img src="/media/letsTalk.png" alt="Team photo of Emediabiz" className="w-full h-[320px] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LetsTalk
