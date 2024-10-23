import dayjs from "dayjs"
import { m } from "framer-motion"

import { softSpringPreset } from "~/components/ui/constants/spring"
import { RadioGroup } from "~/components/ui/radio-group"
import { RadioCard } from "~/components/ui/radio-group/RadioCard"

const radios = [
  {
    value: 1,
  },
  {
    value: 3,
  },
  {
    value: 6,
  },
  {
    value: 12,
  },
]

export const RadioCards = ({
  monthlyBoostCost,
  value,
  onValueChange,
}: {
  monthlyBoostCost: number
  value: number
  onValueChange: (value: number) => void
}) => {
  return (
    <RadioGroup value={value.toString()} onValueChange={(value) => onValueChange(+value)}>
      <m.div
        className="grid w-full grid-cols-2 gap-2 overflow-hidden"
        initial={{ height: "auto", opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={softSpringPreset}
      >
        {radios.map((item) => (
          <RadioCard
            key={item.value}
            wrapperClassName="justify-center"
            value={(item.value * monthlyBoostCost).toString()}
            label={
              <div>
                <h3 className="pr-3 font-medium leading-none">
                  {dayjs.duration(item.value, "months").humanize()}
                </h3>
                <p className="mt-1 flex items-center justify-center gap-1 text-sm text-theme-vibrancyFg">
                  {item.value * monthlyBoostCost}
                  <i className="i-mgc-power text-accent" />
                </p>
              </div>
            }
          />
        ))}
      </m.div>
    </RadioGroup>
  )
}
