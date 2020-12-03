function IndexPage() {
  return (
    <div className="text-indigoDye">
      <h1 className="pb-4 text-4xl text-center font-semi lg:text-left">DevAway Racing Services</h1>
      <p className="text-3xl text-center lg:text-left">404: Not Found</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: '404',
    },
  }
}

export default IndexPage
