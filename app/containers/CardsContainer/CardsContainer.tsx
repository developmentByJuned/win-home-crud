import { InfoCardList } from "./components/InfoCardList";

/**
 * Interface for the props of the CardsContainer component.
 */
interface ICardsContainerProps {
  /**
   * The title to be displayed in the CardsContainer.
   */
  title: string;
  /**
   * The list to render the card info component.
   */
  cardListData: any[];
}

/**
 * CardsContainer component represents a container for a list of cards.
 *
 * This component renders a container with a specified title and a list of cards,
 * using the `InfoCardList` component to display the individual cards.
 *
 * @param {ICardsContainerProps} props - The props for the CardsContainer component.
 * @param {string} props.title - The title of the card container.
 * @param {ICardListData[]} props.cardListData - The data representing the cards to be displayed in the container.
 * @returns {JSX.Element} The JSX element representing the CardsContainer component.
 */
export default function CardsContainer({ title, cardListData }: ICardsContainerProps) {
  return (
    <div className="mx-2 my-8 lg:ml-20">
      <h1 className="tracking-wider lg:w-1/2 text-lg">{title}</h1>
      <InfoCardList cardListData={cardListData}/>
    </div>
  );
}