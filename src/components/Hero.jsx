const Hero = ({
    title = 'Musical works catalogue',
    subtitle = 'A simple page for managing compositions.'
}) => {
    return (
    <section className="bg-slate-500 text-white py-10 mb-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}


export default Hero