import style from './style'

const Title = ({ children }) => (
  <h1>
    { children }
    <style jsx>{ style }</style>
  </h1>
)

export default Title
