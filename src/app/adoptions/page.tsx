import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Adoptions() {
    return (
        <main>
            <Banner />

            <div className="flex flex-col gap-8 items-center justify-center px-8">
                <div className="text-4xl mt-10 text-center text-font-colour">Dogs Available for Adoption</div>

                <div className="max-w-250 mb-10 text-font-colour">
                    These resilient animals come from all walks of life—some were found as strays wandering the streets, others were surrendered by families facing hardship, and many were saved from neglectful or abusive situations. Despite their difficult pasts, these dogs have an incredible capacity for love and loyalty.
                    <br/><br/>
                    From energetic puppies brimming with playful curiosity to gentle senior dogs who just want a warm lap to rest on, there's a perfect companion for every lifestyle and home. Each rescue dog carries their own unique personality, quirks, and story, and they're all eager to find a family who will cherish them.
                    <br/><br/>
                    If your interested in adoption please <Link href="/" className="text-btn-colour hover:text-bg-emphasis">contact us</Link> to help these dogs to find their forever home.
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 max-w-250 drop-shadow-lg">
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-steshkacroes-1591939_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Archie</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-carlos-castilla-6812-298062_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Chubbs</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-hnoody93-58997_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Saint Germane</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-svetozar-milashevich-99573-1490908_mug.png" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Cyberdog</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-vanserline-vandenberg-759843-1619690_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Alowishus</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-valeriya-1805164._mugjpg.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Pinky</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                </div>

                <div className="text-4xl mt-10 text-center text-font-colour">Recently Adopted</div>

                <div className="text-center mb-10 text-font-colour">
                    These dogs have a loving home thanks to the kindness and generosity of their new families. 
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 mb-20 max-w-250 drop-shadow-lg">
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-glenn-970339-2664417_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Master Blaster</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-pixabay-160846_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Juan Diago Sanchez</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="bg-bg-colour rounded-lg">
                        <Image src="/images/pexels-jeshoots-3512_mug.jpg" alt="Dog up for adoption" height={200} width={300} className="rounded-t-lg border-b-8 border-bg-emphasis"></Image>
                        <div className="flex items-center justify-between px-3 py-2 text-white">
                            <div className="text-2xl font-semibold">Great Cosmic Wizard</div>
                            <FontAwesomeIcon icon={faPaw} className="h-8 w-8" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};