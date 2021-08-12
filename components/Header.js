import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import { GlobeAltIcon } from '@heroicons/react/solid'
import { UserCircleIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="header__container">
            {/* left-logo */}
            <div className="logo">
                <Image 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* middle-serch */}
            <div className="search">
                <input className='search__input' type="text" placeholder="Start your search" />
                <SearchIcon className="search__icon"/>
            </div>

            {/* right-profile */}
            <div className="profile">
                <p className="cursor-pointer lg:inline-flex hidden">Become a host</p>
                <GlobeAltIcon className="profile__icon cursor-pointer"/>
                <div className="profile__user--icons">
                    <MenuIcon className="w-5 cursor-pointer" />
                    <UserCircleIcon className="w-5 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}

export default Header
