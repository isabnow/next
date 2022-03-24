import styles from '../Home.module.css'

export function ButtonProduct({ produtos }) {
  return produtos.map((e, i) => {
    return (

      <div key={i} className='mb-3 text-center'>
        <a className={`w-75 btn ${styles.buttonEdit}`} href={e.path}>
          {e.name}
        </a>
      </div>
    )
  })
}
