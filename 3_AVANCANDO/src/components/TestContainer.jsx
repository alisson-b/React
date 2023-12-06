

const TestContainer = ({children, nome}) => {
  return (
    <div>
        <h1>Container</h1>
        {children}
        <h5>Meu nome é {nome}</h5>
    </div>
  )
}

export default TestContainer;