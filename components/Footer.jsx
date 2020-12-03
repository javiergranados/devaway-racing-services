function Footer() {
  return (
    <footer className="flex pt-5 pb-4 border-t border-indigoDye md:pl-8">
      <span className="w-full text-center md:text-left">{`© ${new Date().getFullYear()} Javier Granados - DevAway Racing Services`}</span>
    </footer>
  )
}

export default Footer
