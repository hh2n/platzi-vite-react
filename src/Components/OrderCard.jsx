import { XCircleIcon, TrashIcon } from '@heroicons/react/24/solid'

export const OrderCard = props => {

    const { id, title, imageUrl, price, handleDelete } = props
    let renderTrashIcon
    if(handleDelete){
        renderTrashIcon = <TrashIcon className="h-6 w-6 text-gray-600 hover:text-gray-800 hover:h-7 hover:w-7 cursor-pointer" onClick={() => handleDelete(id) } />
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img 
                        className="w-full h-full rounded-lg object-cover"
                        src={imageUrl}
                        alt={title}
                    />
                </figure>
                <p className="text-sm font-light">
                    {title}
                </p>
            </div>
            {

            }
            <div className="flex items-center gap-2">
                <p 
                    className="text-lg font-medium"
                >
                    ${price}
                </p>
                {renderTrashIcon}
            </div>
            
        </div>
    )
}
