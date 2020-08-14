import { observable } from 'mobx'

const counter = observable({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
  get doubleCount() {
    return this.count * 2
  },
})

export { counter }
