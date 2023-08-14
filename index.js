import { copyToClipboard } from './copyToClipboard.js'
import { themeSwitcher } from './themeSwitcher.js'
import {calculate} from './calculate.js'
import {keydown} from './keydown.js'
import {clear} from './keydown.js'
import { charKeyBtn } from './keydown.js'

const input = document.getElementById('input')

document.querySelectorAll('.charKey').forEach(charKeyBtn)
document.getElementById('clear').addEventListener('click', clear)
input.addEventListener('keydown', keydown) 
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)