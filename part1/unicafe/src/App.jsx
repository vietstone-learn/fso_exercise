import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(good - bad) / all} />
      <StatisticLine text='positive' value={(good / all) * 100 + ' %'} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      {all === 0 ? (
        <div>No feedback given</div>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      )}
    </>
  )
}

export default App
