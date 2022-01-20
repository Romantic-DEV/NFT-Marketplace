import NavItem from './NavItem'

export default function NavBar () {
  return (
    <nav className="border-b p-6">
    <p className="text-4xl font-bold">{"Mark Kop's NFT Marketplace"}</p>
    <div className="flex mt-4">
      <NavItem title="Home" href="/" />
      <NavItem title="Sell Digital NFT" href="/create-item" />
      <NavItem title="My Digital NFTs" href="/my-nfts" />
      <NavItem title="Creator Dashboard" href="/creator-dashboard" />
    </div>
  </nav>
  )
}
