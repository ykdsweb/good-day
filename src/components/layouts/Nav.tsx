import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Nav.module.scss";

export default function Nav() {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between bg-blue-300 p-6">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <Link href={"/"}>
            <a>
              <Image
                className={styles.navImage}
                src={"/"}
                objectFit="contain"
                alt="GOOD-DAY_MainLogo"
                width={64}
                height={64}
              />
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="hover:text flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block w-full grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:grow">
            <Link href={"#responsive-header"} passHref>
              <a className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block">
                Home
              </a>
            </Link>
            <Link href={"#responsive-header"} passHref>
              <a className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block">
                Stylist
              </a>
            </Link>
            <Link href={"#responsive-header"} passHref>
              <a className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block">
                Searvice
              </a>
            </Link>
            <Link href={"#responsive-header"} passHref>
              <a className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block">
                Recruit
              </a>
            </Link>
            <Link href={"#responsive-header"} passHref>
              <a className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block">
                Company
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
