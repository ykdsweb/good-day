import { strictEqual } from 'assert'
import Link from 'next/link'

const title: string = 'GOOD-DAY'
const nav_00: string = 'ナビ00'
const nav_01: string = 'ナビ01'
const nav_02: string = 'ナビ02'
const nav_03: string = 'ナビ03'
const nav_04: string = 'ナビ04'  

export default function Header() {
  return (
    <header className="">
      <div className="">
        <Link href={'/'} passHref>
          <a className="">
            <span className="">{title}</span>
          </a>
        </Link>
        <nav className="">
            <Link href={'/'} passHref>
                <a className="" >{nav_00}</a>
            </Link>
            <Link href={'/'} passHref>
                <a className="">{nav_01}</a>
            </Link>
            <Link href={'/'} passHref>
                <a className="">{nav_02}</a>
            </Link>
            <Link href={'/'} passHref>
                <a className="">{nav_03}</a>
            </Link>
            <Link href={'/'} passHref>
                <a className="">{nav_04}</a>
            </Link>
        </nav>
      </div>
    </header>
  )
}
