import style from './style'

const Button = ({ children, type = 'button' }) => (
  <button type="{ button }">
    { children }
    <style jsx>{ style }</style>
  </button>
)

export default Button
