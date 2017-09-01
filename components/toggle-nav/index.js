import style from './style'

export default ({ handleClick, open }) => (
  <button
    type="button"
    onClick={ handleClick }
    data-open={ open }
  >
    <span></span>
    <span></span>
    <span></span>
    <style jsx>{ style }</style>
  </button>
)
