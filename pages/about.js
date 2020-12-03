function AboutPage() {
  return (
    <div className="text-indigoDye">
      <h1 className="pb-4 text-4xl">DevAway Racing Services</h1>
      <p className="text-3xl">About page</p>
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
