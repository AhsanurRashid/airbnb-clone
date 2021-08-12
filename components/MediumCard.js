import Image from 'next/image'

const MediumCard = ({img, title}) => {
    return (
        <div className="mediumcard__container hover:scale-105">
            <div className="mediumcard__img">
                <Image 
                    src={img}
                    layout="fill"
                    className="rounded-xl"
                />
            </div>
            <h1 className="text-2xl mt-3">{title}</h1>
        </div>
    )
}

export default MediumCard
