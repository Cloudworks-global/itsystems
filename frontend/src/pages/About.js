
import { BannerAbout } from '../components/abouts/BannerAbout'
import { CardsAbout } from '../components/abouts/CardsAbout'
import { HeaderAbout } from '../components/abouts/HeaderAbout'
import { WordsAbout } from '../components/abouts/WordsAbout'

export const About = () => {
    return (
        <>
            <HeaderAbout />
            <WordsAbout />
            <BannerAbout />
            <CardsAbout />
        </>
    )
}
