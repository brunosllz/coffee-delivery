import { Link, Outlet } from 'react-router-dom'

import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import LogoImage from '../assets/logo.svg'
import { useContext } from 'react'
import { ShoopingCartContext } from '../contexts/ShoopingCartContext'

export function DefaultLayout() {
  const { selectedCoffies } = useContext(ShoopingCartContext)

  const hasItemInShoopingCart = selectedCoffies.length > 0

  return (
    <div>
      <header className="flex py-11 bg-gray-100 w-full">
        <div className="flex items-center w-full max-w-[1120px] mx-auto justify-between">
          <Link to="/">
            <img src={LogoImage} alt="" />
          </Link>

          <div className="flex items-center justify-center gap-3">
            <div className="flex bg-purple-300 rounded-md items-center gap-1 text-purple-500 p-2">
              <MapPin size={22} weight="fill" />
              <span>Porto Alegre, RS</span>
            </div>

            <Link
              to="checkout"
              className="w-38 h-38 bg-yellow-300 text-yellow-500 p-2 rounded-md relative"
            >
              {hasItemInShoopingCart && (
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-yellow-700 text-white text-xs">
                  {selectedCoffies.length}
                </div>
              )}
              <ShoppingCartSimple width={22} weight="fill" />
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
