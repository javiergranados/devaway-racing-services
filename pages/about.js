function AboutPage() {
  return (
    <div className="text-indigoDye">
      <h1 className="pb-4 text-4xl text-center font-semi lg:text-left">DevAway Racing Services</h1>
      <p className="text-3xl text-center lg:text-left animate__animated animate__fadeIn">
        A technical test for&nbsp;
        <a
          href="https://www.villenavalley.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-orangeSoda"
        >
          DevAway
        </a>
        &nbsp;company
      </p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
    },
  }
}

export default AboutPage
