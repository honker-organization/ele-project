module.exports = () => {
  const data = { users: [] }
  for (let i = 0; i < 6; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }
  return data
}