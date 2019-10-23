import {DebouncedTypingStrategy} from './debounced-typing.js'
import {ImmediateTypingStrategy} from './typing.js'

const input = document.querySelector('.js-input')
const placeholder = document.querySelector('.js-placeholder')
const toggleBtn = document.querySelector('.js-btn')
const strategyText = document.querySelector('.js-strategy')

const debouncedStrategy = new DebouncedTypingStrategy()
const immediateStrategy = new ImmediateTypingStrategy()

let strategy = immediateStrategy;
strategyText.textContent = strategy.constructor.name

toggleBtn.addEventListener('click', () => {
    strategy = strategy === immediateStrategy ? debouncedStrategy : immediateStrategy
    strategyText.textContent = strategy.constructor.name
})

input.addEventListener('keyup', (ev) => {
    strategy.onChange(ev.target.value, value => {
        placeholder.textContent = value
    })
})