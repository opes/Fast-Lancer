import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { getClient } from '../../services/clients'
export default function NewEditForm({ formSubmit, formLabel, isNew }) {
  const { user } = useUser()
  const [client_name, setClient_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business_name, setBusiness_name] = useState('')
  const [notes, setNotes] = useState('')

  const [client, setClient] = useState('')
  const { id } = useParams()

  useEffect(async () => {
    try {
      const client = await getClient(id)
      setClient(client)
    } catch (err){
      isNew = true
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await formSubmit({ client_name, email, phone, business_name, notes, user_id: user.id })
  }


  return <div>
    <h2>{formLabel}</h2>
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label htmlFor='client_name'>Client Name</label>
        <input 
          id='client_name'
          type='text'
          value={client_name}
          required
          onChange={(e) => setClient_name(e.target.value)} />

        <label htmlFor='email'>E-Mail</label>
        <input 
          id='email'
          type='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='phone'>Phone Number</label>
        <input 
          id='phone'
          type='number'
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor='business_name'>Business Name</label>
        <input 
          id='business_name'
          type='text'
          value={business_name}
          placeholder='Optional'
          onChange={(e) => setBusiness_name(e.target.value)} />

        <label htmlFor='notes'>Notes</label>
        <textarea
          id='notes'
          placeholder='Optional'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type='submit'>{formLabel}</button>
      </form>
    </fieldset>
  </div>
}