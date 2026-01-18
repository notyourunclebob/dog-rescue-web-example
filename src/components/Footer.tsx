import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareLinkedin,
  faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex items-center p-5 justify-between bg-bg-colour text-font-enphasis">
      <div>
        Site by{" "}
        <a href="https://github.com/notyourunclebob" target="_blank">
          James R Wilson
        </a>{" "}
        | Images provided by{" "}
        <a href="https://www.pexels.com/" target="_blank" rel="pexels">
          Pexels
        </a>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="w-10 h-10 hover:text-btn-colour"
          />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="w-10 h-10 hover:text-btn-colour"
          />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            className="w-10 h-10 hover:text-btn-colour"
          />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faSquarePinterest}
            className="w-10 h-10 hover:text-btn-colour"
          />
        </Link>
      </div>
    </div>
  );
}
