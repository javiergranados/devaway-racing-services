function Footer() {
  return (
    <footer className="flex pt-5 pb-4 border-t bg-indigoDye font-semi md:pl-8">
      <span className="w-full text-center text-white md:text-left">{`© ${new Date().getFullYear()} Javier Granados - DevAway Racing`}</span>
    </footer>
  )
}

export default Footer
