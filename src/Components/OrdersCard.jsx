import { ShoppingCartIcon, ChevronRightIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

export const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    return (
        <div 
            className="flex justify-between items-center mb-4 border border-gray-100 shadow-lg rounded-xl p-4 w-80 "
        >
            <div className="flex justify-between w-full">
                <div className="flex flex-col w-1/3">
                    <span className="flex justify-between items-center">
                        <CalendarDaysIcon className="h-5 w-5 text-gray-800" />
                        <p>01.02.23</p>
                    </span>
                    <span className="flex justify-between items-center w-full">
                        <ShoppingCartIcon className="h-4 w-4 text-gray-800" />
                        <p> {totalProducts} articles</p>
                    </span>
                </div>
                <div className="flex items-center font-medium text-xl">
                    <span>${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
