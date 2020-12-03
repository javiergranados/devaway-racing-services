function IndexPage() {
  return (
    <div className="text-indigoDye">
      <h1 className="text-4xl text-center font-semi lg:text-left">Home</h1>
      <p className="text-3xl text-center lg:text-left">home page</p>
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
