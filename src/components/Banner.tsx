import { Josefin_Sans } from "next/font/google";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const josefin = Josefin_Sans({ weight: "300", subsets: ["latin"] });

export function Banner() {
  return (
    <div className="bg-bg-form drop-shadow-lg">
      <div className="flex flex-col lg:flex-row flex-nowrap items-center justify-between p-5 bg-bg-colour text-font-enphasis border-b-8 border-bg-emphasis">
        <header className={`${josefin.className}`}>
          <Link href={"/"}>
            <div className="text-4xl sm:text-6xl sm:tracking-[.03em]">
              Nova Dog Rescue
            </div>
            <div className="text-xs sm:text-lg font-semibold sm:tracking-[.09em]">
              Volunteer Dog Shelter | Nonprofit Adoption Services
            </div>
          </Link>
          <span></span>
        </header>
        <div className="flex text-xs sm:text-lg lg:flex-col text-font-enphasis">
          <div className="lg:border-l-2 border-font-enphasis px-2">
            4321 Woof St.
          </div>
          <div className="lg:border-l-2 border-font-enphasis px-2">
            Barkton, Nova Scotia
          </div>
          <div className="lg:border-l-2 border-font-enphasis px-2">A1A 1A1</div>
        </div>
      </div>
      <nav className="flex flex-col sm:flex-row items-center justify-center lg:justify-end sm:gap-4 sm:px-5 sm:py-2">
        <div className="w-full flex flex-col sm:flex-row text-font-colour">
          <Link
            href={"/"}
            className="hover:text-btn-colour border-b-1 sm:border-b-0 sm:border-r-1 border-bg-emphasis py-1 px-3 text-center"
          >
            Our Mission
          </Link>
          <Link
            href={"/adoptions"}
            className="hover:text-btn-colour border-b-1 sm:border-b-0 sm:border-r-1 border-bg-emphasis py-1 px-3 text-center"
          >
            Available Dogs
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-btn-colour py-1 px-3 text-center"
          >
            Get Involved
          </Link>
        </div>
        <div className="w-full sm:w-fit flex items-center justify-center gap-1 p-2 sm:p-1 sm:px-3 bg-btn-colour hover:bg-bg-emphasis text-sm sm:text-md text-white border sm:rounded-sm">
          <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
          <Link href={"/"}>Donate</Link>
        </div>
      </nav>
    </div>
  );
}
