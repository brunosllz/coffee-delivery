import { Link, Outlet } from 'react-router-dom'

import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import LogoImage from '../assets/logo.svg'

export function DefaultLayout() {
  return (
    <div>
      <header className="flex py-11 bg-gray-100 w-full ">
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
              className="w-38 h-38 bg-yellow-300 text-yellow-500 p-2 rounded-md"
            >
              <ShoppingCartSimple width={22} weight="fill" />
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
