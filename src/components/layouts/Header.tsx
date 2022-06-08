import { strictEqual } from 'assert'
import Link from 'next/link'

const title: string = 'GOOD-DAY'
const nav_00: string = 'Home'
const nav_01: string = 'Stylist'
const nav_02: string = 'Service'
const nav_03: string = 'Recruit'
const nav_04: string = 'Company'
const nav_05: string = 'Contact'  

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
            <Link href={'/'} passHref>
                <a className="">{nav_05}</a>
            </Link>
        </nav>
      </div>
    </header>
  )
}
