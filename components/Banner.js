import Image from "next/image"

const Banner = () => {
    return (
        <div className="banner__container">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="banner__caption">
                <p className="banner__caption--title">Not sure where to go? Perfect.</p>
                <button className="banner__caption--btn active:scale-90">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
