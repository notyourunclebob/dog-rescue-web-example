import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  faDog,
  faPaw,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main>
      <Banner />

      <div className="flex justify-end w-full py-20 bg-[url('/images/pexels-trinitykubassek-313979.jpg')] bg-no-repeat bg-bottom bg-cover bg-fixed">
        <div className="w-full lg:w-200 p-10 bg-bg-colour/80 lg:rounded-l-lg backdrop-blur-md">
          <div className="mb-6 text-3xl text-center text-font-enphasis">
            Helping Hands For Our Best Friends
          </div>
          <div className="text-lg text-font-colour">
            We are dedicated to rescuing, rehabilitating, and rehoming dogs in
            need through compassionate care and community support. <br />
            <br />
            Our mission is to provide a safe haven for abandoned, neglected, and
            surrendered dogs while we work to match each animal with a loving,
            responsible forever home.
            <br />
            <br />
            Through the tireless efforts of our volunteers, we strive to reduce
            pet homelessness, promote responsible pet ownership, and enrich our
            community by celebrating the unique bond between dogs and their
            human companions. Every dog deserves a second chance, and we're
            committed to making that possible.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-15 py-30 drop-shadow-lg">
        <Link href={"/contact"}>
          <div className="flex flex-col gap-1 items-center justify-center size-70 bg-bg-emphasis rounded-lg drop-shadow-lg">
            <Image
              src="/images/pexels-lauren-whitaker-1014624-1975989_cropped.jpg"
              alt="woman and dog"
              width={150}
              height={150}
              className="mask-radial-[50%_50%] mask-radial-from-100% mask-radial-at-center"
            />
            <div className="text-3xl text-white">Voulenteer</div>
            <FontAwesomeIcon icon={faDog} className="w-10 h-10 text-white" />
          </div>
        </Link>

        <Link href={"/adoptions"}>
          <div className="flex flex-col gap-1 items-center justify-center size-70 bg-bg-emphasis rounded-lg drop-shadow-lg">
            <Image
              src="/images/pexels-melly-1954515_cropped.jpg"
              alt="woman and dog"
              width={150}
              height={150}
              className="mask-radial-[50%_50%] mask-radial-from-100% mask-radial-at-center"
            />
            <div className="text-3xl text-white">Adopt</div>
            <FontAwesomeIcon icon={faPaw} className="w-10 h-10 text-white" />
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex flex-col gap-1 items-center justify-center size-70 bg-bg-emphasis rounded-lg drop-shadow-lg">
            <Image
              src="/images/pexels-garfield-besa-95119-686094_cropped.jpg"
              alt="woman and dog"
              width={150}
              height={150}
              className="mask-radial-[50%_50%] mask-radial-from-100% mask-radial-at-center"
            />
            <div className="text-3xl text-white">Donate</div>
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-10 h-10 text-white"
            />
          </div>
        </Link>
      </div>

      <div className="flex w-full py-20 bg-[url('/images/pexels-ionelceban-2877832.jpg')] bg-no-repeat bg-top-right lg:bg-top bg-cover bg-fixed">
        <div className="w-full lg:w-200 p-10 bg-bg-colour/80 lg:rounded-r-lg backdrop-blur-md">
          <div className="mb-6 text-3xl text-center text-font-enphasis">
            All Dogs Deserve a Loving Home
          </div>
          <div className="text-lg text-font-colour">
            Opening your home to a rescue dog isn't just about saving a
            life—it's about gaining a loyal companion who will fill your days
            with joy, laughter, and unconditional love. <br />
            <br />
            Shelter dogs come with their own stories and personalities, just
            waiting for someone to give them a second chance. Whether you're
            looking for a hiking buddy, a couch companion, or a playful friend
            for your kids, there's a perfect match waiting for you
            <br />
            <br />
            Adopt, don't shop, and discover how much richer life becomes when
            you give a deserving dog the forever home they've been dreaming of.
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
