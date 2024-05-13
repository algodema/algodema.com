import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";

interface Props {
  cartaItem: CartaItem;
}
function Carta({ cartaItem }: Props) {
  const imageOnly = cartaItem.title === "";
  return (
    <div className="max-h-92 md:min-h-92 dark:bg-gray-920 mr-2 border  border-gray-200  bg-white shadow dark:border-gray-700 sm:mb-2 md:min-w-48 md:max-w-48 ">
      {imageOnly && (
        <img
          className="h-96 w-96 border "
          src={`${cartaItem.image.src}`}
          alt={`${cartaItem.image.alt}`}
        />
      )}
      {!imageOnly && (
        <>
          <img
            className="max-h-32 min-h-32 border"
            src={`${cartaItem.image.src}`}
            alt={`${cartaItem.image.alt}`}
          />

          <div className="p-3">
            <a href={cartaItem.readMoreUrl}>
              <h6 className="text-m mb-2 font-bold capitalize tracking-tight text-gray-900 dark:text-white">
                {cartaItem.title}
              </h6>
            </a>
            <p className=" max-h-32 min-h-32 overflow-hidden  text-ellipsis  py-2  text-sm font-normal text-gray-700 dark:text-gray-400">
              {cartaItem.paragraph}
            </p>
            <a
              href={cartaItem.readMoreUrl}
              className="hover:bg-primary-920 dark:focus:ring-primary-920 mt-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Read more
              <svg
                className="rtl:rotate-192 ms-2 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Carta;
