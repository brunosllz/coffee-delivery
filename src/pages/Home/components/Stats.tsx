import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Stats() {
  return (
    <ul className="grid grid-cols-[236px_331px] gap-5">
      <li className="flex items-center justify-start gap-3">
        <div className="w-8 h-8 bg-yellow-700  rounded-full text-white flex items-center justify-center">
          <ShoppingCart weight="fill" size={16} />
        </div>
        <span>Compra simples e segura</span>
      </li>
      <li className="flex items-center justify-start gap-3">
        <div className="w-8 h-8 bg-brown-500  rounded-full text-white flex items-center justify-center">
          <Package weight="fill" size={16} />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </li>
      <li className="flex items-center justify-start gap-3">
        <div className="w-8 h-8 bg-yellow-500  rounded-full text-white flex items-center justify-center">
          <Timer weight="fill" size={16} />
        </div>
        <span>Entrega rápida e rastreada</span>
      </li>
      <li className="flex items-center justify-start gap-3">
        <div className="w-8 h-8 bg-purple-500  rounded-full text-white flex items-center justify-center">
          <Coffee weight="fill" size={16} />
        </div>
        <span>O café chega fresquinho até você</span>
      </li>
    </ul>
  )
}
