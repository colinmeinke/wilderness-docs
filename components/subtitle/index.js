import style from './style'

const Subtitle = ({ children, ...props }) => (
  <h2 { ...props }>
    { children }
    <style jsx>{ style }</style>
  </h2>
)

export default Subtitle
