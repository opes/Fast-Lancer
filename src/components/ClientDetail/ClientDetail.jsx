import styles from './ClientDetail.module.css'
import phoneIcon from '../../assets/icons/phoneSmall.png'
import emailIcon from '../../assets/icons/emailSmall.png'

export default function ClientDetail({ client }) {
  const {
    client_name: name,
    email,
    phone,
    business_name: businessName,
    notes
  } = client

  return (
    <div className={styles.clientItem}>
      <div className={styles.col}>
        <h3 className={styles.h3}>
          {name}
        </h3>
        <h4 className={styles.h4}>
          {businessName}
        </h4>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img src={phoneIcon} alt='a phone icon' />
          {phone}
        </div>
        <div className={styles.row}>
          <img src={emailIcon} alt='a email icon' />
          {email}
        </div>
      </div>
      <div>
        {notes}
      </div>
    </div>
  )
}
