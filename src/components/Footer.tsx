import Link from 'next/link'
import Image from 'next/image';

const title: string = 'GOOD-DAY'
const nav_00: string = 'ナビ00'
const nav_01: string = 'ナビ01'
const nav_02: string = 'ナビ02'
const nav_03: string = 'ナビ03'
const nav_04: string = 'ナビ04'  

export default function Footer() {
  return (
    <footer className="">
      <div className="">
        <Link href="">
          <a>
            <Image 
              className=""
              src={'/img/OneStep_logo_01.png'}
              objectFit="contain"
              alt="imageFile"
              width={240}
              height={240}
            />
          </a>
        </Link>
      </div>
    </footer>
  )
}