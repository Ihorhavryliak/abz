type HeadingType = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}

const Heading = ({ as, text }: HeadingType) => {
  switch (as) {
    case 'h2':
      return <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">{text}</h2>
    default:
      return ''
  }
}

export default Heading
