import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import { ReactNode } from "react"

export function FilterSheet({children}:{children:ReactNode}) {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost">
            <SlidersHorizontal/>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
       {children}
      </SheetContent>
    </Sheet>
  )
}
