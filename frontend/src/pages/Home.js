import { CarouselHome } from '../components/home/CarouselHome'
import { OfferHome } from '../components/home/OfferHome'
import { ClientsHome } from '../components/home/ClientsHome'
import { Capabilities } from '../components/home/Capabilities'
import { HiringHome } from '../components/home/HiringHome'

export const Home = () => {
    return (
        <>
            <CarouselHome />
            <OfferHome />
            <Capabilities />
            <ClientsHome />
            <HiringHome />
        </>
    )
}
