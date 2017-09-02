import style from './style'

export default ({ handleClick, open }) => (
  <a
    href="?nav=open"
    onClick={ handleClick }
    data-open={ open }
  >
    <span></span>
    <span></span>
    <span></span>
    <style jsx>{ style }</style>
  </a>
)
