import Image from 'next/image'

const LargeCard = ({img, title, description, buttonText}) => {
    return (
        <div className="largeCard__container">
            <div className="largeCard__img">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />    
            </div>

            <div className="largeCard__caption">
                <h3 className="largeCard__caption--title">{title}</h3>
                <p className="largeCard__caption--des">{description}</p>
                <button className="largeCard__caption--btn hover:scale-95">{buttonText}</button>
            </div>            
        </div>
    )
}

export default LargeCard
