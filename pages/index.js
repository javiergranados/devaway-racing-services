function IndexPage() {
  return (
    <div className="text-indigoDye">
      <h1 className="pb-4 text-4xl font-semi">DevAway Racing Services</h1>
      <p className="text-3xl">Home page</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}

export default IndexPage
