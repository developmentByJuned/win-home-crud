"use client"

import Image from "next/image"

import {PUBLIC_IMAGES } from "@/constants"

/**
 * Interface for the props of the Header component.
 */
interface IHeaderProps {
  /**
   * This prop is used to show dynamic title for different pages.
   */
  title?: string
}

/**
 * Header component displays the header of the web page with company logo and title.
 * @returns {JSX.Element} The JSX element representing the Header component.
 */
export default function Header({ title }: IHeaderProps) {
  return (
    <div className="relative overflow-hidden flex items-center justify-between h-[15vh] bg-primary">
      <div className="absolute z-0 bg-secondary w-[18vh] h-[18vh] rounded-full -bottom-8 -left-8"></div>
      <Image
        className="z-10 ml-10"
        alt="Company Logo"
        width={100}
        height={100}
        src={PUBLIC_IMAGES.companyLogo}
      />

      <div className="flex gap-10 lg:mr-10">
        <Image
          alt="Company Logo"
          width={35}
          height={35}
          src={PUBLIC_IMAGES.addList}
        />
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            alt="Company Logo"
            width={60}
            height={60}
            src="https://randomuser.me/api/portraits/men/81.jpg"
          />
          <p className="text-white text-sm tracking-wide">Sadikali</p>
        </div>
      </div>
    </div>
  )
}
