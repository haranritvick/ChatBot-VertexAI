"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
    {
      value: "gmail",
      label: "Gmail",
    },
    {
      value: "calender",
      label: "Calender",
    },
    {
      value: "whatsapp",
      label: "Whatsapp",
    },
    {
      value: "gmeet",
      label: "Gmeet",
    },
    {
      value: "call",
      label: "Call",
    },
  ]
export default function ComboboxDemo({ value, setValue }) {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => {
                return(
                    // <CommandItem
                    //   key={framework.value}
                    //   value={framework.value}
                    //   onSelect={(currentValue) => {
                    //     setValue(currentValue === value ? "" : currentValue)
                    //     setOpen(false)
                    //   }}
                    // >
                    //   <Check
                    //     className={cn(
                    //       "mr-2 h-4 w-4",
                    //       value === framework.value ? "opacity-100" : "opacity-0"
                    //     )}
                    //   />
                    //   {framework.label}
                    // </CommandItem>
                    <Button
                    variant="ghost"
                    className="w-[100%] my-1 text-center rounded-sm"
                    onClick={(currentValue) => {
                            setValue(framework.value)
                            setOpen(false)
                          }}>
                      <Check
                        className={cn(
                          "mr- h-4 w-4",
                          value === framework.value ? "opacity-100" : "opacity-0"
                        )}
                      /> {framework.label}
                    </Button>
                  )
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
