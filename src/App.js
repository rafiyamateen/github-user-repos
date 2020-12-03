import React, { useState } from 'react'
import './App.css'
import axios from "axios";
import { Alert, Spinner } from 'react-bootstrap'
import NotFound from './Components/NotFound/NotFound'
import Input from './Components/UserInput/UserInput'
import RepoCards from "./Components/RepoCards/RepoCards";

const App = () => {

  const [username, setUsername] = useState(''),
    [data, setData] = useState(''),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(false),
    [alert, setAlert] = useState(false),

    fetchUser = () => {

      if (username) {
        setLoading(true)
        const url = `https://api.github.com/users/${username}/repos`
        axios.get(url)
          .then((response) => {
            setLoading(false)
            setData(response.data)
          })
          .catch(() => {
            setLoading(false)
            setError(true)
            setData('')
            document.getElementById('input').focus();
          })
      }
      else {
        setAlert(true)
        setData('')
        document.getElementById('input').focus();
      }
    }
  onchange = (e) => {
    setUsername(e.target.value)
    setAlert(false)
    setError(false)
  }
  return (
    <>
      <h2 id='head'>Get Repositories of any Github user</h2>
      <Input onchange={onchange} fetchUser={fetchUser} />
      <Alert id='alert' show={alert} variant='dark'>
        Please enter a user name!
        </Alert>
      {loading ?
        <Spinner id='load' animation="border" variant="light" /> :
        <>
          {error ? <NotFound /> :
            <>
              {data ? <RepoCards data={data} /> : null}
            </>}
        </>}
    </>
  )
}

export default App
