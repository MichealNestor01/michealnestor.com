import faceimage from "../../assets/faceimage.jpg";

export default function LandingSplash() {
  return (
    <div className="w-[800px] h-[800px] p-6 grid grid-cols-9 grid-rows-9 gap-3">
      <div className="bg-accent-colour2 rounded-xl col-start-7 row-start-7 col-span-3 row-span-3 z-10" />
      <div className="rounded-xl overflow-hidden col-start-4 row-start-7 col-span-3 row-span-3 z-10 overflow-hidden rounded-xl">
        <svg
          className="splash-svg"
          viewBox="0 0 227 227"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C3.58172 0 0 3.58173 0 8.00001V219C0 223.418 3.58173 227 8.00001 227H219C223.418 227 227 223.418 227 219V8C227 3.58172 223.418 0 219 0H8ZM80 51C80 59.8366 72.8366 67 64 67C55.1634 67 48 59.8366 48 51C48 42.1634 55.1634 35 64 35C72.8366 35 80 42.1634 80 51ZM80 114C80 122.837 72.8366 130 64 130C55.1634 130 48 122.837 48 114C48 105.163 55.1634 98 64 98C72.8366 98 80 105.163 80 114ZM64 193C72.8366 193 80 185.837 80 177C80 168.163 72.8366 161 64 161C55.1634 161 48 168.163 48 177C48 185.837 55.1634 193 64 193ZM180 51C180 59.8366 172.837 67 164 67C155.163 67 148 59.8366 148 51C148 42.1634 155.163 35 164 35C172.837 35 180 42.1634 180 51ZM164 130C172.837 130 180 122.837 180 114C180 105.163 172.837 98 164 98C155.163 98 148 105.163 148 114C148 122.837 155.163 130 164 130ZM180 177C180 185.837 172.837 193 164 193C155.163 193 148 185.837 148 177C148 168.163 155.163 161 164 161C172.837 161 180 168.163 180 177Z"
          />
        </svg>
      </div>
      <div className="rounded-xl overflow-hidden col-start-7 row-start-4 col-span-3 row-span-3 z-10">
        <svg
          className="splash-svg"
          viewBox="0 0 227 227"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C3.58172 0 0 3.58173 0 8.00001V219C0 223.418 3.58173 227 8.00001 227H219C223.418 227 227 223.418 227 219V8C227 3.58172 223.418 0 219 0H8ZM142.393 189.253C133.233 193.047 123.415 195 113.5 195L113.5 119.5L113.5 44C123.415 44 133.233 45.9529 142.393 49.7471C151.553 53.5413 159.876 59.1026 166.887 66.1134C173.897 73.1243 179.459 81.4473 183.253 90.6074C187.047 99.7675 189 109.585 189 119.5C189 129.415 187.047 139.233 183.253 148.393C179.459 157.553 173.897 165.876 166.887 172.887C159.876 179.897 151.553 185.459 142.393 189.253Z"
          />
        </svg>
      </div>
      <div className="relative col-start-3 row-start-0 col-span-4 row-span-6 z-0">
        <div className="rounded-xl bg-accent-colour2 w-full h-full absolute bottom-5 left-5" />
        <div className="rounded-xl w-full h-full absolute overflow-hidden">
          <img src={faceimage} className="w-full " />
        </div>
      </div>
    </div>
  );
}
