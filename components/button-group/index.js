import style from './style'

export default ({ children }) => (
  <div>
    { children }
    <style jsx>{ style }</style>
  </div>
)
