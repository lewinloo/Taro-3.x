import { action, observable } from 'mobx'

class Counter {
  @observable
  count = 0;

  @action.bound
  increment() {
    this.count++
  }

  @action.bound
  decrement() {
    this.count--
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      this.count++
    }, 1000)
  }
}

export default new Counter()
