"use client"

import { UPPER_CARD_LIST_DATA } from "./constants"
import {
  CardsContainer,
} from "./containers"

/**
 * Home component represents the home page of the application.
 *
 * This component renders the main content for the home page, including sections
 * like cards, about, and accordion.
 *
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      <CardsContainer title="Today Tasks" cardListData={UPPER_CARD_LIST_DATA} />
    </main>
  )
}
