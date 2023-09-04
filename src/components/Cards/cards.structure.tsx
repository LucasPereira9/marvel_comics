export interface ICardsProps {
    items: Array<any>
    homePage: boolean
    comicPressed?: () => void
}

export interface IItemProps {
    title: string
    image: string
}