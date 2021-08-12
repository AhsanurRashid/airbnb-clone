import Image from "next/image"

function SmallCart({img, location, distance}) {
    return (
        <div className="smallcart__container hover:scale-105">
            <div className="smallcart__img">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2 className="font-semibold">{location}</h2>
                <h3 className="text-sm text-gray-500">{distance}</h3>
            </div>
            
        </div>
    )
}

export default SmallCart
