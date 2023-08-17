"use client"

import Card from "@mui/material/Card"
import FormControl from "@mui/material/FormControl"
import Image from "next/image"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import { Button } from "@mui/material"
import { PUBLIC_IMAGES } from "@/constants"

/**
 * Interface for the props of the InfoCard component.
 */
interface IInfoCardProps {
  /**
   * The data representing the information to be displayed in the card.
   */
  cardInfo: any
}

/**
 * InfoCard component represents a card displaying information.
 *
 * This component renders a card displaying information such as title, description,
 * card image (if available), and an icon.
 *
 * @param {IInfoCardProps} props - The props for the InfoCard component.
 * @param {ICardListData} props.cardInfo - The data representing the card information.
 * @returns {JSX.Element} The JSX element representing the InfoCard component.
 */
function InfoCard({ cardInfo }: IInfoCardProps) {
  let containerClass =
    cardInfo.cardImageDirection === "left"
      ? "flex-col lg:max-w-xl lg:flex-row ml-auto"
      : "w-full md:w-80 flex-col"

  return (
    <Card className="w-[95%]">
      <div className="flex justify-between m-4">
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex gap-4">
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              borderRadius: "20px",
            }}
            className="bg-primary capitalize text-sm"
          >
            Edit
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              borderRadius: "20px",
            }}
            className="bg-primary capitalize text-sm"
          >
            View
          </Button>
          <div className="flex bg-amber-400 w-10 h-10 justify-center items-center rounded-full cursor-pointer">
            <Image
              alt="Trash Icon"
              width={20}
              height={20}
              src={PUBLIC_IMAGES.trashIcon}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default InfoCard
